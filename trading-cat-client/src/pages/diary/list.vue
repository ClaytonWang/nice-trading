<template>
  <div class="table">
    <advance-table
      :columns="columns"
      :data-source="dataSource"
      title=" "
      :loading="loading"
      row-key="id"
      :format-conditions="true"
      @search="onSearch"
      @refresh="onRefresh"
      @reset="onReset"
    >
      <template slot="add-new">
        <a-tooltip title="新建">
          <a-button class="action" type="primary" size="small" @click="addNew">
            新建
          </a-button>
        </a-tooltip>
      </template>
      <template slot="id" slot-scope="{ index }">
        {{ index + 1 }}
      </template>
      <template slot="c-title" slot-scope="{ record }">
        <a
          @click="$openPage('/diary/edit/' + record.id, '编辑' + record.title)"
          >{{ record.title }}</a
        >
      </template>
      <template slot="operation" slot-scope="{ record }">
        <a-popconfirm
          v-if="dataSource.length"
          title="确定删除吗?"
          @confirm="remove(record.id)"
        >
          <a href="#">删除</a>
        </a-popconfirm>
      </template>
    </advance-table>
  </div>
</template>

<script>
import { list, del } from "@/services/diary";
import AdvanceTable from "@/components/table/advance/AdvanceTable";

export default {
  name: "DiaryList",
  components: { AdvanceTable },
  filters: {},
  data() {
    return {
      loading: false,
      page: 0,
      pageSize: 10,
      total: 0,
      dataSource: [],
      conditions: {},
      columns: [
        {
          title: "序号",
          dataIndex: "id",
          key: "id",
          scopedSlots: { customRender: "id" },
        },
        {
          title: "标题",
          dataIndex: "title",
          key: "title",
          scopedSlots: { customRender: "c-title" },
        },
        {
          title: "日期",
          dataIndex: "updated_at",
          key: "updated_at",
        },
        {
          title: "操作",
          key: "operation",
          scopedSlots: { customRender: "operation" },
        },
      ],
      pagination: {
        current: this.page,
        pageSize: this.pageSize,
        total: this.total,
        showSizeChanger: true,
        showLessItems: true,
        showQuickJumper: true,
        showTotal: (total, range) =>
          `第 ${range[0]}-${range[1]} 条，总计 ${total} 条`,
        onChange: this.onPageChange,
        onShowSizeChange: this.onSizeChange,
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      const { page, pageSize, conditions } = this;
      list({ offset: page, limit: pageSize, ...conditions }).then((res) => {
        const { count, rows } = res.data;
        this.dataSource = rows;
        this.page = page;
        this.total = count;
        this.pageSize = pageSize;
        this.loading = false;
      });
    },
    remove(id) {
      console.log(id);
      del(id).then((res) => {
        if (res.data) {
          const newData = this.dataSource.filter((item) => item.id !== id);
          this.dataSource = newData;
        }
      });
    },
    addNew(){

    },
    onSearch(conditions, searchOptions) {
      console.log(searchOptions);
      this.page = 1;
      this.conditions = conditions;
      this.getList();
    },
    onSizeChange(current, size) {
      this.page = 1;
      this.pageSize = size;
      this.getList();
    },
    onRefresh(conditions) {
      this.conditions = conditions;
      this.getList();
    },
    onReset(conditions) {
      this.conditions = conditions;
      this.getList();
    },
    onPageChange(page, pageSize) {
      this.page = page;
      this.pageSize = pageSize;
      this.getList();
    },
  },
};
</script>
<style scoped lang="less">
.table {
  background-color: @base-bg-color;
  padding: 0 20px;
}
</style>
