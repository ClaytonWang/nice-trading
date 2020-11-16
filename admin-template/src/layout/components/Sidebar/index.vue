<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      background-color="#001529"
      text-color="#a6adb4"
      active-text-color="#409eff"
      :default-active="activeMenu"
      :collapse="isCollapse"
      :collapse-transition="false"
      :unique-opened="true"
    >
      <SidebarLogo v-if="showSidebarLogo" />
      <sidebar-item
        v-for="route in routers"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      ></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SidebarItem from './components/SidebarItem.vue'
import SidebarLogo from './components/SidebarLogo.vue'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem,
    SidebarLogo
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    routers() {
      return this.$store.state.permission.routers
    },
    showSidebarLogo() {
      return this.$store.state.settings.showSidebarLogo
    },
    activeMenu() {
      const { meta, path } = this.$route

      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    isCollapse() {
      return !this.sidebar
    }
  }
}
</script>
