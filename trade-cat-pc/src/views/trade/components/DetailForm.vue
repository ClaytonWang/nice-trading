<template>
  <a-form
    :form="form"
    class="form"
    @submit="handleSubmit"
  >
    <a-row class="form-row">
      <a-col
        :lg="6"
        :md="12"
        :sm="24"
      >
        <a-form-item :label="$t('trading_price')">
          <a-input-number
            v-decorator="[
              'detail.trading_price',
              {
                rules: [
                  {
                    type: 'number',
                    required: true,
                    message: $ta('input|trading_price'),
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
        <a-form-item :label="$t('trading_volume')">
          <a-input-number
            v-decorator="[
              'detail.trading_volume',
              {
                rules: [
                  {
                    type: 'number',
                    required: true,
                    message: $ta('input|trading_volume'),
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
        <a-form-item :label="$t('trading_date')">
          <a-date-picker
            v-decorator="[
              'detail.trading_date',
              {
                rules: [
                  {
                    type: 'date',
                    required: true,
                    message: $ta('input|trading_date'),
                    whitespace: true,
                  },
                ],
              },
            ]"
            style="width: 100%"
            placeholder="请输入更新日期"
          />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row">
      <a-col
        :lg="24"
        :md="24"
        :sm="24"
      >
        <a-form-item :label="$t('comment')">
          <a-textarea
            v-decorator="[
              'detail.comment',
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
      <a-button html-type="submit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: 'DetailForm',
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
  i18n: require('./i18n-detail'),
  data() {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, { detail }) => {
        if (!err) {
          console.log('Received values of form: ', detail)
          this.$emit('submit', detail)
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
