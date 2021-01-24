<template>
  <div class="table">
    <advance-table
      :columns="columns"
      :data-source="dataSource"
      title=" "
      :loading="loading"
      row-key="id"
      :format-conditions="true"
      @search="onSearch"
      @refresh="onRefresh"
      @reset="onReset"
    >
      <template slot="add-new">
        <a-tooltip title="新建">
          <a-button class="action" type="primary" size="small" @click="addNew">新建</a-button>
        </a-tooltip>
      </template>

      <template slot="id" slot-scope="{ index }">
        {{ index + 1 }}
      </template>

      <template slot="c-title" slot-scope="{ record }">
        <a
          @click="
            $openPage(
              '/trade/detail/' + record.id,
              record.name + ' (' + record.code + ')'
            )
          "
        >{{ record.name + " (" + record.code + ")" }}</a>
      </template>

      <template slot="strategy-title" slot-scope="{ record }">
        <a-tag>{{ record.strategy.title }}</a-tag>
      </template>

      <template slot="date" slot-scope="{ record }">
        {{ record.exec_start_date | parseTime("{y}-{m}-{d}") }}
        --
        {{ record.exec_end_date | parseTime("{y}-{m}-{d}") }}
      </template>

      <template slot="operation" slot-scope="{ record }">
        <a style="margin-right: 15px" @click="edit(record)">编辑</a>
        <a-popconfirm
          v-if="dataSource.length"
          title="确定删除吗?"
          @confirm="remove(record.id)"
        >
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
      @cancel="showDlg=false"
    >
      <PlanForm ref="planForm" :is-edit="isEdit" />
    </a-modal>
  </div>
</template>

<script>
import { list, del, update, create } from '@/services/trading-plan'
import AdvanceTable from '@/components/table/advance/AdvanceTable'
import PlanForm from '../components/PlanForm'

export default {
  name: 'PlanList',
  components: { AdvanceTable, PlanForm },
  filters: {},
  data() {
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
          key: 'risk'
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
        showTotal: (total, range) =>
          `第 ${range[0]}-${range[1]} 条，总计 ${total} 条`,
        onChange: this.onPageChange,
        onShowSizeChange: this.onSizeChange
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      const { page, pageSize, conditions } = this
      list({ offset: page, limit: pageSize, ...conditions }).then((res) => {
        const { count, rows } = res.data
        this.dataSource = rows
        this.page = page
        this.total = count
        this.pageSize = pageSize
        this.loading = false
      })
    },
    remove(id) {
      console.log(id)
      del(id).then((res) => {
        if (res.data) {
          const newData = this.dataSource.filter((item) => item.id !== id)
          this.dataSource = newData
        }
      })
    },
    edit({ id, name, code }) {
      if (!id) return
      this.dlgTitle = name + '(' + code + ')'
      this.showDlg = true
      this.isEdit = true
    },
    addNew() {
      this.dlgTitle = '新建交易计划'
      this.showDlg = true
      this.isEdit = false
    },
    handleOk() {
      this.$refs.planForm.form.validateFields((err, { plan }) => {
        if (!err) {
          console.log('Received values of form: ', { plan })
          if (this.isEdit) {
            this.cmfLoading = true
            update(plan).then(res => {
              this.cmfLoading = false
              const index = this.dataSource.findIndex(v => v.id === res.data.id)
              this.dataSource.splice(index, 1, res.data)
              this.showDlg = false
            })
          } else {
            create(plan).then(res => {
              this.cmfLoading = false
              this.dataSource.push(res.data)
              this.showDlg = false
            })
          }
        }
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
    onSearch(conditions, searchOptions) {
      console.log(searchOptions)
      this.page = 1
      this.conditions = conditions
      this.getList()
    },
    onSizeChange(current, size) {
      this.page = 1
      this.pageSize = size
      this.getList()
    },
    onRefresh(conditions) {
      this.conditions = conditions
      this.getList()
    },
    onReset(conditions) {
      this.conditions = conditions
      this.getList()
    },
    onPageChange(page, pageSize) {
      this.page = page
      this.pageSize = pageSize
      this.getList()
    }
  }
}
</script>
<style scoped lang="less">
.table {
  background-color: @base-bg-color;
  padding: 0 20px;
}
</style>
