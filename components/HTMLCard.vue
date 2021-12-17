<template>
<div class="html">
  <div class="content" v-html="val.content[loc]"></div>
</div>
</template>

<script>
import { isCard } from '~/lib/mixins'
export default {
  mixins: [isCard]
}
</script>

<style lang="scss">
.html {
  padding: 2rem;
  > .content {
    > p {
      font-size: 1.125rem;
    }
    > p:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}
</style>
