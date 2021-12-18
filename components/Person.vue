<template>
<div class="person">
  <div class="avatar" :style="val.avatar ? { backgroundImage: `url('${val.avatar}')` } : {}" />
  <div class="detail">
    <div class="id">{{ val.id }}</div>
    <div v-if="val.keywords.length > 0" class="keywords">
      <label v-for="keyword of val.keywords" :key="keyword">{{ keyword }}</label>
    </div>
    <div v-if="val.handle" class="handle">{{ val.handle }}</div>
  </div>
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
  max-width: 20rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  > .avatar {
    min-width: 6rem;
    aspect-ratio: 1;
    background-color: var(--fto-orange);
    background-size: contain;
    background-position: center center;
    border-radius: 1.5rem;
  }
  > .detail {
    min-width: 6rem;
    min-height: 6rem;
    margin-top: 0.5rem;
    margin-left: -1rem;
    padding: 1rem;
    background-color: white;
    border-radius: 1.5rem;
  }
  .id {
    margin-left: 0.25rem;
  }
  .handle {
    font-size: 0.875rem;
    margin-left: 0.25rem;
  }
  .keywords {
    display: flex;
    flex-wrap: wrap;
    margin: 0.5rem 0;
    > label {
      color: var(--fto-blue);
      font-size: 0.875rem;
      display: inline-block;
      margin: 0.125rem;
      padding: 0.5rem 0.75rem;
      line-height: 0.875rem;
      border-radius: 2rem;
      background-color: var(--fto-blue-light);
    }
  }
}
</style>
