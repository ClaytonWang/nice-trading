<template>
	<view class="container">
		<echarts :option="option" style="height: 300px;"></echarts>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		commonMixin
	} from '@/common/mixin/mixin.js'
	import Echarts from '@/components/echarts/echarts.vue'
	import moment from 'moment'
	export default {
		mixins: [commonMixin],
		data() {
			return {
				contents: [],
				empty: false,
				query: {
					offset: 0,
					limit: 1000,
					strategyid:'',
					start: moment().startOf('year').format('YYYY-MM-DD'),
					end: moment().format('YYYY-MM-DD')
				},
				option: {
					notMerge: true,
					tooltip: {
						trigger: 'axis',
						positionStatus: true,
						formatterStatus: true, // 自定义变量：是否格式化tooltip，设置为false时下面三项均不起作用
						formatterUnit: '元', // 自定义变量：数值后面的单位
						formatFloat2: true, // 自定义变量：是否格式化为两位小数
						formatThousands: true // 自定义变量：是否添加千分位
					},
					legend: {
						data: ['盈利'],
						left: '10%'
					},
					grid: {
						left: '3%',
						right: '5%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: ['周一', '周二', '周三', '周四', '周五'],
						axisLine: {
							onZero: true
						},
						splitLine: {
							show: false
						},
						splitArea: {
							show: false
						}
					}],
					yAxis: [{
						type: 'value',
						axisLabel: {
							formatter: '{value}￥'
						}
					}],
					series: [{
							type: 'line',
							data: [220, 182, 191, -234, 290],
							yAxisIndex: 0,
						},
						{
							name: '盈利',
							type: 'bar',
							data: [{
									value: 220,
									itemStyle: {
										normal: {
											barBorderRadius: [3, 3, 0, 0],
											color: "red"
										},
									},
								},
								{
									value: 182,
									itemStyle: {
										normal: {
											barBorderRadius: [3, 3, 0, 0],
											color: "blue"
										},
									},
								},
								{
									value: -234,
									itemStyle: {
										normal: {
											barBorderRadius: [0, 0, 3, 3],
											color: "green"
										},
									},
								}
							],
						}
					]
				}
			};
		},
		components: {
			Echarts,
		},
		async onShow() {
			this.list = []
			this.query.page = 1
			await this.loadData();
		},
		async onReachBottom() {
			if (!this.isLastPage) {
				this.query.page += 1
				await this.loadData()
			}
		},
		async onPullDownRefresh() {
			this.list = []
			this.query.page = 1
			await this.loadData();
		},

		methods: {
			...mapActions('Trading', ['getStrategy', 'getAnalysisReport']),
			async loadData() {
				console.log(123)
				try {
					const res = await this.getAnalysisReport(this.query);
					uni.stopPullDownRefresh();
					this.empty = (res.data.count == 0)
					if (res.data && res.data.count > 0) {
						this.contents = res.data.rows.map(item => {
							return {
								...item,
								risk: item.trading_plan.risk,
								name: item.trading_plan.name,
								code: item.trading_plan.code,
								symbol: item.trading_plan.symbol,
								plan_id: item.trading_plan.id,
								strategy_title: item.trading_plan.strategy.title
							}
						});
						console.log(this.contents)
					} else {
						this.$msg(data.errMsg);
						this.contents = [];
					}
				} catch (e) {
					uni.stopPullDownRefresh();
					console.log(e);
				}
			}
		}
	};
</script>

<style lang='scss'>
	page {
		padding: 0;
		margin: 0;
		background: #EEF2F5;
		height: 100%;
	}

	.container {
		width: 100%;
		padding: 0;
		margin: 0;
		background: #EEF2F5;
		height: 100%;
	}
</style>
