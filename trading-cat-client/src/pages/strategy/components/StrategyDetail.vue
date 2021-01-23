
<template>
  <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
    <a-form :form="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item :label="$t('title')" name="title">
        <a-input
          :placeholder="$t('titleInput')"
          v-decorator="[
            'strategy.title',
            {
              rules: [
                { required: true, message: $t('titleInput'), whitespace: true },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item :label="$t('ecology')">
        <a-textarea
          rows="2"
          :placeholder="$t('ecologyInput')"
          v-decorator="[
            'strategy.ecology',
            {
              rules: [
                {
                  required: true,
                  message: $t('ecologyInput'),
                  whitespace: true,
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item :label="$t('content')">
        <a-textarea
          rows="10"
          :placeholder="$t('contentInput')"
          v-decorator="[
            'strategy.content',
            {
              rules: [
                {
                  required: true,
                  message: $t('contentInput'),
                  whitespace: true,
                },
              ],
            },
          ]"
        />
      </a-form-item>
    </a-form>
    <footer-tool-bar>
      <a-button type="primary" @click="onSubmit" :loading="loading">{{
        $t("submit")
      }}</a-button>
    </footer-tool-bar>
  </a-card>
</template>

<script>
import { create, fetch } from "@/services/strategy";
import FooterToolBar from "@/components/tool/FooterToolBar";
export default {
  name: "StrategyDetail",
  i18n: require("./i18n"),
  components: { FooterToolBar },
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: this.$form.createForm(this),
    };
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id;
      this.fetchData(id);
    }
  },
  methods: {
    fetchData(id) {
      fetch(id)
        .then((res) => {
          this.strategy = res.data;
          console.log(this.strategy);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    validate(rule, value, f) {
      if (value !== undefined && value !== "iczer") {
        f("输入'iczer'试下？");
      }
      f();
    },
    onSubmit() {

      this.form.validateFields((err, { strategy }) => {
        if (!err) {
          console.log("Received values of form: ", strategy);
           this.loading=true;
          create(strategy).then((res) => {
            this.loading=false;
            if (res.data) {
              this.$router.push({ name: "战法列表" });
            }
          });
        }
      });
    },
  },
};
</script>

<style scoped>
</style>
