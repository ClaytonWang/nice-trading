<template>
  <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
    <a-form
      ref="postForm"
      :model="postForm"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item ref="title" :label="$t('title')" prop="title" name="title">
        <a-input :placeholder="$t('titleInput')" v-model="postForm.title" />
      </a-form-item>
      <a-form-item :label="$t('ecology')">
        <a-textarea rows="2" :placeholder="$t('ecologyInput')" />
      </a-form-item>
      <a-form-item :label="$t('content')">
        <a-textarea rows="10" :placeholder="$t('contentInput')" />
      </a-form-item>

      <a-form-item
        style="margin-top: 24px"
        :wrapperCol="{ span: 10, offset: 10 }"
      >
        <a-button type="primary" @click="onSubmit">{{ $t("submit") }}</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
const defaultForm = {
  title: "", // 文章题目
  ecology: "",
  content: "", // 文章内容
  id: undefined,
};
export default {
  name: "StrategyDetail",
  i18n: require("./i18n"),
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      postForm: Object.assign({}, defaultForm),
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
    onSubmit() {
      this.$refs.postForm
        .validate()
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
