<template>
  <page-layout>
    <detail-list slot="headerContent" size="small" :col="2">
      <detail-list-item term="战法">
        {{ tradingPlan.strategy.title }}
      </detail-list-item>
      <detail-list-item term="计划">
        {{ tradingPlan.plan_price }}
      </detail-list-item>
      <detail-list-item term="止损">
        {{ tradingPlan.stop_loss }}
      </detail-list-item>
      <detail-list-item term="止盈">
        {{ tradingPlan.take_profit }}
      </detail-list-item>
      <detail-list-item term="风险额">
        {{ tradingPlan.risk }}
      </detail-list-item>
      <detail-list-item term="起止日期">
        {{ tradingPlan.exec_start_date | parseTime("{y}-{m}-{d}") }} ~
        {{ tradingPlan.exec_end_date | parseTime("{y}-{m}-{d}") }}
      </detail-list-item>
      <a-list
        class="comment-list"
        header="交易备忘"
        :data-source="tradingPlan.comments"
      >
        <a-list-item slot="renderItem" slot-scope="item">
          <a-comment>
            <p slot="content">
              {{ item.comment }}
            </p>
            <a-tooltip
              slot="datetime"
              :title="$moment(item.updated_at).format('YYYY-MM-DD HH:mm:ss')"
            >
              <span>{{ $moment(item.updated_at).fromNow() }}</span>
            </a-tooltip>
          </a-comment>
        </a-list-item>
      </a-list>
    </detail-list>

    <template slot="action">
      <a-button-group style="margin-right: 8px">
        <a-button type="danger" icon="rise" @click="buy"> 买入 </a-button>
        <a-button type="primary" icon="transaction" @click="sell">
          卖出
        </a-button>
      </a-button-group>
    </template>

    <a-card type="inner" title="交易详情">
      <a-table
        v-for="item in tradingPlan.trading_details"
        :key="item.id"
        :rowKey="item.updated_at"
        table-layout="fixed"
        class="table"
        :pagination="false"
        :data-source="[item]"
        :columns="columns"
        bordered
        size="small"
      >
        <template slot="trading_date" slot-scope="text">
          {{ text | parseTime }}
        </template>
        <template slot="trading_price" slot-scope="text">
          {{ text | numberFormatter(2) }}
        </template>
        <template
          slot="trading_total"
          slot-scope="{ trading_price, trading_volume }"
        >
          {{ totoal(trading_price, trading_volume) }}
        </template>
        <template slot="title" slot-scope="record">
          {{ record[0].trading_type }}
        </template>
        <template slot="footer" slot-scope="record">
          {{ record[0].comments[0].comment }}
        </template>
      </a-table>
    </a-card>
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
      <DetailForm ref="dataForm" :is-edit="isEdit" />
    </a-modal>
  </page-layout>
</template>

<script>
import DetailList from '@/components/tool/DetailList'
import DetailForm from './DetailForm.vue'
import { create, update } from '@/api/trading-detail'
import { fetch } from '@/api/trading-plan'
const DetailListItem = DetailList.Item
export default {
  name: 'TradeDetail',
  components: { DetailList, DetailListItem, DetailForm },
  data () {
    return {
      tradingPlan: {
        strategy: { title: '' }
      },
      isEdit: false,
      tradingType: '',
      cmfLoading: false,
      dlgTitle: '',
      showDlg: false,
      columns: [
        {
          title: '交易日期',
          dataIndex: 'trading_date',
          scopedSlots: { customRender: 'trading_date' }
        },
        {
          title: '成交价',
          dataIndex: 'trading_price',
          scopedSlots: { customRender: 'trading_price' }
        },
        {
          title: '成交量',
          dataIndex: 'trading_volume',
          scopedSlots: { customRender: 'trading_volume' }
        },
        {
          title: '成交额',
          scopedSlots: { customRender: 'trading_total' }
        },
        {
          title: '佣金',
          dataIndex: 'commission',
          scopedSlots: { customRender: 'commission' }
        },
        {
          title: '税费',
          dataIndex: 'stamp_tax',
          scopedSlots: { customRender: 'stamp_tax' }
        }
      ]
    }
  },
  created () {
    const id = this.$route.params && this.$route.params.id
    this.fetchData(id)
  },
  methods: {
    fetchData (id) {
      fetch(id)
        .then((data) => {
          this.tradingPlan = data
          console.log(this.tradingPlan)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    buy () {
      this.isEdit = false
      this.tradingType = 'BUY'
      this.showDlg = true
    },
    sell () {
      this.isEdit = false
      this.tradingType = 'SELL'
      this.showDlg = true
    },
    totoal (price, volume) {
      return parseFloat(price) * parseFloat(volume)
    },
    handleOk () {
      this.createData(this.tradingType)
    },
    createData (action) {
      this.dlgTitle = action === 'BUY' ? '买入' : '卖出'
      this.$refs.dataForm.form.validateFields((err, { detail }) => {
        if (!err) {
          console.log('Received values of form: ', { detail })
          if (this.isEdit) {
            this.cmfLoading = true
            update(detail).then((res) => {
              this.cmfLoading = false
              const index = this.dataSource.findIndex(
                (v) => v.id === res.id
              )
              this.tradingPlan.trading_details.splice(index, 1, res)
              this.showDlg = false
            })
          } else {
            detail.trading_plan_id = this.tradingPlan.id
            detail.trading_type = action
            const total = this.totoal(
              detail.trading_price,
              detail.trading_volume
            )
            if (action === 'BUY') {
              detail.commission = (total * 2.5) / 10000
              detail.stamp_tax = 0
            } else {
              detail.stamp_tax = total / 1000
              detail.commission = (total * 2.5) / 10000
            }

            create(detail).then((res) => {
              this.cmfLoading = false
              console.log(this, this.tradingPlan)
              this.tradingPlan.trading_details.push(res)
              this.showDlg = false
            })
          }
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.table {
  margin-top: 10px;
}
</style>
