<template>
  <page-header-wrapper :title="tradingPlan.name + ' (' + tradingPlan.code + ')'" @tabChange="handleTabChange">
    <template v-slot:content>
      <a-descriptions layout="vertical" bordered size="small" :column="isMobile ? 1 : 6">
        <a-descriptions-item label="战法">{{ tradingPlan.strategy.title }}</a-descriptions-item>
        <a-descriptions-item label="计划">{{ tradingPlan.plan_price | NumberFormat }}</a-descriptions-item>
        <a-descriptions-item label="止损">{{ tradingPlan.stop_loss | NumberFormat }}</a-descriptions-item>
        <a-descriptions-item label="止盈">{{ tradingPlan.take_profit | NumberFormat }}</a-descriptions-item>
        <a-descriptions-item label="风险额">{{ tradingPlan.risk | NumberFormat }}</a-descriptions-item>
        <a-descriptions-item label="起止日期">
          {{ tradingPlan.exec_start_date | parseTime('{y}-{m}-{d}') }} ~
          {{ tradingPlan.exec_end_date | parseTime('{y}-{m}-{d}') }}
        </a-descriptions-item>
        <a-descriptions-item label="交易备忘">
          <a-list class="comment-list" :data-source="tradingPlan.comments">
            <a-list-item slot="renderItem" slot-scope="item">
              <a-comment>
                <p slot="content">
                  {{ item.comment }}
                </p>
                <a-tooltip slot="datetime" :title="$moment(item.updated_at).format('YYYY-MM-DD HH:mm:ss')">
                  <span>{{ $moment(item.updated_at).fromNow() }}</span>
                </a-tooltip>
              </a-comment>
            </a-list-item>
          </a-list>
        </a-descriptions-item>
      </a-descriptions>
    </template>

    <!-- actions -->
    <template v-slot:extra>
      <a-button-group style="margin-right: 8px">
        <a-button type="danger" icon="rise" @click="buy"> 买入 </a-button>
        <a-button type="primary" icon="transaction" @click="sell"> 卖出 </a-button>
      </a-button-group>
    </template>

    <template v-slot:extraContent>
      <a-row class="status-list">
        <a-col :xs="12" :sm="12">
          <div class="text">状态</div>
          <div class="heading">持仓中</div>
        </a-col>
        <a-col :xs="12" :sm="12">
          <div class="text">盈利</div>
          <div class="heading">¥ 568.08</div>
        </a-col>
      </a-row>
    </template>

    <a-card
      type="inner"
      :title="'共 ' + (tradingPlan && tradingPlan.trading_details && tradingPlan.trading_details.length) + ' 笔操作'"
    >
      <div v-for="item in tradingPlan.trading_details" :key="item.id">
        <div v-if="item.trading_type == 'BUY'" class="buy">
          <b>买入</b>
          <div>
            <a-space size="small">
              <a @click="editDetail(item)">编辑</a>
              <a @click="delDetail(item.id)">删除</a>
            </a-space>
          </div>
        </div>
        <div v-if="item.trading_type != 'BUY'" class="sell">
          <b>卖出</b>
          <div>
            <a-space size="small">
              <a @click="editDetail(item)">编辑</a>
              <a @click="delDetail(item.id)">删除</a>
            </a-space>
          </div>
        </div>
        <a-descriptions layout="vertical" bordered size="small" :column="isMobile ? 1 : 6">
          <a-descriptions-item label="交易日期">{{ item.trading_date | parseTime }}</a-descriptions-item>
          <a-descriptions-item label="成交价">{{ item.trading_price | NumberFormat }}</a-descriptions-item>
          <a-descriptions-item label="成交量">{{ item.trading_volume | NumberFormat }}</a-descriptions-item>
          <a-descriptions-item label="成交额">{{
            totoal(item.trading_price, item.trading_volume) | NumberFormat
          }}</a-descriptions-item>
          <a-descriptions-item label="佣金">{{ item.commission | NumberFormat }}</a-descriptions-item>
          <a-descriptions-item label="税费">{{ item.stamp_tax | NumberFormat }}</a-descriptions-item>
          <a-descriptions-item label="反省点">
            <a-list class="comment-list" :data-source="item.comments">
              <a-list-item slot="renderItem" slot-scope="itemCmt">
                <a-comment>
                  <p slot="content">
                    {{ itemCmt.comment }}
                  </p>
                  <a-tooltip slot="datetime" :title="$moment(itemCmt.updated_at).format('YYYY-MM-DD HH:mm:ss')">
                    <span>{{ $moment(itemCmt.updated_at).fromNow() }}</span>
                  </a-tooltip>
                </a-comment>
              </a-list-item>
            </a-list>
          </a-descriptions-item>
        </a-descriptions>
      </div>
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
      <DetailForm ref="dataForm" :detail="tradingDetail" />
    </a-modal>
  </page-header-wrapper>
