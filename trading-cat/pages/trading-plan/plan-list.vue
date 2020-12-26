<template>
	<view class="container">
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @up="upCallback" @down="downCallback">
			<view class="plan-group">
				<view class="header">
					<text class="title">盈利<text class="count">共 0 个</text></text>
					<text class="title">亏损<text class="count">共 0 个</text></text>
					<text class="title">风险<text class="count">共 4% </text></text>
				</view>
				<template v-for="(item,index) in plan_list">
					<PlanItem :item="item" :key="index"></PlanItem>
				</template>
			</view>
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
				popup_plan_id: '',
				popup_comments_id:'',
				popup_comments: ''
			}
		},
		filters: {
			formatPriority(v) {
				switch (v.toString()) {
					case '0':
						return '耐心等待';
						break;
					case '1':
						return '等待';
						break;
					case '2':
						return '一般';
						break;
					case '3':
						return '高';
						break;
				}
			},
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
