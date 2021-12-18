<template>
<div class="slideshow">
  <div class="slide">
    <div class="image" :style="{ backgroundImage: `url('${currentSlide.image}')` }"></div>
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
      timeInterval: 5000,
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
    min-width: calc(100% - 3rem);
    margin: 1.5rem;
    > .image {
      display: block;
      width: 100%;
      aspect-ratio: 2;
      background-color: var(--fto-light-grey);
      background-size: cover;
      background-position: center center;
      border-radius: 1.5rem;
    }
    > .description {
      padding: 0.5rem 0;
      font-size: 0.75rem;
      color: var(--fto-blue);
    }
  }
}
</style>
