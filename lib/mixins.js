const isCard = {
  props: {
    val: {
      type: Object,
      default: null
    }
  },
  computed: {
    loc() {
      return this.$i18n.locale
    }
  }
}

exports.isCard = isCard
