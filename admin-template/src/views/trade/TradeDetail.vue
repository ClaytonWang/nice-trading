<template>
  <div class="trade-detail">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>计划详情</span>
        <div class="btn-add" @click="add">
          <svg-icon icon-class="add_circle"></svg-icon>
          添加
        </div>
      </div>
      <div>
        <el-table :data="trade_details" border>
          <el-table-column
            type="index"
            label="序号"
            align="center"
          ></el-table-column>

          <el-table-column prop="buying_rate" label="买入价"></el-table-column>

          <el-table-column
            prop="buying_amount"
            label="买入数量"
          ></el-table-column>

          <el-table-column prop="buying_date" label="买入日期">
          </el-table-column>

          <el-table-column prop="selling_rate" label="卖出价"></el-table-column>

          <el-table-column
            prop="selling_amount"
            label="卖出数量"
          ></el-table-column>

          <el-table-column prop="selling_date" label="卖出日期">
          </el-table-column>

          <el-table-column prop="commission" label="佣金"> </el-table-column>

          <el-table-column prop="stamp_tax" label="交易税"> </el-table-column>

          <el-table-column prop="trade_type" label="交易类型">
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="small" icon="el-icon-edit">
                编辑
              </el-button>
              <el-button
                @click="del(scope.row)"
                type="text"
                size="small"
                icon="el-icon-delete"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('tradeDetail');

export default {
  name: 'TradeDetail',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      trade_details(state) {
        return state.trade_details;
      },
    }),
  },
  mounted() {
    const { trade_id } = this.$route.query;
    if (!trade_id) return;
    this.getTradeDetails(trade_id);
  },
  methods: {
    ...mapActions(['getTradeDetails', 'delTradeDetail']),
    add() {},
    del(row) {
      this.delTradeDetail(row.id);
    },
  },
};
</script>
<style lang="scss" scope>
.trade-detail {
  .btn-add {
    float: right;
    padding: 3px 0;
    color: #409eff;
    cursor: pointer;

    .svg-icon {
      font-size: 16px;
      vertical-align: middle;
    }
  }
}
</style>
