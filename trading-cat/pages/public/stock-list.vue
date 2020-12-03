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
				list: [],
				sourceList: []
			};
		},
		async onNavigationBarSearchInputChanged(data){
			console.log(data)
			if(data.text){
				let letter = data.text.charAt(0).toUpperCase();
				await this.search(data.text);
			} else {
				this.list = []
			}
		},
		onLoad(){
		},
		methods:{
			...mapActions('Trading', ['searchStock']),
			async search(keyword) {
				const res = await this.searchStock(keyword);
				this.list=[];
				if(res && res.data){
					let data = res.data.split('=')[1];
					if(!!data){
						let arrData = data.split(";");
						arrData && arrData.forEach((item)=>{
							let temp = item.split(',');
							if(!temp[0]){
								return;
							}
							let name = temp[0].replace(/\"/g,'');
							if(!name){
								return;
							}
							this.list.push({
								letter:temp[3],
								data:[name+' ('+temp[2]+')']
							});
						});
					}
				}
			},
			change(e){
				let a = JSON.stringify(e)
				uni.$emit('selectStock',{stock: e})
				uni.navigateBack({ });
			},
		}
	}
</script>

<style lang='scss' scoped>
	
</style>
