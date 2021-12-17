<template>
<div class="slideshow">
  <div class="slide">
    <img class="image" :src="currentSlide.image" />
    <div class="description" v-html="currentSlide.description[loc]"></div>
  </div>
</div>
</template>

<script>
import { isCard } from '~/lib/mixins'
export default {
  mixins: [isCard],
  data() {
    return {
      timeInterval: 2000,
      slideIndex: 0
    }
  },
  computed: {
    currentSlide() {
      return this.val.slides[this.slideIndex]
    }
  },
  mounted() {
    setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.val.slides.length
    }, this.timeInterval)
  }
}
</script>

<style lang="scss">
.slideshow { // ready for horizontal scrolling
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  > .slide {
    min-width: 100%;
    > .image {
      display: block;
      width: 100%;
    }
    > .description {
      padding: 0.5rem;
      font-size: 0.75rem;
      color: var(--fto-blue);
    }
  }
}
</style>
