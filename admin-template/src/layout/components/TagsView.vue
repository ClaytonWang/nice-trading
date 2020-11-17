<template>
  <div class="tags-view-container">
    <div class="btn left-btn">
      <el-button
        type="text"
        icon="el-icon-arrow-left"
        @click="handleScroll(240)"
      ></el-button>
    </div>
    <div class="btn right-btn">
      <el-button
        type="text"
        icon="el-icon-arrow-right"
        @click="handleScroll(-240)"
      ></el-button>
    </div>
    <div
      class="scroll-outer"
      ref="scrollOuter"
      @DOMMouseScroll="handlescroll"
      @mousewheel="handlescroll"
    >
      <div
        ref="scrollBody"
        class="scroll-body"
        :style="{ left: tagBodyLeft + 'px' }"
      >
        <router-link
          ref="tag"
          v-for="tag in visitedViews"
          class="tags-view-item"
          :class="isActive(tag) ? 'active' : ''"
          :to="tag"
          :key="tag.path"
          @click.middle.native="!isAffix(tag) ? closeSelectedTag(tag) : ''"
          @contextmenu.prevent.native="openContext(tag, $event)"
        >
          {{ tag.title }}
          <span
            v-if="!isAffix(tag)"
            class="el-icon-close"
            @click.prevent.stop="closeSelectedTag(tag)"
          ></span>
        </router-link>
      </div>
    </div>
    <ul
      v-show="visible"
      :style="{ left: contextLeft + 'px', top: contextTop + 'px' }"
      class="contextmenu"
    >
      <li @click="refreshSelectedTag(selectedTag)">刷新页面</li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">
        关闭页面
      </li>
      <li @click="closeOthersTags(selectedTag)">关闭其他</li>
      <li @click="closeAllTags(selectedTag)">关闭所有</li>
    </ul>
  </div>
</template>

<script>
import path from 'path';

export default {
  name: 'TagsView',
  data() {
    return {
      visible: false,
      contextTop: 0,
      contextLeft: 0,
      tagBodyLeft: 0,
      outerPadding: 4,
      selectedTag: {},
      affixTags: [],
    };
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews;
    },
    routers() {
      return this.$store.state.permission.routers;
    },
  },
  watch: {
    $route: {
      handler: function () {
        this.addTags();
        this.moveToCurrentTag();
      },
    },
    visible: {
      handler: function (val) {
        val
          ? document.body.addEventListener('click', this.closeContext)
          : document.body.removeEventListener('click', this.closeContext);
      },
    },
  },
  mounted() {
    this.initTags();
    this.addTags();
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    isAffix(tag) {
      return tag.meta && tag.meta.affix;
    },
    filterAffixTags(routes, basePath = '/') {
      let tags = [];
      routes.forEach((route) => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path);
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta },
          });
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path);
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags];
          }
        }
      });
      return tags;
    },
    initTags() {
      this.affixTags = this.filterAffixTags(this.routers);
      for (const tag of this.affixTags) {
        // Must have tag name
        if (tag.name) {
          this.$store.dispatch('tagsView/addVisitedView', tag);
        }
      }
    },
    addTags() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch('tagsView/addView', this.$route);
      }
      return false;
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag;

      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.moveToTarget(tag.$el);

            // when query is different then update
            if (tag.to.fullPath !== this.$route.fullPath) {
              this.$store.dispatch('tagsView/updateVisitedView', this.$route);
            }
            break;
          }
        }
      });
    },
    moveToTarget(tag) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth;
      const bodyWidth = this.$refs.scrollBody.offsetWidth;

      if (bodyWidth < outerWidth) {
        this.tagBodyLeft = 0;
      } else if (tag.offsetLeft < -this.tagBodyLeft) {
        // 标签在可视区域左侧
        this.tagBodyLeft = -tag.offsetLeft + this.outerPadding;
      } else if (
        tag.offsetLeft > -this.tagBodyLeft &&
        tag.offsetLeft + tag.offsetWidth < -this.tagBodyLeft + outerWidth
      ) {
        // 标签在可视区域
        this.tagBodyLeft = Math.min(
          0,
          outerWidth - tag.offsetWidth - tag.offsetLeft - this.outerPadding,
        );
      } else {
        // 标签在可视区域右侧
        this.tagBodyLeft = -(
          tag.offsetLeft -
          (outerWidth - this.outerPadding - tag.offsetWidth)
        );
      }
    },
    refreshSelectedTag(view) {
      this.$store.dispatch('tagsView/delCachedView', view).then(() => {
        const { fullPath } = view;

        this.$nextTick(() => {
          this.$router.replace({
            path: '/redirect' + fullPath,
          });
        });
      });
    },
    closeSelectedTag(view) {
      this.$store
        .dispatch('tagsView/delView', view)
        .then(({ visitedViews }) => {
          if (this.isActive(view)) {
            this.toLastView(visitedViews, view);
          }
        });
    },
    closeOthersTags(view) {
      this.$router.push(view);
      this.$store.dispatch('tagsView/delOthersViews', view).then(() => {
        this.moveToCurrentTag();
      });
    },
    closeAllTags(view) {
      this.$store.dispatch('tagsView/delAllViews').then(({ visitedViews }) => {
        if (this.affixTags.some((tag) => tag.path === view.path)) {
          return;
        }
        this.toLastView(visitedViews, view);
      });
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0];

      if (latestView) {
        this.$router.push(latestView.fullPath);
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === 'Dashboard') {
          // to reload home page
          this.$router.replace({ path: '/redirect' + view.fullPath });
        } else {
          this.$router.push('/');
        }
      }
    },
    openContext(tag, e) {
      const menuMinWidth = 105;
      const offsetLeft = this.$el.getBoundingClientRect().left;
      const offsetWidth = this.$el.offsetWidth;
      const maxLeft = offsetWidth - menuMinWidth;
      const left = e.clientX - offsetLeft + 10;

      if (left > maxLeft) {
        this.contextLeft = maxLeft;
      } else {
        this.contextLeft = left;
      }

      this.contextTop = e.clientY - 50;
      this.visible = true;
      this.selectedTag = tag;
    },
    closeContext() {
      this.visible = false;
    },
    handlescroll(e) {
      var type = e.type;
      let delta = 0;
      if (type === 'DOMMouseScroll' || type === 'mousewheel') {
        delta = e.wheelDelta ? e.wheelDelta : -(e.detail || 0) * 40;
      }
      this.closeContext();
      this.handleScroll(delta);
    },
    handleScroll(offset) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth;
      const bodyWidth = this.$refs.scrollBody.offsetWidth;
      if (offset > 0) {
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset);
      } else {
        if (outerWidth < bodyWidth) {
          if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
            // this.tagBodyLeft = this.tagBodyLeft
          } else {
            this.tagBodyLeft = Math.max(
              this.tagBodyLeft + offset,
              outerWidth - bodyWidth,
            );
          }
        } else {
          this.tagBodyLeft = 0;
        }
      }
    },
  },
};
</script>

