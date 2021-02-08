<template>
	<view class="container">
		<uni-indexed-list :options="list" :show-select="false" @click="change"/>
	</view>
</template>

<script>
	import { uniIndexedList } from '@dcloudio/uni-ui'
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		components: {
			uniIndexedList
		},
		data() {
			return {
				list: []
			};
		},
		async onNavigationBarSearchInputChanged(data){
			if(data.text){
				let letter = data.text.charAt(0).toUpperCase();
				await this.search(data.text);
			} else {
				this.list = []
			}
		},
		async onLoad(options) {
			const res = await this.getStrategy();
			if(res && res.data){
				this.list = res.data.rows.map(e=>{
					return {data:[e.title + ' (' + e.id+')']}
				});
			}
		},
		methods:{
			...mapActions('Trading', ['getStrategy']),
			async search(keyword) {
				return this.list;
			},
			change(e){
				console.log(e)
				uni.$emit('selectStrategy',{strategy: e})
				uni.navigateBack({ });
			},
		}
	}
</script>

<style lang='scss' scoped>
	
</style>
