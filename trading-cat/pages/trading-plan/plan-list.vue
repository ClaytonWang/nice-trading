<template>
	<view class="container">
		<view class="header">
			<text class="title">盈利<text class="count">共 0 个</text></text>
			<text class="title">亏损<text class="count">共 0 个</text></text>
			<text class="title">风险<text class="count">共 4% </text></text>
		</view>
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @up="upCallback" @down="downCallback">
			<uni-list v-for="(item,index) in plan_list" :border="false">
			    <uni-list-item
				:showArrow="true"
				:ellipsis="1" 
				:key="index" 
				:title="item.name+'('+item.code+')'"
				:note="noteLable(item)"
				rightText="查看"
				clickable
				@click="navTo(item.id,item.name,item.code,item.symbol)"></uni-list-item>
			</uni-list>
		</mescroll-body>
	</view>
</template>
<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		commonMixin
	} from '@/common/mixin/mixin.js';
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import PlanItem from '@/components/plan-list-item.vue';
	export default {
		mixins: [commonMixin, MescrollMixin],
		components: {
			PlanItem,
		},
		data() {
			return {
				mescroll: null,
				plan_list: [],
			}
		},
		onShow() {
			this.getList({
				offset:0,
				limit:10
			});
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			let $this = this;
			uni.showActionSheet({
				itemList: ['添加交易计划'],
				success: function(res) {
					let i = res.tapIndex
					uni.navigateTo({
						url: "/pages/trading-plan/add-plan"
					})
				},
				fail: function(res) {}
			});
		},
		// #endif
		methods: {
			...mapActions('Trading', ['getPlanList']),
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			async getList(params) {
				const res = await this.getPlanList(params);
				if (res && res.data) {
					if (params.offset == 0) {
						this.plan_list = [];
					}
					this.plan_list = this.plan_list.concat(res.data.rows);
					let curPageLen = res.data.rows.length;
					let totalSize = res.data.count;
					this.mescroll.endBySize(curPageLen, totalSize);
				} else {
					this.$msg(data.errMsg);
					this.plan_list = [];
					this.mescroll.endErr();
				}
			},
			downCallback() {
				this.mescroll.resetUpScroll();
			},
			async upCallback(page) {
				let offset = page.num - 1; // 页码, 默认从1开始
				let limit = page.size; // 页长, 默认每页10条
				await this.getList({
					offset,
					limit
				});
			},
			navTo(id, name, code, symbol) {
				uni.navigateTo({
					url: `/pages/trading-detail/detail-list?plan_id=${id}&name=${name}&code=${code}&symbol=${symbol}`
				})
			},
			noteLable(item){
				return "止损："+item.stop_loss+"  止赢："+item.take_profit;
			}
		}
	}
</script>
<style lang='scss' scoped>
	.container {
		padding: $page-row-spacing;
		width: 100%;
		.header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		
			.title {
				font-size: $font-md;
			}
		}
	}
</style>
