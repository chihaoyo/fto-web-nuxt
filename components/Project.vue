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
  padding: 2rem;
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
    text-decoration: underline;
    text-decoration-thickness: 2px;
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
