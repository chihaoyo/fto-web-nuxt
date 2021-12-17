const axios = require('axios')
const parse = require('url-parse')
const cheerio = require('cheerio')

const locales = require('~/lib/locales')

const removeScript = true
const removeStyle = true

const regexHexChar = /&#x([A-F\d]+);/g
const toReadableString = html => html.replace(regexHexChar, (m, $1) => String.fromCharCode(parseInt($1, 16)))

const ctrlRegex = /\s*{{\s*[0-9a-zA-Z-][^{}]+(=.+)?\s*}}\s*/g
const extractMatchContent = m => m.replace('{{', '').replace('}}', '').trim()
/*
control syntax can be {{ c }} or {{ a=v }}
*/

const parseControls = (content) => {
  content = toReadableString(content)
  const matches = content.match(ctrlRegex)
  const classes = []
  const attributes = {}
  if(matches) {
    content = content.replace(ctrlRegex, '').trim()
    matches.map(extractMatchContent).forEach(m => {
      if(m.includes('=')) {
        const [k, v] = m.split('=', 2).map(t => ('' + t).trim())
        attributes[k] = (!isNaN(v) ? +v : v)
      } else {
        classes.push('' + m.trim())
      }
    })
  }
  content = content.trim()
  return {
    content,
    classes,
    attributes
  }
}

const localCodes = locales.map(loc => loc.code)
const getMLObj = () => Object.assign({}, ...localCodes.map(loc => ({ [loc]: {} })))
/*
ml prototype { [loc]: {}... }
*/

