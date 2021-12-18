<template>
<div class="event">
  <div class="title" v-html="val.title[loc]"></div>
  <div class="place" v-html="val.place[loc]"></div>
  <div class="date" v-html="val.date[loc]"></div>
  <div class="time" v-html="val.time[loc]"></div>
  <div class="register" v-html="val.register[loc]"></div>
  <div class="info" v-html="val.info[loc]"></div>
</div>
</template>

<script>
import { isCard } from '~/lib/mixins'
export default {
  mixins: [isCard]
}
</script>

<style lang="scss">
.event {
  max-width: 30rem;
  margin: 1.5rem;
  padding: 2rem;
  background-color: white;
  border-radius: 1.5rem;
  > .title {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  > .date {
    font-size: 1.5rem;
  }
}
</style>
