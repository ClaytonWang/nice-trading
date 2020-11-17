<template>
  <div class="login-container">
    <div class="logo-wrapper">
      <svg-icon icon-class="logo" class-name="logo" />
      <span>{{ title }}</span>
    </div>
    <el-form
      class="login-form"
      autocomplete="on"
      :model="form"
      :rules="rules"
      ref="form"
    >
      <el-form-item prop="username">
        <span class="icon-wrapper">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          name="username"
          v-model="form.username"
          autocomplete="on"
          placeholder="账号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="icon-wrapper">
          <svg-icon icon-class="lock" />
        </span>
        <el-input
          type="password"
          @keyup.enter.native="handleLogin"
          v-model="form.password"
          placeholder="密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          class="btn-submit"
          type="primary"
          :loading="loading"
          @click="handleLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
    <svg-icon icon-class="bg" class-name="bg" />
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      redirect: undefined,
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, message: '密码不能小于5位', trigger: 'blur' },
        ],
      },
    };
  },
  computed: {
    title() {
      return this.$store.state.settings.title;
    },
  },
  watch: {
    $route: {
      handler: function (val) {
        this.redirect = val.query.redirect;
      },
    },
  },
  methods: {
    handleLogin() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;

          try {
            await this.$store.dispatch('user/doLogin', this.form);
            this.loading = false;
            await this.$router.replace({ path: this.redirect || '/' });
          } catch (error) {
            this.loading = false;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import './index.scss';
</style>
