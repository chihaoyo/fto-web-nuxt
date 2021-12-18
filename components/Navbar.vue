<template>
<div class="navbar">
  <div class="locales">
    <div v-for="locale in $i18n.locales" :key="locale.code" class="locale">
      <a v-if="locale.code !== loc" @click.prevent.stop="$i18n.setLocale(locale.code)" href="#">{{ locale.name }}</a>
      <span v-else>{{ locale.name }}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    loc() {
      return this.$i18n.locale
    }
  }
}
</script>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0.75rem;
  right: 0.75rem;
  padding: 1rem;
  line-height: 1;
  background-color: white;
  border-radius: 1.5rem;
  > .locales {
    display: flex;
    > .locale:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
}
</style>
