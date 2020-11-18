<template>
  <div class="trade-detail"></div>
</template>

<script>
import { getTrades } from '@/api/trade';

export default {
  name: 'Trade',
  components: {},
  data() {
    return {};
  },
  async mounted() {
    const data = await getTrades();
    console.log(data);
    this.tableData = data;
  },
  methods: {
    viewDetail(row) {
      this.$router.push({
        name: 'TradeDetail',
      });
      console.log(row);
    },
    addTradePlan() {
      this.$refs.addTrade.$emit('open');
    },
  },
};
</script>
<style lang="scss" scope>
.trade-detail {
}
</style>
