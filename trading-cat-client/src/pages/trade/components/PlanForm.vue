<template>
  <a-form :form="form" class="form" @submit="handleSubmit">
    <a-row class="form-row">
      <a-col :lg="8" :md="12" :sm="24">
        <a-form-item :label="$t('name')">
          <a-input
            v-decorator="[
              'plan.name',
              {
                initialValue: plan.name,
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
      <a-col :lg="{ span: 8 }" :md="{ span: 12 }" :sm="24">
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
            @change="strategyChange"
            @focus="fetchStrategy"
          >
            >
            <a-spin v-if="fetching" slot="notFoundContent" size="small" />
            <a-select-option v-for="d in strategies" :key="d.value">
              {{ d.title }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :xl="{ span: 8 }" :lg="{ span: 12 }" :md="{ span: 24 }" :sm="24">
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
    </a-row>
    <a-row class="form-row">
      <a-col :lg="8" :md="12" :sm="24">
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
      <a-col :lg="{ span: 8 }" :md="{ span: 12 }" :sm="24">
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
      <a-col :lg="{ span: 8 }" :md="{ span: 12 }" :sm="24">
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
import debounce from "lodash/debounce";
import { fetch as getStrategy } from "@/services/strategy";
export default {
  name: "PlanForm",
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    showSubmit: {
      type: Boolean,
      default: false,
    },
    plan: {
      type: Object,
      default: null,
    },
  },
  i18n: require("./i18n-plan"),
  data() {
    this.fetchStrategy = debounce(this.fetchStrategy, 800);
    return {
      form: this.$form.createForm(this),
      fetching: false,
      strategies: [],
    };
  },
  created() {},
  methods: {
    fetchStrategy(value) {
      this.fetching = true;
      if (!value) value = "";
      getStrategy("").then((res) => {
        console.log(res);
        const data = res.data.rows.map((strategy) => ({
          title: `${strategy.title}`,
          value: strategy.id,
        }));
        this.strategies = data;
        this.fetching = false;
      });
    },
    strategyChange(value) {
      console.log(value);
      Object.assign(this, {
        value,
        data: [],
        fetching: false,
      });
    },
    selectDate(date, dateString) {
      console.log(date, dateString);
      // this.plan=
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, { plan }) => {
        if (!err) {
          console.log("Received values of form: ", plan);
          this.$emit("submit", plan);
        }
      });
    },
  },
};
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