async function getDoc(publicURL) {
  let gdoc = await axios.get(publicURL)
  gdoc = gdoc.data
  gdoc = gdoc.split('\n').map(line => line.trim()).join('') // trim lines and join

  // remove head
  gdoc = gdoc.replace(/<head[^>]*>.*<\/head>/, '')

  // remove styling
  if(removeStyle) {
    gdoc = gdoc.replace(/<style[^>]*>.*<\/style>/, '')
  }
  gdoc = gdoc.replace(/line-height/g, 'line-height-disabled') // force remove unwanted styling attributes

  // remove script tags
  if(removeScript) {
    gdoc = gdoc.replace(/<script[^>]*>.*<\/script>/, '')
  }

  // remove google.com redirects
  const replacements = []
  const anchors = gdoc.match(/<\s*a[^>]*>(.*?)<\s*\/\s*a>/g)
  if(anchors) {
    anchors.forEach(match => {
      let replacement = null
      const hrefMatch = match.match(/href="(.+)"/)
      if(hrefMatch) {
        const url = hrefMatch[1]
        const parsed = parse(url, true)
        if(['google.com', 'www.google.com'].includes(parsed.host) && parsed.pathname === '/url') {
          replacement = match.replace(url, parsed.query.q)
        }
      }
      if(replacement) {
        replacements.push({
          find: match,
          replace: replacement
        })
      }
    })
  }
  replacements.forEach(replacement => {
    gdoc = gdoc.replace(replacement.find, replacement.replace)
  })

  gdoc = gdoc.replace(new RegExp(String.fromCharCode(160), 'g'), ' ') // replace nbsp
  gdoc = gdoc.replace(/<span[^>]*>\s*<\/span>/g, '') // remove empty span
  gdoc = gdoc.replace(/<p[^>]*>\s*<\/p>/g, '') // remove empty p

  gdoc = gdoc.replace(/<hr>/g, '<div class="divider"></div>') // make horizontal divider
  gdoc = gdoc.replace(/([0-9]+)\^(th|st|nd|rd)/g, '$1<sup>$2</sup>') // make superscript

  // cheerio
  const $ = cheerio.load(gdoc)

  $('#header, #footer, #banners').remove()
  $('#contents').removeAttr('id').addClass('content-wrapper').children().first().removeClass().addClass('content')

  const titleEl = $('p.title')
  let title = 'What the title'
  if(titleEl.length > 0) {
    title = titleEl.text()
    titleEl.remove()
  }
  const subtitleEl = $('p.subtitle')
  let subtitle = ''
  if(subtitleEl.length > 0) {
    subtitle = subtitleEl.text()
    subtitleEl.remove()
  }

  let coverImage
  let coverImageDescHTML
  let authorInfoHTML
  let summary
  let summaryHTML

  const cards = []

  const tables = $('table') // tables are cards
  for(let i = 0; i < tables.length; i++) {
    const table = tables.eq(i)
    const cells = table.find('td')
    const { content: type, classes: cardClasses } = parseControls(cells.eq(0).text()) // attributes: containerAttributes

    const rows = table.find('tr')
    if(type === 'end') {
      table.nextAll().remove()
      table.remove()
    } else if(type === 'meta') {
      const fieldElements = table.find('td')
      if(fieldElements.length >= 5) {
        coverImage = fieldElements.eq(1).html()
        coverImageDescHTML = fieldElements.eq(2).html()
        authorInfoHTML = fieldElements.eq(3).find('ul').html()
        summaryHTML = fieldElements.eq(4).html()
        summary = fieldElements.eq(4).text().trim()

        const coverImageMatch = coverImage.match(/src="([^"]+)"/)
        if(coverImageMatch) {
          coverImage = coverImageMatch[1]
        } else {
          coverImage = null
        }
        if(authorInfoHTML) {
          authorInfoHTML = authorInfoHTML.replace(/([0-9]{4})\/([0-9]{1,2})\/([0-9]{1,2})/g, '$1.$2.$3') // yyyy.mm.dd
        }
      }
      table.remove()
    } else if(type === 'html') {
      const cols = rows.eq(1).find('td')
      if(cols.length === 4) { // must have 4 languages
        const ml = getMLObj()
        for(let b = 0; b < 4; b++) {
          const loc = localCodes[b]
          ml[loc] = cols.eq(b).text().trim().length > 0 ? cols.eq(b).html() : cols.eq(0).html()
        }
        cards.push({
          type,
          classes: cardClasses,
          content: ml
        })
      }
    } else if(type === 'event') {
      const fields = ['_', 'title', 'place', 'date', 'time', 'register', 'info']
      if(rows.length === fields.length) { // row count must match field count
        const card = {
          type,
          classes: cardClasses
        }
        for(let a = 1; a < fields.length; a++) { // start with first field (skip first row)
          const ml = getMLObj()
          const field = fields[a]
          const row = rows.eq(a)
          const cols = row.find('td')
          if(cols.length === 4) { // must have 4 languages
            for(let b = 0; b < 4; b++) {
              const loc = localCodes[b]
              ml[loc] = cols.eq(b).text().trim().length > 0 ? cols.eq(b).html() : cols.eq(0).html()
            }
            card[field] = ml
          }
        }
        cards.push(card)
      }
    } else if(type === 'project') {
      const fields = ['_', 'title', 'description', 'contributors', 'links']
      if(rows.length === fields.length) { // row count must match field count
        const card = {
          type,
          classes: cardClasses
        }
        for(let a = 1; a < fields.length; a++) { // start with first field (skip first row)
          const ml = getMLObj()
          const field = fields[a]
          const row = rows.eq(a)
          const cols = row.find('td')
          if(cols.length === 4) { // must have 4 languages
            for(let b = 0; b < 4; b++) {
              const loc = localCodes[b]
              ml[loc] = cols.eq(b).text().trim().length > 0 ? cols.eq(b).html() : cols.eq(0).html()
            }
            card[field] = ml
          }
        }
        cards.push(card)
      }
    } else if(type === 'slideshow') {
      const slides = []
      for(let a = 1; a < rows.length; a++) { // skip first row
        const ml = getMLObj()
        const row = rows.eq(a)
        const cols = row.find('td')
        if(cols.length === 4) { // must have 4 languages
          let image
          let defaultHTML
          for(let b = 0; b < 4; b++) {
            const loc = localCodes[b]
            const col = cols.eq(b)
            if(b === 0) {
              image = col.find('img').remove().attr('src')
            }
            col.find('span:empty').remove()
            col.find('p:empty').remove()
            const html = col.html()
            if(b === 0) {
              defaultHTML = html
            }
            ml[loc] = col.text().length > 0 ? html : defaultHTML
          }
          if(image) {
            slides.push({
              image,
              description: ml
            })
          }
        }
      }
      if(slides.length > 0) {
        cards.push({
          type,
          classes: cardClasses,
          slides
        })
      }
    } else if(type === 'people') {
      const people = []
      for(let a = 1; a < rows.length; a++) { // skip first row
        const row = rows.eq(a)
        const cols = row.find('td')
        const fields = ['id', 'avatar', 'keywords', 'handle']
        if(cols.length >= fields.length) {
          const person = {}
          for(let b = 0; b < fields.length; b++) {
            const field = fields[b]
            const col = cols.eq(b)
            let value = col.text()
            if(field === 'avatar') {
              value = col.find('img').attr('src')
            } else if(field === 'keywords') {
              value = col.find('li').map((i, el) => $(el).text()).toArray()
            }
            person[field] = value
          }
          people.push(person)
        }
      }
      if(people.length > 0) {
        cards.push({
          type,
          classes: cardClasses,
          people
        })
      }
    } else if(type === 'object') { // template
      const fields = ['_', 'title', 'description']
      if(rows.length === fields.length) { // row count must match field count
        const card = {
          type,
          classes: cardClasses
        }
        // const ml = getMLObj()
        for(let a = 1; a < fields.length; a++) { // start with first field (skip first row)
        }
        cards.push(card)
      }
    }
  }

  return {
    title,
    ...(subtitle && subtitle.length > 0 ? { subtitle } : {}),
    ...(coverImage ? { coverImage } : {}),
    ...(coverImageDescHTML && coverImageDescHTML.length > 0 ? { coverImageDescHTML } : {}),
    ...(authorInfoHTML && authorInfoHTML.length > 0 ? { authorInfoHTML } : {}),
    ...(summary && summary.length > 0 ? { summary } : {}),
    ...(summaryHTML && summaryHTML.length > 0 ? { summaryHTML } : {}),
    cards
  }
}

exports.getDoc = getDoc
