<template>
  <a-form :form="form" class="form" @submit="handleSubmit">
    <a-row class="form-row" :gutter="[0,0]">
      <a-col :lg="12" :md="12" :sm="24">
        <a-form-item :label="$t('name')">
          <a-select
            v-decorator="[
              'plan.stock',
              {
                initialValue: plan.stock,
                rules: [
                  {
                    required: false,
                    message: $ta('select|name'),
                  },
                ],
              },
            ]"
            showSearch
            showArrow
            label-in-value
            :placeholder="$ta('select|name')"
            :filter-option="false"
            :not-found-content="fetching ? undefined : null"
            @search="fetchStock"
          >
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
        </a-form-item>
      </a-col>
      <a-col :lg="12" :md="12" :sm="24">
        <a-form-item :label="$t('strategy')">
          <a-select
            v-decorator="[
              'plan.strategy',
              {
                initialValue: plan.strategy,
                rules: [
                  {
                    required: false,
                    message: $ta('select|strategy'),
                  },
                ],
              },
            ]"
            showSearch
            showArrow
            label-in-value
            :placeholder="$ta('select|strategy')"
            :filter-option="false"
            :not-found-content="fetching ? undefined : null"
            @search="fetchStrategy"
            @focus="fetchStrategy"
          >
            >
            <a-icon slot="suffixIcon" type="edit" />
            <a-spin v-if="fetching" slot="notFoundContent" size="small" />
            <a-select-option v-for="d in strategies" :key="d.value">
              {{ d.title }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row">
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-item :label="$t('plan_price')">
          <a-input-number
            v-decorator="[
              'plan.plan_price',
              {
                initialValue: parseFloat(plan.plan_price),
                rules: [
                  {
                    required: true,
                    type: 'number',
                    message: $ta('input|plan_price'),
                    whitespace: true,
                  },
                ],
              },
            ]"
            style="width: 100%"
            :placeholder="$t('input')"
            :formatter="
              (value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            "
          />
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-item :label="$t('stop_loss')">
          <a-input-number
            v-decorator="[
              'plan.stop_loss',
              {
                initialValue: parseFloat(plan.stop_loss),
                rules: [
                  {
                    type: 'number',
                    required: true,
                    message: $ta('input|stop_loss'),
                    whitespace: true,
                  },
                ],
              },
            ]"
            style="width: 100%"
            :placeholder="$t('input')"
            :formatter="
              (value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            "
          />
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-item :label="$t('take_profit')">
          <a-input-number
            v-decorator="[
              'plan.take_profit',
              {
                initialValue: parseFloat(plan.take_profit),
                rules: [
                  {
                    type: 'number',
                    required: true,
                    message: $ta('input|take_profit'),
                    whitespace: true,
                  },
                ],
              },
            ]"
            style="width: 100%"
            :placeholder="$t('input')"
            :formatter="
              (value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            "
          />
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-item :label="$t('risk')">
          <a-input-number
            v-decorator="[
              'plan.risk',
              {
                initialValue: parseFloat(plan.risk),
                rules: [
                  {
                    type: 'number',
                    required: true,
                    message: $ta('input|risk'),
                    whitespace: true,
                  },
                ],
              },
            ]"
            style="width: 100%"
            :placeholder="$t('input')"
            :formatter="
              (value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            "
          />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row>
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-item label="计划量">
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-item label="止损比">
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-item label="止盈比">
        </a-form-item>
      </a-col>
      <a-col :lg="6" :md="6" :sm="24">
        <a-form-item label="损益比">
        </a-form-item>
      </a-col>
    </a-row>

    <a-row class="form-row">
      <a-col :lg="24" :md="24" :sm="24">
        <a-form-item :label="$t('time')">
          <a-range-picker
            v-decorator="[
              'plan.date',
              {
                initialValue: [$moment(), $moment()],
                rules: [
                  {
                    type: 'array',
                    required: true,
                    message: 'Please select time!',
                  },
                ],
              },
            ]"
            :ranges="{
              今天: [$moment(), $moment()],
              当月: [$moment(), $moment().endOf('month')],
            }"
            style="width: 100%"
            @change="selectDate"
          >
            <a-icon slot="suffixIcon" type="smile" />
          </a-range-picker>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row">
      <a-col :lg="24" :md="24" :sm="24">
        <a-form-item :label="$t('comment')">
          <a-textarea
            v-decorator="[
              'plan.comment',
              {
                initialValue: plan.comment,
                rules: [
                  {
                    required: false,
                    message: $ta('input|comment'),
                    whitespace: true,
                  },
                ],
              },
            ]"
            rows="5"
            :placeholder="$ta('input|comment')"
          />
        </a-form-item>
      </a-col>
    </a-row>
    <a-form-item v-if="showSubmit">
      <a-button html-type="submit"> Submit </a-button>
    </a-form-item>
  </a-form>
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
  i18n: require('./i18n-plan'),
  data () {
    this.fetchStrategy = debounce(this.fetchStrategy, 800)
    this.fetchStock = debounce(this.fetchStock, 800)
    return {
      form: this.$form.createForm(this),
      fetching: false,
      strategies: [],
      stocks: []
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
          title: `${strategy.title}`,
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
      console.log(date, dateString)
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
    margin: 0 -8px;
  }
  .ant-col-md-12,
  .ant-col-sm-24,
  .ant-col-lg-6,
  .ant-col-lg-8,
  .ant-col-lg-10,
  .ant-col-xl-8,
  .ant-col-xl-6 {
    padding: 0 8px;
  }
}
</style>
