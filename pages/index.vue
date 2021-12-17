<template>
<div class="page index">
  <div class="cards">
    <template v-for="(card, cardIndex) of doc.cards">
      <HTMLCard v-if="card.type === 'html'" :key="cardIndex" :val="card" class="card" />
      <event v-else-if="card.type === 'event'" :key="cardIndex" :val="card" class="card" />
      <project v-else-if="card.type === 'project'" :key="cardIndex" :val="card" class="card" />
      <slideshow v-else-if="card.type === 'slideshow'" :key="cardIndex" :val="card" class="card" />
      <div v-else-if="card.type === 'people'" :key="cardIndex" :val="card" class="card people">
        <person v-for="(person, personIndex) of card.people" :key="personIndex" :val="person" class="s" />
      </div>
    </template>
  </div>
</div>
</template>

<script>
import { indexDoc } from '~/lib/const'
import { getDoc } from '~/lib/gdoc'
import { generateMeta } from '~/lib/meta'
import Event from '~/components/Event'
import HTMLCard from '~/components/HTMLCard'
import Person from '~/components/Person'
import Project from '~/components/Project'
import Slideshow from '~/components/Slideshow'

export default {
  components: {
    Event,
    HTMLCard,
    Person,
    Project,
    Slideshow
  },
  async asyncData() {
    const doc = await getDoc(indexDoc)
    return {
      doc
    }
  },
  head() {
    return generateMeta(this.doc.title, this.doc.subtitle, this.doc.summary, this.doc.coverImage)
  },
  computed: {
    loc() {
      return this.$i18n.locale
    }
  }
}
</script>

<style lang="scss">
.cards {
  > .card {
    &.people {
      display: flex;
      flex-wrap: wrap;
      margin: 1rem;
      > .person {
        margin: 1rem;
        flex-basis: 8rem;
      }
    }
  }
}
</style>
