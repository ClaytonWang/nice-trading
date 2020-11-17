<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
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
            show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
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
  </div>
</template>

<script>
import { getTrades } from '@/api/trade';
export default {
  name: 'Dashboard',
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
    handleClick(row) {
      console.log(row);
    },
  },
};
</script>
<style lang="scss">
.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  width: 50%;
  margin-right: 0;
  margin-bottom: 0;
}
</style>
