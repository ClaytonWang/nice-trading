<template>
  <el-drawer
    title="系统配置"
    direction="rtl"
    :with-header="false"
    :visible.sync="showSettings"
    :size="size"
  >
    <div class="setting-panel-items">
      <div class="panel-item">
        <span>启用标签栏</span>
        <el-switch v-model="showTagsView" class="panel-switch" />
      </div>

      <div class="panel-item">
        <span>固定头部</span>
        <el-switch v-model="fixedHeader" class="panel-switch" />
      </div>

      <div class="panel-item">
        <span>侧边栏按钮</span>
        <el-switch v-model="showSidebarLogo" class="panel-switch" />
      </div>
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: 'SettingPanel',
  computed: {
    size() {
      return this.$store.getters.isMobile ? '50%' : '400px';
    },
    showSettings: {
      get() {
        return this.$store.state.settings.showSettings;
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showSettings',
          value: val,
        });
      },
    },
    showTagsView: {
      get() {
        return this.$store.state.settings.showTagsView;
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showTagsView',
          value: val,
        });
      },
    },
    fixedHeader: {
      get() {
        return this.$store.state.settings.fixedHeader;
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'fixedHeader',
          value: val,
        });
      },
    },
    showSidebarLogo: {
      get() {
        return this.$store.state.settings.showSidebarLogo;
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showSidebarLogo',
          value: val,
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.setting-panel-items {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .panel-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }

  .panel-item {
    padding: 12px 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }

  .panel-switch {
    float: right;
  }
}
</style>
