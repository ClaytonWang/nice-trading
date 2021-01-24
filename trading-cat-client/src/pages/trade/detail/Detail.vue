<template>
  <TradeDetail :is-edit="true" />
</template>

<script>
import TradeDetail from '../components/TradeDetail.vue'
export default {
  name: 'PlanDetail',
  components: { TradeDetail }
}
</script>

