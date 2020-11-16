<template>
  <div class="app-container">
    <svg-icon icon-class="error"></svg-icon>
    <div class="desc">抱歉，你访问的页面不存在或仍在开发中</div>
    <div class="action">
      <el-button type="primary" @click="handleBackPrev">返回前页</el-button>
      <el-button type="primary" @click="handleBackHome">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  methods: {
    handleBackPrev() {
      this.$router.replace('/')
    },
    handleBackHome() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.app-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 10vh;

  .svg-icon {
    font-size: 120px;
  }

  .desc {
    color: rgba(0, 0, 0, 0.45);
    font-size: 20px;
    margin: 20px 0;
  }
}
</style>
