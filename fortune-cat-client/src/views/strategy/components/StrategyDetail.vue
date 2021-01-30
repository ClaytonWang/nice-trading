<template>
  <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
    <a-form-model ref="ruleForm" :model="strategy" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="名称" prop="title">
        <a-input v-model="strategy.title" placeholder="名称" />
      </a-form-model-item>
      <a-form-model-item label="生态环境" prop="ecology">
        <a-textarea v-model="strategy.ecology" rows="2" placeholder="请描述生态环境情况" />
      </a-form-model-item>
      <a-form-model-item label="战法内容" prop="content">
        <Tinymce ref="editor" v-model="strategy.content" />
      </a-form-model-item>
    </a-form-model>
    <footer-tool-bar>
      <a-button type="primary" :loading="loading" @click="onSubmit"> 提交 </a-button>
    </footer-tool-bar>
  </a-card>
</template>

<script>
import { create, fetch, update } from '@/api/strategy'
import FooterToolBar from '@/components/FooterToolbar'
import Tinymce from '@/components/Tinymce'
export default {
  name: 'StrategyDetail',
  components: { FooterToolBar, Tinymce },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      strategy: {},
      loading: false,
      labelCol: { span: 2 },
      wrapperCol: { span: 20 },
      rules: {
        title: [
          {
            required: true,
            message: '请输入战法名称',
            trigger: 'blur'
          }
        ],
        ecology: [
          {
            required: true,
            message: '请描述生态环境情况',
            trigger: 'blur'
          }
        ],
        content: [
          {
            required: true,
            message: '请输入战法内容',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  created () {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(id)
    }
  },
  methods: {
    fetchData (id) {
      fetch(id)
        .then((res) => {
          this.strategy = res
          console.log(this.strategy)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log(this.strategy)
          this.loading = true
          if (this.isEdit) {
            update(this.strategy).then(() => {
              this.loading = false
              this.$message.success('修改成功', () => {
                this.$router.push({ name: 'StrategyList' })
              })
            })
          } else {
            create(this.strategy).then(() => {
              this.loading = false
              this.$message.success('创建成功', () => {
                this.$router.push({ name: 'StrategyList' })
              })
            })
          }
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
