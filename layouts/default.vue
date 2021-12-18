<template>
<main>
  <navbar />
  <nuxt />
</main>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
:root {
  --fto-blue: #404ADD;
  --fto-blue-light: #CCCFFF;
  --fto-orange: #FFB13B;
  --fto-grey-light: #DFDFDF;
}

html, body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: white;
  color: black;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.375;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input, button {
  font-family: "system-ui", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  line-height: 1;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
* {
  &, &:before, &:after {
    box-sizing: border-box;
    margin: 0;
  }
}
a {
  color: var(--fto-blue);
  text-decoration-thickness: 2px;
}
</style>
