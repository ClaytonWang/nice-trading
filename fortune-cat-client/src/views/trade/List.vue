<template>
  <div class="table">
    <advance-table
      :columns="columns"
      :data-source="dataSource"
      title=" "
      :loading="loading"
      row-key="id"
      :format-conditions="true"
      bordered
      @search="onSearch"
      @refresh="onRefresh"
      @reset="onReset"
      :pagination="{
        current: page,
        pageSize: pageSize,
        total: total,
        showSizeChanger: true,
        showLessItems: true,
        showQuickJumper: true,
        showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条，总计 ${total} 条`,
        onChange: onPageChange,
        onShowSizeChange: onSizeChange,
      }"
    >
      <template slot="add-new">
        <a-tooltip title="新建">
          <a-button class="action" type="primary" size="small" @click="addNew"> 新建 </a-button>
        </a-tooltip>
      </template>

      <template slot="id" slot-scope="{ index }">
        {{ index + 1 }}
      </template>

      <template slot="c-title" slot-scope="{ record }">
        <a @click="$openPage('/trade/detail/' + record.id, record.name + ' (' + record.code + ')')">{{
          record.name + ' (' + record.code + ')'
        }}</a>
      </template>

      <template slot="strategy-title" slot-scope="{ record }">
        <a @click="$openPage('/strategy/edit/'+record.id)">{{ record.strategy.title }}</a>
      </template>

      <template slot="c-risk" slot-scope="{ record }">
        {{ record.risk | NumberFormat }}
      </template>
      <template slot="c-plan_volume" slot-scope="{ record }">
        {{ record.plan_volume | NumberFormat }}
      </template>

      <template slot="date" slot-scope="{ record }">
        {{ record.exec_start_date | parseTime('{y}-{m}-{d}') }}
        --
        {{ record.exec_end_date | parseTime('{y}-{m}-{d}') }}
      </template>

      <template slot="operation" slot-scope="{ record }">
        <a style="margin-right: 15px" @click="edit(record)">编辑</a>
        <a-popconfirm v-if="dataSource.length" title="确定删除吗?" @confirm="remove(record.id)">
          <a href="#">删除</a>
        </a-popconfirm>
      </template>
    </advance-table>
    <a-modal
      :centered="true"
      :mask-closable="false"
      :destroy-on-close="true"
      :visible="showDlg"
      :title="dlgTitle"
      :confirm-loading="cmfLoading"
      @ok="handleOk"
      @cancel="showDlg = false"
    >
      <PlanForm ref="dataForm" :is-edit="isEdit" :plan="plan" />
    </a-modal>
  </div>
</template>

<script>
import { list, del, update, create } from '@/api/trading-plan'
import AdvanceTable from '@/components/Table/advance/AdvanceTable'
import PlanForm from './components/PlanForm'
import moment from 'moment'

function newPlan () {
  return {
    id: undefined,
    symbol: '',
    code: '',
    name: '',
    strategy_id: '',
    plan_price: 0,
    plan_volume: 0,
    risk: 0,
    stop_loss: 0,
    take_profit: 0,
    exec_start_date: new Date(),
    exec_end_date: new Date(),
    comment: '',
    date: [moment(), moment()]
  }
}

export default {
  name: 'PlanList',
  components: { AdvanceTable, PlanForm },
  filters: {},
  data () {
    return {
      loading: false,
      cmfLoading: false,
      dlgTitle: '添加交易计划',
      showDlg: false,
      isEdit: false,
      page: 0,
      pageSize: 10,
      total: 0,
      dataSource: [],
      conditions: {},
      columns: [
        {
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          scopedSlots: { customRender: 'id' }
        },
        {
          title: '股票名称(代码)',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: { customRender: 'c-title' }
        },
        {
          title: '适用战法',
          dataIndex: 'strategy.title',
          key: 'strategy',
          scopedSlots: { customRender: 'strategy-title' }
        },
        {
          title: '风险额',
          dataIndex: 'risk',
          key: 'risk',
          scopedSlots: { customRender: 'c-risk' }
        },
        {
          title: '计划量',
          dataIndex: 'plan_volume',
          key: 'plan_volume',
          scopedSlots: { customRender: 'c-plan_volume' }
        },
        {
          title: '起止日期',
          dataIndex: 'exec_start_date',
          key: 'exec_start_date',
          scopedSlots: { customRender: 'date' }
        },
        {
          title: '操作',
          key: 'operation',
          scopedSlots: { customRender: 'operation' }
        }
      ],
      pagination: {
        current: this.page,
        pageSize: this.pageSize,
        total: this.total,
        showSizeChanger: true,
        showLessItems: true,
        showQuickJumper: true,
        showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条，总计 ${total} 条`,
        onChange: this.onPageChange,
        onShowSizeChange: this.onSizeChange
      },
      plan: newPlan()
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.loading = true
      const { page, pageSize, conditions } = this
      list({ offset: page, limit: pageSize, ...conditions }).then((data) => {
        const { count, rows } = data
        this.dataSource = rows
        this.page = page
        this.total = count
        this.pageSize = pageSize
        this.loading = false
      })
    },
    remove (id) {
      console.log(id)
      del(id).then((res) => {
        if (res) {
          const newData = this.dataSource.filter((item) => item.id !== id)
          this.dataSource = newData
          this.$message.success('删除成功')
        }
      })
    },
    edit (plan) {
      const { id, name, code, symbol, strategy } = plan
      if (!id) return
      const label = name + ' (' + code + ')'
      this.dlgTitle = label
      this.showDlg = true
      this.isEdit = true
      plan.stock = {
        key: symbol,
        label
      }
      plan.strategy = {
        id,
        key: strategy.id,
        label: strategy.title,
        title: plan.strategy.label
      }
      plan.date = [moment(plan.exec_start_date), moment(plan.exec_end_date)]
      plan.comment = plan.comments[0].comment
      this.plan = plan
    },
    addNew () {
      this.dlgTitle = '新建交易计划'
      this.showDlg = true
      this.isEdit = false
      this.plan = newPlan()
    },
    plan_volume (plan) {
      const { plan_price, stop_loss, risk } = plan
      if (plan_price && stop_loss && risk) {
        return (risk / Math.abs(plan_price - stop_loss)).toFixed(2)
      }
      return 0
    },
    handleOk () {
      this.$refs.dataForm.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const plan = this.plan
          const label = String.prototype.trim.call(plan.stock.label)
          plan.name = label.split(' ')[0]
          plan.code = label.split(' ')[1].replace('(', '').replace(')', '')
          plan.symbol = plan.stock.key
          plan.strategy_id = plan.strategy.key
          plan.strategy = {
            id: plan.strategy.key,
            key: plan.strategy.key,
            label: plan.strategy.label,
            title: plan.strategy.label
          }
          plan.exec_start_date = plan.date[0]
          plan.exec_end_date = plan.date[1]
          plan.plan_volume = this.plan_volume(plan)
          plan.comments[0].comment = plan.comment
          console.log(plan)
          if (this.isEdit) {
            this.cmfLoading = true
            plan.id = this.plan.id
            update(plan)
              .then((res) => {
                this.cmfLoading = false
                if (res) {
                  const index = this.dataSource.findIndex((v) => v.id === res.id)
                  this.dataSource.splice(index, 1, plan)
                  this.showDlg = false
                  this.$message.success('修改成功')
                } else {
                  console.log(res)
                }
              })
              .catch((res) => {
                console.log(res)
                this.cmfLoading = false
              })
          } else {
            create(plan).then((res) => {
              this.cmfLoading = false
              this.dataSource.unshift(res)
              this.showDlg = false
              this.$message.success('添加成功')
            })
          }
        }
      })
    },
    onSearch (conditions, searchOptions) {
      console.log(searchOptions)
      this.page = 1
      this.conditions = conditions
      this.getList()
    },
    onSizeChange (current, size) {
      this.page = 1
      this.pageSize = size
      this.getList()
    },
    onRefresh (conditions) {
      this.conditions = conditions
      this.getList()
    },
    onReset (conditions) {
      this.conditions = conditions
      this.getList()
    },
    onPageChange (page, pageSize) {
      this.page = page
      this.pageSize = pageSize
      this.getList()
    }
  }
}
</script>
<style scoped lang="less">
.table {
  padding: 0 20px;
}
</style>
