<template>
  <el-menu class="navbar" mode="horizontal">
    <Hamburger
      class="hamburger-container"
      :toggleClick="toggleSidebar"
      :isActive="sidebar"
    />
    <Breadcrumb class="breadcrumb-container" />
    <div class="right-menu-container">
      <template v-if="!isMobile">
        <PageSearch />
        <Screenfull />
        <ErrorLog />
      </template>
      <Setting />
      <el-dropdown class="avatar-container">
        <div class="avatar-wrapper">
          <el-avatar
            class="user-avatar"
            size="medium"
            :src="avatarSrc"
          ></el-avatar>
        </div>
        <template v-slot:dropdown>
          <el-dropdown-menu class="user-dropdown">
            <el-dropdown-item @click.native="handleLogout">
              <span>
                <svg-icon icon-class="logout" class-name="menu-icon"></svg-icon
                >退出
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import Breadcrumb from './components/Breadcrumb.vue'
import Hamburger from './components/Hamburger.vue'
import PageSearch from './components/PageSearch.vue'
import Screenfull from './components/Screenfull.vue'
import ErrorLog from './components/ErrorLog.vue'
import Setting from './components/Setting.vue'

export default {
  name: 'Navbar',
  components: {
    Breadcrumb,
    Hamburger,
    PageSearch,
    Screenfull,
    ErrorLog,
    Setting
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    isMobile() {
      return this.$store.getters.isMobile
    },
    avatarSrc() {
      return require('./avatar.png')
    }
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('app/toggleSidebar', !this.sidebar)
    },
    async handleLogout() {
      const loading = this.$loading()

      try {
        await this.$store.dispatch('user/doLogout')
        loading.close()
        this.$router.replace({ name: 'Login' })
      } catch (error) {
        loading.close()
      }
    }
  }
}
</script>

<style lang="less">
@height: 50px;

.navbar {
  height: @height;
  line-height: @height;
  border-radius: 0 !important;

  .hamburger-container {
    float: left;
    height: @height;
    padding: 0 10px;
    line-height: 60px;
  }

  .right-menu-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    & > div {
      height: @height;
      margin-right: 15px;
      color: #2c2c2c;
    }
  }

  .avatar-container {
    display: inline-block;

    .avatar-wrapper {
      position: relative;
      cursor: pointer;

      .user-avatar {
        font-size: 32px;
        vertical-align: middle;
      }
    }
  }
}

.user-dropdown {
  .menu-icon {
    margin-right: 5px;
  }
}
</style>
