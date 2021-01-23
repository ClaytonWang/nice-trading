<template>
  <div class="app-container">
    <div class="filter-container">
      <el-date-picker v-model="listQuery.date" class="filter-item" :placeholder="'请选择日期'" type="date" />
      <el-select v-model="listQuery.type" placeholder="Type" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
      </el-select>
      <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        新建
      </el-button>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column label="序号" sortable="custom" align="center" width="80" :class-name="getSortClass('id')">
        <template slot-scope="{$index}">
          <span>{{ $index+1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Date" width="150px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.updated_at | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="股票名称(代码)" width="150">
        <template slot-scope="{row}">
          <span class="link-type" @click="handleUpdate(row)">{{ row.name +' ('+row.code+') ' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="战法" class-name="status-col">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.strategy.title }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="结果" class-name="status-col">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            编辑
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row,$index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <el-dialog
      v-el-drag-dialog
      :fullscreen="false"
      :close-on-click-modal="false"
      :title="textMap[dialogStatus]"
      :visible.sync="dialogFormVisible"
    >
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="80px">
        <el-form-item v-if="temp.id" label="ID" prop="id">
          {{ temp.id }}
        </el-form-item>
        <el-form-item label="股票名称" prop="name">
          <el-autocomplete
            v-model="stock"
            popper-class="stock-list"
            class="filter-item"
            :fetch-suggestions="searchStockAsync"
            placeholder="请输入内容"
            :trigger-on-focus="false"
            value-key="label"
            @select="handleStockSelect"
          >
            <i
              slot="suffix"
              class="el-icon-edit el-input__icon"
            />
            <template slot-scope="{ item }">
              <div class="name">{{ item.name }}</div>
              <span class="addr">{{ item.code }}</span>
            </template>
          </el-autocomplete>
        </el-form-item>
        <el-form-item label="战法" prop="strategy_id">
          <el-autocomplete
            v-model="strategy"
            popper-class="stock-list"
            class="filter-item"
            :fetch-suggestions="searchStrategyAsync"
            placeholder="请选择适用战法"
            :trigger-on-focus="true"
            value-key="title"
            @select="handleStrategySelect"
          >
            <i
              slot="suffix"
              class="el-icon-document"
            />
            <template slot-scope="{ item }">
              <div class="name">{{ item.title }}</div>
            </template>
          </el-autocomplete>
        </el-form-item>
        <el-form-item label="计划价" prop="plan_price">
          <el-input-number v-model="temp.plan_price" :precision="2" controls-position="right" />
        </el-form-item>
        <el-form-item label="止损价" prop="stop_loss">
          <el-input-number v-model="temp.stop_loss" :precision="2" controls-position="right" />
        </el-form-item>
        <el-form-item label="止盈价" prop="take_profit">
          <el-input-number v-model="temp.take_profit" :precision="2" controls-position="right" />
        </el-form-item>
        <el-form-item label="风险额" prop="risk">
          <el-input-number v-model="temp.risk" :precision="2" controls-position="right" />
        </el-form-item>
        <el-form-item label="入场时间" prop="exec_start_date">
          <el-col :span="24">
            <el-date-picker v-model="temp.exec_start_date" type="date" placeholder="选择开始日期" />
            <span class="line">-</span>
            <el-date-picker v-model="temp.exec_end_date" type="date" placeholder="选择结束日期" />
          </el-col>
        </el-form-item>
        <el-form-item label="交易备忘">
          <el-input v-model="temp.comment" :autosize="{ minRows: 4, maxRows: 6}" type="textarea" placeholder="请输入内容" show-word-limit maxlength="10000" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取消
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          确定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList, create, update, del } from '@/api/trading-plan'
import { search } from '@/api/stock'
import { fetchList as strategyList } from '@/api/strategy'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui

const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'PlanList',
  components: { Pagination },
  directives: { waves, elDragDialog },
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        fail: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      stock: '',
      strategy: '',
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      calendarTypeOptions,
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        symbol: '',
        code: '',
        strategy_id: '',
        plan_price: 0,
        plan_volume: 0,
        risk: 0,
        stop_loss: 0,
        take_profit: 0,
        exec_start_date: new Date(),
        exec_end_date: new Date(),
        comment: ''
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '新建'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(data => {
        this.list = data.rows
        this.total = data.count

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },

    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      this.stock = ''
      this.strategy = ''
      this.temp = {
        id: undefined,
        symbol: '',
        code: '',
        strategy_id: '',
        plan_price: 0,
        plan_volume: 0,
        risk: 0,
        stop_loss: 0,
        take_profit: 0,
        exec_start_date: new Date(),
        exec_end_date: new Date(),
        comment: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          create(this.temp).then((data) => {
            console.log(data)
            this.list.unshift(data)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.stock = this.temp.name + ' (' + this.temp.code + ')'
      this.strategy = this.temp.strategy.title
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          update(tempData).then(() => {
            const index = this.list.findIndex(v => v.id === this.temp.id)
            this.list.splice(index, 1, this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    async handleDelete(row, index) {
      const data = await del(row.id)
      console.log(data)
      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })
      this.list.splice(index, 1)
    },

    formatJson(filterVal) {
      return this.list.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    },
    async searchStockAsync(queryString, cb) {
      const list = await search(queryString)
      console.log(list)
      cb(list)
    },
    async searchStrategyAsync(queryString, cb) {
      const data = await strategyList(queryString)
      console.log(data)
      if (data && data.rows) {
        cb(data.rows)
      } else {
        cb([])
      }
    },
    handleStockSelect(item) {
      console.log(item)
      this.temp.code = item.code
      this.temp.symbol = item.symbol
      this.temp.name = item.name
    },
    handleStrategySelect(item) {
      console.log(item)
      this.temp.strategy_id = item.id
    }
  }
}
</script>
<style scoped lang="scss">
.line{
  margin:0 10px;
  text-align: center;
}
.stock-list {
  li {
    line-height: 20px !important;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}

</style>
<style>
.el-autocomplete-suggestion li{
  line-height: 23px;
}
.el-dialog__body{
  padding: 10px 20px 0px 20px;
}
.el-dialog__header,
.el-dialog__footer{
  padding: 10px 20px;
}
</style>
