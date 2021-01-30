<template>
  <DiaryDetail :is-edit="true" />
</template>

<script>
import DiaryDetail from './components/DiaryDetail.vue'
export default {
  name: 'EditDiary',
  components: { DiaryDetail }
}
</script>