<style lang="scss">
.tags-view-container {
  position: relative;
  height: 38px;
  background: #f0f0f0;
  border-bottom: 1px solid #f0f0f0;

  .btn {
    position: absolute;
    top: 0;
    z-index: 10;
    height: 100%;
    padding-top: 6px;
    background: #fff;

    button {
      padding: 6px 4px;
      color: #97a8be;
      line-height: 14px;
      text-align: center;
    }

    &.left-btn {
      left: 0;
    }

    &.right-btn {
      right: 0;
      border-right: 1px solid #f0f0f0;
    }
  }

  .scroll-outer {
    position: absolute;
    top: 0;
    right: 23px;
    bottom: 0;
    left: 23px;
    box-shadow: 0 0 3px 2px rgba(100, 100, 100, 0.1) inset;

    .scroll-body {
      position: absolute;
      display: inline-block;
      height: calc(100% - 1px);
      padding: 1px 4px 0;
      overflow: visible;
      white-space: nowrap;
      transition: left 0.3s ease;

      .tags-view-item {
        position: relative;
        display: inline-block;
        height: 30px;
        margin-top: 2px;
        padding: 0 10px;
        color: #495060;
        font-size: 12px;
        line-height: 30px;
        background: #fff;
        border-radius: 2px;
        user-select: none;

        &:not(:last-child) {
          margin-right: 5px;
        }

        &::before {
          position: relative;
          display: inline-block;
          width: 8px;
          height: 8px;
          margin-right: 2px;
          background-color: #e8eaec;
          border-radius: 50%;
          transition: background-color 0.2s ease;
          content: '';
        }

        &:hover {
          opacity: 0.85;
        }

        &.active {
          &::before {
            background-color: #2d8cf0;
          }
        }

        .el-icon-close {
          font-size: 12px;
          vertical-align: middle;
        }
      }
    }
  }

  .contextmenu {
    position: absolute;
    z-index: 100;
    margin: 0;
    padding: 5px 0;
    color: #333;
    font-weight: 400;
    font-size: 12px;
    list-style-type: none;
    background: #fff;
    border-radius: 4px;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);

    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;

      &:hover {
        background: #eee;
      }
    }
  }
}
</style>
