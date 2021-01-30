<template>
  <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
    <a-form-model ref="ruleForm" :model="diary" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="名称" prop="title">
        <a-input v-model="diary.title" placeholder="名称" />
      </a-form-model-item>
      <a-form-model-item label="内容" prop="content">
        <Tinymce ref="editor" v-model="diary.content" />
      </a-form-model-item>
    </a-form-model>
    <footer-tool-bar>
      <a-button type="primary" :loading="loading" @click="onSubmit"> 提交 </a-button>
    </footer-tool-bar>
  </a-card>
</template>

<script>
import { create, fetch, update } from '@/api/diary'
import FooterToolBar from '@/components/FooterToolbar'
import Tinymce from '@/components/Tinymce'
export default {
  name: 'DiaryDetail',
  components: { FooterToolBar, Tinymce },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      diary: {
        title: this.$moment().format('YYYY-MM-DD') + ' | '
      },
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
          this.diary = res
          console.log(this.diary)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log(this.diary)
          this.loading = true
          if (this.isEdit) {
            update(this.diary).then(() => {
              this.loading = false
              this.$message.success('修改成功', () => {
                this.$router.push({ name: 'DiaryList' })
              })
            })
          } else {
            create(this.diary).then(() => {
              this.loading = false
              this.$message.success('创建成功', () => {
                this.$router.push({ name: 'DiaryList' })
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
