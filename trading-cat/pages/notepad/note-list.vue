<template>
	<view class="container">
		<uni-list>
		    <uni-list-item title="列表文字" note="列表描述信息" link to="/pages/vue/index/index" @click="onClick($event,1)"></uni-list-item>
		</uni-list>
	</view>
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