</template>

<script>
import { baseMixin } from '@/store/app-mixin'
import DetailForm from './DetailForm.vue'
import { create, update, del } from '@/api/trading-detail'
import { fetch } from '@/api/trading-plan'

export default {
  name: 'TradeDetail',
  mixins: [baseMixin],
  components: { DetailForm },
  data () {
    return {
      tradingPlan: {
        strategy: { title: '' }
      },
      tradingDetail: {},
      isEdit: false,
      tradingType: '',
      cmfLoading: false,
      dlgTitle: '',
      showDlg: false
    }
  },
  created () {
    const id = this.$route.params && this.$route.params.id
    this.fetchData(id)
  },
  filters: {
    statusFilter (status) {
      const statusMap = {
        agree: '成功',
        reject: '驳回'
      }
      return statusMap[status]
    },
    statusTypeFilter (type) {
      const statusTypeMap = {
        agree: 'success',
        reject: 'error'
      }
      return statusTypeMap[type]
    }
  },
  methods: {
    handleTabChange (key) {
      console.log('')
      this.tabActiveKey = key
    },
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
      this.dlgTitle = '买入'
      this.tradingDetail = {}
    },
    sell () {
      this.isEdit = false
      this.tradingType = 'SELL'
      this.showDlg = true
      this.dlgTitle = '卖出'
      this.tradingDetail = {}
    },
    totoal (price, volume) {
      return parseFloat(price) * parseFloat(volume)
    },
    handleOk () {
      this.createData(this.tradingType)
    },
    createData (action) {
      this.$refs.dataForm.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const detail = this.tradingDetail
          if (this.isEdit) {
            this.cmfLoading = true
            update(detail).then((res) => {
              this.cmfLoading = false
              const index = this.tradingPlan.trading_details.findIndex((v) => v.id === res.id)
              this.tradingPlan.trading_details.splice(index, 1, res)
              this.showDlg = false
              this.$message.success('修改成功')
            })
          } else {
            detail.trading_plan_id = this.tradingPlan.id
            detail.trading_type = action
            const total = this.totoal(detail.trading_price, detail.trading_volume)
            if (action === 'BUY') {
              detail.commission = (total * 2.5) / 10000
              detail.stamp_tax = 0
            } else {
              detail.stamp_tax = total / 1000
              detail.commission = (total * 2.5) / 10000
            }
            create(detail).then((res) => {
              this.cmfLoading = false
              detail.id = res.id
              detail.comments = [
                {
                  comment: detail.comment
                }
              ]
              this.tradingPlan.trading_details.push(detail)
              this.showDlg = false
              this.$message.success('添加成功')
            })
          }
        }
      })
    },
    editDetail (detail) {
      this.isEdit = true
      this.showDlg = true
      this.dlgTitle = '编辑'
      this.tradingDetail = detail
      this.tradingDetail.comment = detail.comments[0].comment
    },
    delDetail (id) {
      if (!id) return
      del(id).then((data) => {
        const index = this.tradingPlan.trading_details.findIndex((v) => v.id === id)
        this.tradingPlan.trading_details.splice(index, 1)
        this.$message.success('删除成功')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.buy {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #fff;
  background: #ff7875;
  margin-bottom: 0px;
  margin-top: 1em;
  padding-left: 15px;
  a {
    color: #fff;
    padding-right: 15px;
  }
  a:hover{
    text-decoration: underline;
  }
}
.sell {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #fff;
  background: #42b983;
  margin-bottom: 0px;
  margin-top: 1em;
  padding-left: 15px;
  a {
    color: #fff;
    padding-right: 15px;
  }
  a:hover{
    text-decoration: underline;
  }
}
.detail-layout {
  margin-left: 44px;
}
.text {
  color: rgba(0, 0, 0, 0.45);
}

.heading {
  color: rgba(0, 0, 0, 0.85);
  font-size: 20px;
}

.no-data {
  color: rgba(0, 0, 0, 0.25);
  text-align: center;
  line-height: 64px;
  font-size: 16px;

  i {
    font-size: 24px;
    margin-right: 16px;
    position: relative;
    top: 3px;
  }
}

.mobile {
  .detail-layout {
    margin-left: unset;
  }
  .text {
  }
  .status-list {
    text-align: left;
  }
}
</style>
<style>
.ant-comment-inner {
  padding: 0 !important;
}
.ant-list-item {
  padding: 0;
}
.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent{
  margin-left:0;
}
</style>
