<template>
  <el-dialog
    class="new-dialog"
    :visible.sync="dialogVisible"
    :show-close="true"
    @close="close()"
    :append-to-body="true"
    :close-on-click-modal="false"
    :modal="true"
  >
    <div slot="title" class="title">
      <el-radio-group v-model="tradeDetail.trade_type" fill="red">
        <el-radio-button label="1" type="danger"> 买入 </el-radio-button>
        <el-radio-button label="0">卖出</el-radio-button>
      </el-radio-group>
    </div>
    <el-form :model="tradeDetail" :label-position="'right'">
      <el-form-item label="买入日期">
        <el-date-picker
          size="small"
          v-model="tradeDetail.buying_date"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item label="入场价:">
        <el-input-number
          size="small"
          v-model="tradeDetail.buying_rate"
          :precision="2"
          :step="0.1"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="买入数量：">
        <el-input-number
          size="small"
          v-model="tradeDetail.buying_amount"
          :precision="0"
          :step="100"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="理由：">
        <el-input
          size="small"
          type="textarea"
          placeholder="请输入内容"
          v-model="tradeDetail.comment"
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
const { mapActions } = createNamespacedHelpers('tradeDetail');

export default {
  name: 'AddTradeDetail',
  components: {},
  data() {
    return {
      dialogVisible: false,
      tradeDetail: {},
    };
  },
  computed: {},
  created() {
    this.$on('open', () => {
      this.dialogVisible = true;
      // this.resetData();
      // this.initData();
    });
  },
  mounted() {},
  methods: {
    ...mapActions(['addTradeDetail']),
    close() {
      this.dialogVisible = false;
    },
    commission() {
      if (this.tradeDetail.buying_rate && this.tradeDetail.buying_amount) {
        let cm =
          this.tradeDetail.buying_rate *
          this.tradeDetail.buying_amount *
          0.00025;

        return cm < 5 ? 5 : cm;
      } else {
        return 0;
      }
    },
    async save() {
      this.tradeDetail.trade_id = this.$route.query.trade_id;
      this.tradeDetail.commission = this.commission();
      console.log(this.tradeDetail);
      await this.addTradeDetail(this.tradeDetail);
      this.dialogVisible = false;
    },
  },
};
</script>
<style lang="scss">
.new-dialog {
}
</style>
