<template>
  <a-form-model ref="ruleForm" :model="plan" :rules="rules" class="form" @submit="handleSubmit">
    <a-row class="form-row" :gutter="[0,0]">
      <a-col :lg="12" :md="12" :sm="24">
        <a-form-model-item label="股票" prop="stock">
          <a-select
            v-model="plan.stock"
            showSearch
            showArrow
            label-in-value
            placeholder="请选择股票"
            :filter-option="false"
            :not-found-content="fetching ? undefined : null"
            @search="fetchStock"
          >
            <a-icon slot="suffixIcon" type="dollar" />
            <a-spin v-if="fetching" slot="notFoundContent" size="small" />
            <a-select-option
              v-for="d in stocks"
              :key="d.code"
              :value="d.symbol"
            >
              {{ d.label }}
            </a-select-option>
          </a-select>
        </a-form-model-item>
      </a-col>
      <a-col :lg="12" :md="12" :sm="24">
        <a-form-model-item label="战法" prop="strategy">
          <a-select
            v-model="plan.strategy"
            showSearch
            showArrow
            label-in-value
            placeholder="请选择战法"
            :filter-option="false"
            :not-found-content="fetching ? undefined : null"
            @search="fetchStrategy"
            @focus="fetchStrategy"
          >
            >
            <a-icon slot="suffixIcon" type="edit" />
            <a-spin v-if="fetching" slot="notFoundContent" size="small" />
            <a-select-option v-for="d in strategies" :key="d.value">
              {{ d.label }}
            </a-select-option>
          </a-select>
        </a-form-model-item>
      </a-col>
    </a-row>
    <a-row class="form-row">
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-model-item label="计划价" prop="plan_price">
          <a-input-number
            v-model="plan.plan_price"
            style="width: 100%"
            placeholder="请输入计划价"
            :formatter="
              (value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            "
          />
        </a-form-model-item>
      </a-col>
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-model-item label="止损价" prop="stop_loss">
          <a-input-number
            v-model="plan.stop_loss"
            style="width: 100%"
            placeholder="请输入止损价"
            :formatter="
              (value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            "
          />
        </a-form-model-item>
      </a-col>
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-model-item label="止盈价" prop="take_profit">
          <a-input-number
            v-model="plan.take_profit"
            placeholder="请输入止盈价"
            :formatter="
              (value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            "
          />
        </a-form-model-item>
      </a-col>
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-model-item label="风险额" prop="risk">
          <a-input-number
            v-model="plan.risk"
            placeholder="请输入风险额"
            :formatter="
              (value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            "
          />
        </a-form-model-item>
      </a-col>
    </a-row>
    <a-row>
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-model-item label="计划量">
        </a-form-model-item>
      </a-col>
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-model-item label="止损比">
        </a-form-model-item>
      </a-col>
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-model-item label="止盈比">
        </a-form-model-item>
      </a-col>
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-model-item label="损益比">
        </a-form-model-item>
      </a-col>
    </a-row>

    <a-row class="form-row">
      <a-col :lg="24" :md="24" :sm="24">
        <a-form-model-item label="起止时间" prop="date">
          <a-range-picker
            v-model="plan.date"
            :ranges="{
              今天: [$moment(), $moment()],
              当月: [$moment(), $moment().endOf('month')],
            }"
            @change="selectDate"
          >
            <a-icon slot="suffixIcon" type="smile" />
          </a-range-picker>
        </a-form-model-item>
      </a-col>
    </a-row>
    <a-row class="form-row">
      <a-col :lg="24" :md="24" :sm="24">
        <a-form-model-item label="交易备忘" prop="comment">
          <a-textarea
            v-model="plan.comment"
            rows="5"
            placeholder="请输入交易备忘"
          />
        </a-form-model-item>
      </a-col>
    </a-row>
    <a-form-model-item v-if="showSubmit">
      <a-button html-type="submit"> Submit </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import debounce from 'lodash/debounce'
import { fetch as getStrategy } from '@/api/strategy'
import { search } from '@/api/stock'
export default {
  name: 'PlanForm',
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    showSubmit: {
      type: Boolean,
      default: false
    },
    plan: {
      type: Object,
      default: null
    }
  },
  data () {
    this.fetchStrategy = debounce(this.fetchStrategy, 800)
    this.fetchStock = debounce(this.fetchStock, 800)
    return {
      fetching: false,
      strategies: [],
      stocks: [],
      rules: {
        stock: [
          {
            required: true,
            message: '请选择股票',
            trigger: 'blur'
          }
        ],
        strategy: [
          {
            required: true,
            message: '请选择战法',
            trigger: 'blur'
          }
        ],
        plan_price: [
          {
            required: true,
            message: '请输入计划价',
            trigger: 'blur'
          }
        ],
        stop_loss: [
          {
            required: true,
            message: '请输入止损价',
            trigger: 'blur'
          }
        ],
        take_profit: [
          {
            required: true,
            message: '请输入止盈价',
            trigger: 'blur'
          }
        ],
        risk: [
          {
            required: true,
            message: '请输入风险额',
            trigger: 'blur'
          }
        ],
        date: [
          {
            required: true,
            message: '请输入起止日期',
            trigger: 'change'
          }
        ],
        comment: [
          {
            required: true,
            message: '请输入交易备忘',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    profitLostRate () {
      const { plan_price, stop_loss, take_profit } = this.form
      if (plan_price && stop_loss && take_profit) {
        return (
          (Math.abs(take_profit - plan_price) /
            Math.abs(plan_price - stop_loss)) *
          100
        ).toFixed(2)
      }
      return 0
    },
    plan_totoal () {
      if (this.form.plan_price && this.plan_volume) {
        return (this.plan_volume * this.form.plan_price).toFixed(2)
      }
      return 0
    },
    stop_loss_rate () {
      const { plan_price, stop_loss } = this.form
      if (plan_price && stop_loss) {
        return ((Math.abs(plan_price - stop_loss) / plan_price) * 100).toFixed(
          2
        )
      }
      return 0
    },
    take_profit_rate () {
      const { plan_price, take_profit } = this.form
      if (plan_price && take_profit) {
        return (
          (Math.abs(take_profit - plan_price) / plan_price) *
          100
        ).toFixed(2)
      }
      return 0
    }
  },
  methods: {
    fetchStrategy (value) {
      this.fetching = true
      if (!value) value = ''
      getStrategy('').then((res) => {
        console.log(res)
        const data = res.rows.map((strategy) => ({
          label: `${strategy.title}`,
          value: strategy.id
        }))
        this.strategies = data
        this.fetching = false
      })
    },
    fetchStock (value) {
      if (!value) return
      this.fetching = true
      search(value).then((list) => {
        console.log(list)
        this.stocks = list
        this.fetching = false
      })
    },
    selectDate (date, dateString) {
      console.log(this.plan)
      // this.plan=
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, { plan }) => {
        if (!err) {
          console.log('Received values of form: ', plan)
          this.$emit('submit', plan)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.form {
  .form-row {
    margin:-16px 0 !important;
  }
  .ant-col-md-12,
  .ant-col-sm-24,
  .ant-col-lg-6,
  .ant-col-lg-8,
  .ant-col-lg-10,
  .ant-col-xl-8,
  .ant-col-xl-6 {
    padding: 0 8px;
    margin:-8px 0 !important;
  }
}
</style>
