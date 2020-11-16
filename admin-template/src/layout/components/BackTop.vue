<template>
  <el-backtop :visibility-height="120" :right="20" :bottom="40"></el-backtop>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped>
.el-backtop {
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}
</style>
