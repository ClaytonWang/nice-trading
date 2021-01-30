<template>
  <DiaryDetail :is-edit="false" />
</template>

<script>
import DiaryDetail from './components/DiaryDetail'
export default {
  name: 'CreateDiary',
  components: { DiaryDetail }
}
</script>
