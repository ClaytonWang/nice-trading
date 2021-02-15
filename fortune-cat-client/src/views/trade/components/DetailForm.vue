<template>
  <a-form-model ref="ruleForm" :model="detail" :rules="rules" class="form" @submit="handleSubmit">
    <a-row class="form-row">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-model-item label="成交价" prop="trading_price">
          <a-input-number
            v-model="detail.trading_price"
            style="width: 100%"
            placeholder="请输入"
            :formatter="(value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
          />
        </a-form-model-item>
      </a-col>
      <a-col :xl="{ span: 6, offset: 2 }" :lg="{ span: 8 }" :md="{ span: 12 }" :sm="24">
        <a-form-model-item label="成交量" prop="trading_volume">
          <a-input-number
            v-model="detail.trading_volume"
            style="width: 100%"
            placeholder="请输入"
            :formatter="(value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
          />
        </a-form-model-item>
      </a-col>
      <a-col :xl="{ span: 8, offset: 2 }" :lg="{ span: 10 }" :md="{ span: 24 }" :sm="24">
        <a-form-model-item label="成交时间" prop="trading_date">
          <a-date-picker
            v-model="detail.trading_date"
            style="width: 100%"
            placeholder="请输入日期" />
        </a-form-model-item>
      </a-col>
    </a-row>
    <a-row class="form-row">
      <a-col :lg="24" :md="24" :sm="24">
        <a-form-model-item label="反省点" prop="comment">
          <a-textarea v-model="detail.comment" rows="5" placeholder="请输入反省点" />
        </a-form-model-item>
      </a-col>
    </a-row>
    <a-form-model-item v-if="showSubmit">
      <a-button html-type="submit"> Submit </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
export default {
  name: 'DetailForm',
  props: {
    detail: {
      type: Object,
      default: null
    },
    showSubmit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      rules: {
        trading_price: [
          {
            required: true,
            message: '请输入成交价',
            trigger: 'blur'
          }
        ],
        trading_date: [
          {
            required: true,
            message: '请输入成交时间',
            trigger: 'blur'
          }
        ],
        trading_volume: [
          {
            required: true,
            message: '请输入成交量',
            trigger: 'blur'
          }
        ],
        comment: [
          {
            required: true,
            message: '请输入反省点',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('submit', this.detail)
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
