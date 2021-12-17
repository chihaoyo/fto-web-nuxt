<template>
<div class="person">
  <img v-if="val.avatar" class="avatar" :src="val.avatar" />
  <div class="id">{{ val.id }}</div>
  <div v-if="val.keywords.length > 0" class="keywords">
    <label v-for="keyword of val.keywords" :key="keyword">{{ keyword }}</label>
  </div>
  <div v-if="val.handle" class="handle">{{ val.handle }}</div>
</div>
</template>

<script>
import { isCard } from '~/lib/mixins'
export default {
  mixins: [isCard]
}
</script>

<style lang="scss">
.person {
  > .id {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  > .avatar {
    width: 100%;
  }
  > .keywords {
    display: flex;
    flex-wrap: wrap;
    margin: 0.5rem 0;
    > label {
      color: var(--fto-blue);
      font-size: 0.875rem;
      display: inline-block;
      margin: 0.125rem;
      padding: 0.375rem 0.5rem;
      line-height: 0.875rem;
      border: 2px solid var(--fto-blue);
      border-radius: 2rem;
    }
  }
  > .handle {
    font-size: 0.875rem;
  }
}
</style>
