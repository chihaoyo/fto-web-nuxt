<template>
<div class="project">
  <div class="title" v-html="val.title[loc]"></div>
  <div class="description" v-html="val.description[loc]"></div>
  <div class="contributors" v-html="val.contributors[loc]"></div>
  <div class="links" v-html="val.links[loc]"></div>
</div>
</template>

<script>
import { isCard } from '~/lib/mixins'
export default {
  mixins: [isCard]
}
</script>

<style lang="scss">
.project {
  max-width: 30rem;
  margin: 1.5rem;
  padding: 2rem;
  background-color: white;
  border-radius: 1.5rem;
  > :not(:last-child) {
    margin-bottom: 1rem;
  }
  > .title {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  > .description {
    font-size: 0.875rem;
  }
  > .contributors {
    > ul {
      padding-left: 1.25rem;
    }
  }
  > .links {
    > ul {
      padding-left: 1.25rem;
    }
  }
}
</style>
