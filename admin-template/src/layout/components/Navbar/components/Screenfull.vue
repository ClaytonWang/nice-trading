<template>
  <div class="screenfull">
    <svg-icon
      :icon-class="isFullscreen ? 'exit-screenfull' : 'screenfull'"
      @click.native="handleClick"
    ></svg-icon>
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (screenfull.isEnabled) {
        screenfull.on('change', () => {
          this.isFullscreen = screenfull.isFullscreen
        })
      }
    },
    handleClick() {
      if (!screenfull.isEnabled) {
        this.$message({ type: 'warning', message: '该浏览器不支持全屏功能' })
        return false
      }
      screenfull.toggle()
    }
  }
}
</script>

<style lang="less" scoped>
.screenfull {
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  vertical-align: middle;
}
</style>
