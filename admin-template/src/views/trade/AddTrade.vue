<template>
  <el-dialog
    class="new-dialog"
    :visible.sync="dialogVisible"
    :show-close="true"
    @close="close()"
    :append-to-body="true"
    :close-on-click-modal="false"
    :modal="true"
    center
  >
    <div slot="title" class="title">
      <span>交易计划</span>
    </div>
    <el-form :model="trade" :label-position="'right'">
      <el-form-item label="代码/名称：">
        <!-- <el-autocomplete
          class="inline-input"
          v-model="state2"
          :fetch-suggestions="querySearch"
          placeholder="请输入代码或名称"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete> -->
        <el-input
          v-model="trade.code"
          size="small"
          placeholder="代码"
        ></el-input>
        <el-input
          v-model="trade.name"
          size="small"
          placeholder="名称"
        ></el-input>
      </el-form-item>

      <el-form-item label="止损价：">
        <el-input-number
          size="small"
          v-model="trade.stop_loss"
          :precision="2"
          :step="0.1"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="止赢价：">
        <el-input-number
          size="small"
          v-model="trade.take_profit"
          :precision="2"
          :step="0.1"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="买入数量：">
        <el-input-number
          size="small"
          v-model="trade.plan_amount"
          :precision="0"
          :step="100"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="执行日期：">
        <el-date-picker
          size="small"
          v-model="trade.exec_date"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item label="理由：">
        <el-input
          size="small"
          type="textarea"
          placeholder="请输入内容"
          v-model="trade.comment"
          show-word-limit
        >
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="close">取消</el-button>
      <el-button size="small" type="primary" @click="save">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapActions } = createNamespacedHelpers('trade');

export default {
  name: 'AddTrade',
  components: {},
  data() {
    return {
      dialogVisible: false,
      trade: {},
    };
  },
  created() {
    this.$on('open', () => {
      this.dialogVisible = true;
      // this.resetData();
      // this.initData();
    });
  },
  mounted() {},
  methods: {
    ...mapActions(['addTrades']),
    close() {
      this.dialogVisible = false;
    },
    async save() {
      console.log(this.trade);
      await this.addTrades(this.trade);
      this.dialogVisible = false;
    },
  },
};
</script>
<style lang="scss">
.new-dialog {
}
</style>
