<template>
  <a-form :form="form" class="form" @submit="handleSubmit">
    <a-row class="form-row" :gutter="5">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item :label="$t('name')">
          <a-input
            v-decorator="[
              'plan.name',
              {
                rules: [
                  {
                    required: true,
                    message: $ta('input|name'),
                    whitespace: true,
                  },
                ],
              },
            ]"
            :placeholder="$ta('input|name')"
          />
        </a-form-item>
      </a-col>
      <a-col
        :xl="{ span: 6, offset: 2 }"
        :lg="{ span: 8 }"
        :md="{ span: 12 }"
        :sm="24"
      >
        <a-form-item :label="$t('strategy')">
          <a-select
            v-decorator="[
              'plan.strategy',
              {
                rules: [
                  {
                    required: false,
                    message: $ta('select|strategy'),
                    whitespace: true,
                  },
                ],
              },
            ]"
            :placeholder="$ta('select|strategy')"
          />
        </a-form-item>
      </a-col>
      <a-col
        :xl="{ span: 8, offset: 2 }"
        :lg="{ span: 10 }"
        :md="{ span: 24 }"
        :sm="24"
      >
        <a-form-item :label="$t('plan_price')">
          <a-input-number
            v-decorator="[
              'plan.plan_price',
              {
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
    </a-row>
    <a-row class="form-row">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item :label="$t('stop_loss')">
          <a-input-number
            v-decorator="[
              'plan.stop_loss',
              {
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
      <a-col
        :xl="{ span: 6, offset: 2 }"
        :lg="{ span: 8 }"
        :md="{ span: 12 }"
        :sm="24"
      >
        <a-form-item :label="$t('take_profit')">
          <a-input-number
            v-decorator="[
              'plan.take_profit',
              {
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
      <a-col
        :xl="{ span: 8, offset: 2 }"
        :lg="{ span: 10 }"
        :md="{ span: 24 }"
        :sm="24"
      >
        <a-form-item :label="$t('risk')">
          <a-input-number
            v-decorator="[
              'plan.risk',
              {
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

    <a-row class="form-row">
      <a-col :lg="24" :md="24" :sm="24">
        <a-form-item :label="$t('time')">
          <a-range-picker style="width: 100%" />
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
      <a-button html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
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
    }
  },
  i18n: require('./i18n-plan'),
  data() {
    return {
      form: this.$form.createForm(this),
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
      }
    }
  },
  methods: {
    handleSubmit(e) {
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
