<template>
	<view class="container">
		<wyb-table ref="table" :headers="headers" :contents="contents" />
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import wybTable from '@/components/wyb-table/wyb-table.vue'
	export default {
		components: {
			wybTable
		},
		data() {
			return {
				headers: [{
					label: '名称',
					key: 'name'
				}, {
					label: '总额',
					key: 'total_amount'
				}, {
					label: '风险',
					key: 'risk'
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
				offset:0,
				limit:10,
				contents: []
			}
		},
		async onLoad() {
			const res = await this.getAnalysisReport({
				offset:this.offset,
				limit:this.limit
			});
			if (res.data && res.data.count > 0) {
				this.contents = res.data.rows.map(item => {
					return {
						...item,
						risk: item.trading_plan.risk,
						name: item.trading_plan.name,
						strategy_title: item.trading_plan.strategy.title
					}
				});
				console.log(this.contents)
			}
		},
		methods: {
			...mapActions('Trading', ['getAnalysisReport']),
		}
	}
</script>

<style>
	.container {
		padding: $page-row-spacing;
		width: 100%;
	}
</style>
