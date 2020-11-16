<template>
  <el-menu-item class="sidebar-logo">
    <svg-icon icon-class="logo"></svg-icon>
    <template v-slot:title>
      <span>{{ title }}</span>
    </template>
  </el-menu-item>
</template>

<script>
export default {
  name: 'SidebarLogo',
  computed: {
    title() {
      return this.$store.state.settings.title
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar-logo {
  background-color: #002140 !important;

  span {
    color: #fff;
    font-size: 22px;
    font-weight: bold;
  }
}
</style>
