<template>
	<uni-list>
	    <uni-list-item title="开启点击反馈" clickable  @click="onClick" ></uni-list-item>
	    <uni-list-item title="默认 navigateTo 方式跳转页面" link to="/pages/vue/index/index" @click="onClick($event,1)" ></uni-list-item>
	    <uni-list-item title="reLaunch 方式跳转页面" link="reLaunch" to="/pages/vue/index/index" @click="onClick($event,1)" ></uni-list-item>
	</uni-list>
</template>

<script>
	export default {
	    components: {},
	    data() {
	        return {
	        }
	    }
	}
</script>

<style lang='scss' scoped>
	page {
		background: $page-color-base;
	}
	.container {
		padding: $page-row-spacing;
		width: 100%;
	}
</style>

