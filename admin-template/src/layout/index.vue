<template>
  <div class="app-wrapper" :class="classObj">
    <div
      v-show="isMobile && sidebar"
      class="drawer-bg"
      @click="handleClickBg"
    ></div>
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <Navbar />
        <TagsView v-if="showTagsView" />
      </div>
      <AppMain />
    </div>
    <SettingPanel />
    <BackTop />
  </div>
</template>

<script>
import resize from './mixins/resize'
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar/index.vue'
import AppMain from './components/AppMain.vue'
import TagsView from './components/TagsView.vue'
import SettingPanel from './components/SettingPanel.vue'
import BackTop from './components/BackTop.vue'

export default {
  name: 'Layout',
  mixins: [resize],
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView,
    SettingPanel,
    BackTop
  },
  computed: {
    showTagsView() {
      return this.$store.state.settings.showTagsView
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    sidebar() {
      return this.$store.state.app.sidebar
    },
    isMobile() {
      return this.$store.getters.isMobile
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar,
        hideTagsView: !this.showTagsView,
        mobile: this.isMobile
      }
    }
  },
  methods: {
    handleClickBg() {
      this.$store.dispatch('app/toggleSidebar', false)
    }
  }
}
</script>

<style lang="less">
@headerHeight: 85px;
@siderMaxWidth: 250px;
@siderMinWidth: 62px;
@menuItemHeight: 50px;
@siderBgColor: #001529;

/* 页面过渡动画 */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.app-wrapper {
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .main-container {
    position: relative;
    margin-left: @siderMaxWidth;
    transition: margin-left 0.28s;
    overflow-x: hidden;

    .fixed-header {
      position: fixed;
      top: 0;
      right: 0;
      width: calc(100% - @siderMaxWidth);
      z-index: 100;
      transition: width 0.28s;
    }

    .app-main {
      position: relative;
      padding: 20px 20px 0;
    }

    .fixed-header + .app-main {
      padding-top: 108px;
    }
  }

  .sidebar-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: @siderMaxWidth !important;
    height: 100%;
    font-size: 0;
    z-index: 1001;
    overflow: hidden;
    transition: width 0.28s;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);

    .horizontal-collapse-transition {
      /* prettier-ignore */
      transition:
        0s width ease-in-out,
        0s padding-left ease-in-out,
        0s padding-right ease-in-out;
    }

    .scrollbar-wrapper {
      overflow-x: hidden !important;
      background-color: @siderBgColor;
    }

    .el-scrollbar__bar.is-vertical {
      right: 0;
    }

    .is-horizontal {
      display: none;
    }

    .el-menu {
      height: 100%;
      width: 100% !important;
      border: none;

      a {
        display: inline-block;
        width: 100%;
        overflow: hidden;
      }

      .svg-icon {
        font-size: 22px;
        margin-right: 16px;
        vertical-align: middle;
      }

      span {
        user-select: none;
      }

      .el-submenu__title,
      .el-menu-item {
        height: @menuItemHeight !important;
        line-height: @menuItemHeight !important;
      }

      .is-active > .el-submenu__title {
        color: #f4f4f5 !important;
      }

      & .nest-menu .el-submenu .el-submenu__title,
      & .el-submenu .el-menu-item {
        background-color: #000c17 !important;
      }
    }
  }

  &.hideSidebar {
    .sidebar-container {
      width: @siderMinWidth !important;
    }

    .main-container {
      margin-left: @siderMinWidth;

      .fixed-header {
        width: calc(100% - @siderMinWidth);
      }
    }

    .el-submenu {
      overflow: hidden;

      & > .el-submenu__title {
        padding: 0 !important;

        .svg-icon {
          margin-left: 20px;
        }

        .el-submenu__icon-arrow {
          display: none;
        }
      }
    }

    .svg-icon {
      margin-right: 0 !important;
    }

    .el-menu--collapse {
      .el-submenu {
        & > .el-submenu__title {
          & > span {
            height: 0;
            width: 0;
            overflow: hidden;
            visibility: hidden;
            display: inline-block;
          }
        }
      }
    }
  }

  &.hideTagsView {
    .navbar {
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    }

    .app-main {
      padding-top: 70px !important;
    }
  }

  &.mobile {
    .sidebar-container {
      transition: transform 0.28s;
      width: @siderMaxWidth !important;
    }

    .main-container {
      margin-left: 0 !important;

      .app-main {
        padding: 20px 10px 0;
      }

      .fixed-header + .app-main {
        padding-top: 108px;
      }

      .fixed-header {
        width: 100% !important;
      }
    }

    &.hideSidebar {
      .sidebar-container {
        pointer-events: none;
        transition-duration: 0.3s;
        transform: translate3d(-@siderMaxWidth, 0, 0);
        box-shadow: none;
      }
    }
  }
}
</style>
