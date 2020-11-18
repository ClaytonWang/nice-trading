<template>
  <div class="my-trade">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>交易计划</span>
        <div class="btn-add" @click="addTradePlan">
          <svg-icon icon-class="add_circle"></svg-icon>
          添加
        </div>
      </div>
      <div>
        <el-table :data="trades" border>
          <el-table-column
            type="index"
            label="序号"
            align="center"
          ></el-table-column>
          <el-table-column prop="updated_at" label="更新日期"></el-table-column>
          <el-table-column label="名称/代码">
            <template slot-scope="scope">
              {{ scope.row.name }} / {{ scope.row.code }}
            </template>
          </el-table-column>
          <el-table-column prop="stop_loss" label="止损价"> </el-table-column>
          <el-table-column prop="take_profit" label="止赢价"> </el-table-column>
          <el-table-column
            prop="plan_amount"
            label="计划数量"
          ></el-table-column>
          <el-table-column prop="exec_date" label="执行日期"> </el-table-column>
          <el-table-column
            prop="comment"
            label="理由"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                @click="viewDetail(scope.row)"
                type="text"
                size="small"
                icon="el-icon-view"
              >
                查看
              </el-button>
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
    <AddTrade ref="addTrade" />
  </div>
</template>

<script>
import AddTrade from './AddTrade';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('trade');

export default {
  name: 'Trade',
  components: {
    AddTrade,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      trades(state) {
        return state.trades;
      },
    }),
  },
  mounted() {
    this.getTrades();
  },
  methods: {
    ...mapActions(['getTrades', 'delTrade']),
    viewDetail(row) {
      this.$router.push({
        name: 'TradeDetail',
        query: { trade_id: row.id },
      });
      console.log(row);
    },
    async del(row) {
      await this.delTrade(row.id);
    },
    addTradePlan() {
      this.$refs.addTrade.$emit('open');
    },
  },
};
</script>
<style lang="scss" scope>
.my-trade {
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
