<template>
  <div class="setting">
    <svg-icon icon-class="setting" @click.native="handleClick"></svg-icon>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  methods: {
    handleClick() {
      this.$store.dispatch('settings/changeSetting', {
        key: 'showSettings',
        value: true
      })
    }
  }
}
</script>

<style lang="less" scoped>
.setting {
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  vertical-align: middle;
}
</style>
