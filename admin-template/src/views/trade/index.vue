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
        <el-table :data="tableData" border>
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
            label="买入数量"
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
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <AddTrade ref="addTrade" />
  </div>
</template>

<script>
import { getTrades } from '@/api/trade';
import AddTrade from './AddTrade';

export default {
  name: 'Trade',
  components: {
    AddTrade,
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    };
  },
  async mounted() {
    const data = await getTrades();
    console.log(data);
    this.tableData = data;
  },
  methods: {
    viewDetail(row) {
      this.$router.push({
        name: 'TradeDetail',
      });
      console.log(row);
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
