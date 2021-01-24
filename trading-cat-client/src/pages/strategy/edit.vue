<template>
  <StrategyDetail :is-edit="true" />
</template>

<script>
import StrategyDetail from './components/StrategyDetail.vue'
export default {
  name: 'EditStrategy',
  components: { StrategyDetail }
}
</script>

