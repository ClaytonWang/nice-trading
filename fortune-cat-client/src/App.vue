<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view v-if="isRouterAlive" />
    </div>
  </a-config-provider>
</template>

<script>
import { domTitle, setDocumentTitle } from '@/utils/domUtil'
import { i18nRender } from '@/locales'

export default {
  data () {
    return {
      isRouterAlive: true
    }
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  computed: {
    locale () {
      // 只是为了切换语言时，更新标题
      const { title } = this.$route.meta
      title && (setDocumentTitle(`${i18nRender(title)} - ${domTitle}`))

      return this.$i18n.getLocaleMessage(this.$store.getters.lang).antLocale
    }
  },
  methods: {
    reload () {
       this.isRouterAlive = false
       this.$nextTick(function () {
          this.isRouterAlive = true
       })
    }
  }
}
</script>
