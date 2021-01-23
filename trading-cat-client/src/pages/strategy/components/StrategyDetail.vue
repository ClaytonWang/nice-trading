<template>
  <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
    <a-form
      :form="form"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item :label="$t('title')" name="title">
        <a-input
            :placeholder="$t('titleInput')"
            v-model="postForm.title"
            v-decorator="['strategy.title', {rules: [{ required: true, message: $t('titleInput'), whitespace: true}]}]"
          />
      </a-form-item>
      <a-form-item :label="$t('ecology')">
        <a-textarea
          rows="2"
          :placeholder="$t('ecologyInput')"
          v-decorator="['strategy.ecology', {rules: [{ required: true, message: $t('ecologyInput'), whitespace: true}]}]"
          v-model="postForm.ecology"
        />
      </a-form-item>
      <a-form-item :label="$t('content')">
        <a-textarea
          rows="10"
          :placeholder="$t('contentInput')"
          v-decorator="['strategy.content', {rules: [{ required: true, message: $t('contentInput'), whitespace: true}]}]"
          v-model="postForm.content"
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
//import { create } from "@/services/strategy";
import FooterToolBar from '@/components/tool/FooterToolBar'
const defaultForm = {
  title: "", // 文章题目
  ecology: "",
  content: "", // 文章内容
  id: undefined,
};
export default {
  name: "StrategyDetail",
  i18n: require("./i18n"),
  components: {FooterToolBar},
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading:false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      postForm: Object.assign({}, defaultForm),
      form: this.$form.createForm(this),
      rules: {
        title: [
          { required: true, message: this.$t("titleInput"), trigger: "blur" },
        ],
        ecology: [
          {
            required: true,
            message: this.$t("ecologyInput"),
            trigger: "change",
          },
        ],
        content: [
          { required: true, message: this.$t("contentInput"), trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    validate (rule, value, f) {
      if (value !== undefined && value !== 'iczer') {
        f('输入\'iczer\'试下？')
      }
      f()
    },
    onSubmit() {
      // console.log(this.postForm);
      // create(this.postForm).then((res) => {
      //   if (res.data) {
      //     console.log(res.data);
      //   }
      // });
      this.form.validateFields()
        .then(() => {
          console.log('values', this.form);
        })
        .catch(error => {
          console.log('error', error);
        });
    },
  },
};
</script>

<style scoped>
</style>
