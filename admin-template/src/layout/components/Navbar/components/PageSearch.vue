<template>
  <div class="page-search" :class="{ show: show }">
    <svg-icon
      class-name="search"
      icon-class="search"
      @click.native.stop="handleClick"
    ></svg-icon>
    <el-select
      ref="select"
      class="search-select"
      placeholder="请输入"
      v-model="search"
      :remote-method="querySearch"
      @change="handleChange"
      remote
      filterable
    >
      <el-option
        v-for="item in options"
        :key="item.path"
        :value="item"
        :label="item.title.join(' > ')"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
import Fuse from 'fuse.js';
import path from 'path';

export default {
  name: 'PageSearch',
  data() {
    return {
      show: false,
      search: '',
      searchPool: [],
      options: [],
      fuse: undefined,
    };
  },
  computed: {
    routers() {
      return this.$store.state.permission.routers;
    },
  },
  watch: {
    show: {
      handler: function (val) {
        val
          ? document.body.addEventListener('click', this.handleClose)
          : document.body.removeEventListener('click', this.handleClose);
      },
    },
    searchPool: {
      handler: function (val) {
        this.initFuse(val);
      },
    },
  },
  mounted() {
    this.searchPool = this.generateRoutes(this.routers);
  },
  methods: {
    initFuse(list) {
      this.fuse = new Fuse(list, {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          {
            name: 'title',
            weight: 0.7,
          },
          {
            name: 'path',
            weight: 0.3,
          },
        ],
      });
    },
    handleClick() {
      this.show = !this.show;

      if (!this.show) {
        this.$refs.select && this.$refs.select.focus();
      }
    },
    handleClose() {
      this.$refs.select && this.$refs.select.blur();
      this.options = [];
      this.show = false;
    },
    handleChange(val) {
      this.$router.push(val.path);
      this.search = '';
      this.options = [];
      this.$nextTick(() => {
        this.show = false;
      });
    },
    querySearch(query) {
      this.options = query !== '' ? this.fuse.search(query) : [];
    },
    generateRoutes(routers, basePath = '/', prefixTitle = []) {
      let res = [];

      for (const router of routers) {
        if (router.hidden) {
          continue;
        }

        const data = {
          path: path.resolve(basePath, router.path),
          title: [...prefixTitle],
        };

        if (router.meta && router.meta.title) {
          data.title = [...data.title, router.meta.title];

          if (router.redirect !== 'noredirect') {
            res.push(data);
          }
        }

        if (router.children && router.children.length) {
          const temp = this.generateRoutes(
            router.children,
            data.path,
            data.title,
          );

          if (temp.length >= 1) {
            res = [...res, ...temp];
          }
        }
      }

      return res;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-search {
  display: inline-block;

  .search {
    font-size: 22px;
    vertical-align: middle;
    cursor: pointer;
  }

  .search-select {
    display: inline-block;
    width: 0;
    overflow: hidden;
    font-size: 18px;
    vertical-align: middle;
    background: transparent;
    border-radius: 0;
    transition: width 0.2s;

    /deep/ .el-input__inner {
      padding-right: 0;
      padding-left: 0;
      vertical-align: middle;
      border: 0;
      border-bottom: 1px solid #d9d9d9;
      border-radius: 0;
      box-shadow: none !important;
    }
  }

  &.show {
    .search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
