const { body } = document
const DESKTOP_WIDTH = 992

export default {
  computed: {
    isMobile() {
      return this.$store.getters.isMobile
    },
    sidebar() {
      return this.$store.state.app.sidebar
    }
  },
  watch: {
    $route: {
      handler: function () {
        if (this.isMobile && this.sidebar) {
          this.$store.dispatch('app/toggleSidebar', false)
        }
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.handleResize)
  },
  mounted() {
    const isMobile = this.isMobileSize()

    if (isMobile) {
      this.$store.dispatch('app/toggleDevice', 'mobile')
      this.$store.dispatch('app/toggleSidebar', false)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    isMobileSize() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < DESKTOP_WIDTH
    },
    handleResize() {
      if (!document.hidden) {
        const isMobile = this.isMobileSize()

        this.$store.dispatch(
          'app/toggleDevice',
          isMobile ? 'mobile' : 'desktop'
        )

        if (isMobile) {
          this.$store.dispatch('app/toggleSidebar', false)
        }
      }
    }
  }
}
