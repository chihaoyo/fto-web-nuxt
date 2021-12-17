<template>
<div class="person">
  <img v-if="val.avatar" class="avatar" :src="val.avatar" />
  <div class="id">{{ val.id }}</div>
  <div v-if="val.keywords.length > 0" class="keywords">{{ val.keywords }}</div>
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
  > .avatar {
    width: 100%;
  }
}
</style>
