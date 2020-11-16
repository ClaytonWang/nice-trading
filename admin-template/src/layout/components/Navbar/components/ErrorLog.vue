<template>
  <div class="error-log">
    <el-badge
      :is-dot="logs.length > 0"
      @click.native="show = true"
      style="font-size: 20px; line-height: 1; cursor: pointer;"
    >
      <svg-icon icon-class="bug"></svg-icon>
    </el-badge>
    <el-dialog
      title="错误日志"
      custom-class="error-log-dialog"
      :visible.sync="show"
      :append-to-body="true"
      top="10vh"
      width="80%"
    >
      <el-table :data="logs" border>
        <el-table-column label="信息">
          <template v-slot="scope">
            <div style="margin-bottom: 5px;">
              <span class="message-title" style="padding-right: 5px;"
                >Msg:</span
              >
              <el-tag type="danger">{{ scope.row.err.message }}</el-tag>
            </div>
            <div style="margin-bottom: 5px;">
              <span class="message-title" style="padding-right: 8px;"
                >Info:</span
              >
              <el-tag type="warning"
                >{{ scope.row.vm.$vnode.tag }} error in
                {{ scope.row.info }}</el-tag
              >
            </div>
            <div>
              <span class="message-title" style="padding-right: 12px;"
                >Url:</span
              >
              <el-tag type="success">{{ scope.row.url }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="详细">
          <template v-slot="scope">{{
            scope.row.err.stack
              ? scope.row.err.stack
              : JSON.stringify(scope.row.err)
          }}</template>
        </el-table-column>
      </el-table>
      <template v-slot:footer>
        <el-button @click="handleClear" type="warning" icon="el-icon-delete"
          >清除</el-button
        >
        <el-button @click="show = false" type="primary">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ErrorLog',
  data() {
    return {
      show: false
    }
  },
  computed: {
    logs() {
      return this.$store.state.errorLog.logs
    }
  },
  methods: {
    handleClear() {
      this.$store.dispatch('errorLog/clearErrorLog')
    }
  }
}
</script>

<style lang="less" scoped>
.error-log {
  display: inline-block;
}

/deep/ .error-log-dialog {
  .el-dialog__body {
    td {
      &:nth-child(2) {
        display: block;
        height: 99px;
        overflow-y: scroll;
      }
    }
  }
}
</style>
