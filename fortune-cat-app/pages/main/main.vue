<template>
	<view class="container">
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @up="upCallback" @down="downCallback">
			<wyb-table ref="table" :headers="headers" :contents="contents" :format-col="formatcol" />
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
	import wybTable from '@/components/wyb-table/wyb-table.vue'
	export default {
		components: {
			wybTable
		},
		mixins: [commonMixin, MescrollMixin],
		data() {
			return {
				headers: [{
					label: '名称',
					key: 'name',
				}, {
					label: '总额',
					key: 'total_amount',
				}, {
					label: '风险',
					key: 'risk',
					isNumber: true
				}, {
					label: '收益',
					key: 'profit'
				}, {
					label: '收益率',
					key: 'rate_profit'
				}, {
					label: '战法',
					key: 'strategy_title'
				}, {
					label: '建仓',
					key: 'start_date'
				}, {
					label: '清仓',
					key: 'end_date'
				}],
				formatcol: [{
					key: 'total_amount',
					template: '#total_amount#',
					bottomComputedFormat: true
				}, {
					key: 'risk',
					template: '#risk#',
					bottomComputedFormat: false
				}],
				offset: 0,
				limit: 10,
				contents: []
			}
		},
		async onLoad() {

		},
		methods: {
			...mapActions('Trading', ['getAnalysisReport']),
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			downCallback() {
				this.mescroll.resetUpScroll();
			},
			async upCallback(page) {
				let offset = page.num; // 页码, 默认从1开始
				let limit = page.size; // 页长, 默认每页10条
				offset = (offset - 1) * limit;
				await this.getList({
					offset,
					limit
				});
			},
			async getList(params) {
				const res = await this.getAnalysisReport(params);
				if (res.data && res.data.count > 0) {
					this.contents = res.data.rows.map(item => {
						return {
							...item,
							risk: item.trading_plan.risk,
							name: item.trading_plan.name,
							strategy_title: item.trading_plan.strategy.title
						}
					});
					let curPageLen = res.data.rows.length;
					let totalSize = res.data.count;
					this.mescroll.endBySize(curPageLen, totalSize);
				} else {
					this.$msg(data.errMsg);
					this.contents = [];
					this.mescroll.endErr();
				}
			}
		}
	}
</script>

<style>
	.container {
		padding: $page-row-spacing;
		width: 100%;
	}
</style>
