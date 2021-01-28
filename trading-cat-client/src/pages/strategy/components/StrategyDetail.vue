<template>
  <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
    <a-form
      :model="strategy"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item :label="$t('title')" prop="title">
        <a-input v-model="strategy.title" :placeholder="$t('titleInput')" />
      </a-form-item>
      <a-form-item :label="$t('ecology')" prop="ecology">
        <a-textarea
          v-model="strategy.ecology"
          rows="2"
          :placeholder="$t('ecologyInput')"
        />
      </a-form-item>
      <a-form-item :label="$t('content')" prop="content">
        <Tinymce ref="editor" v-model="strategy.content" />
      </a-form-item>
    </a-form>
    <footer-tool-bar>
      <a-button type="primary" :loading="loading" @click="onSubmit">
        {{ $t("submit") }}
      </a-button>
    </footer-tool-bar>
  </a-card>
</template>

<script>
import { create, fetch, update } from "@/services/strategy";
import FooterToolBar from "@/components/tool/FooterToolBar";
import Tinymce from "@/components/Tinymce";
export default {
  name: "StrategyDetail",
  i18n: require("./i18n"),
  components: { FooterToolBar, Tinymce },
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      strategy: {},
      loading: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      rules: {
        title: [
          {
            required: true,
            message: this.$t("titleInput"),
            trigger: "blur",
          },
        ],
        ecology: [
          {
            required: true,
            message: this.$t("ecologyInput"),
            trigger: "blur",
          },
        ],
        content: [
          {
            required: true,
            message: this.$t("content"),
            trigger: "blur",
          },
        ],
      },
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
    onSubmit() {
      console.log(this.strategy);
      this.loading = true;
      if (this.isEdit) {
        update(this.strategy).then(() => {
          this.loading = false;
          this.$closePage({ name: "编辑战法" }, { name: "战法列表" });
        });
      } else {
        create(this.strategy).then(() => {
          this.loading = false;
          this.$closePage({ name: "新建战法" }, { name: "战法列表" });
        });
      }
    },
  },
};
</script>

<style scoped>
</style>
