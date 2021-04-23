<template>
	<view class="container">
		<echarts :option="option" style="height: 600px; width: 100%;"></echarts>
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
				empty: false,
				query: {
					offset: 0,
					limit: 1000,
					strategyid:'',
					start: moment().startOf('year').format('YYYY-MM-DD'),
					end: moment().format('YYYY-MM-DD')
				},
				option:{}
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
						const xAxis = [];
						const seriesData = [];
						const riskData = [];
						res.data.rows.map(item => {
							let barBorderRadius = [0, 0, 0, 0];
							let color = "red";
							if(parseFloat(item.profit) < 0){
								color="green";
							}
							xAxis.push(item.trading_plan.name);
							seriesData.push({
									value: parseFloat(item.profit),
									itemStyle: {
										normal: {
											barBorderRadius,
											color
										},
									},
								});
							riskData.push(-(item.trading_plan.risk));
						});
						console.log(xAxis,seriesData,riskData);
						this.option = this.createOpition(xAxis,seriesData,riskData);
					} else {
						this.$msg(data.errMsg);
					}
				} catch (e) {
					uni.stopPullDownRefresh();
					console.log(e);
				}
			},
			createOpition(xData,seriseData,riskData){
				return {
					notMerge: true,
					tooltip: {
						trigger: 'axis',
						positionStatus: true,
						formatterStatus: true, // 自定义变量：是否格式化tooltip，设置为false时下面三项均不起作用
						formatterUnit: '￥', // 自定义变量：数值后面的单位
						formatFloat2: true, // 自定义变量：是否格式化为两位小数
						formatThousands: true // 自定义变量：是否添加千分位
					},
					legend: {
						data: ['盈利','风险额'],
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
						data: xData,
						axisLabel : {
						          show: true,
								  rotate: 90
						      },
					}],
					yAxis: [{
						type: 'value',
						axisLabel: {
							formatter: '{value}￥'
						}
					}],
					series: [{
							name: '盈利',
							type: 'bar',
							data: seriseData,
							yAxisIndex: 0,
						},
						{
							name: '风险额',
							type: 'line',
							data: riskData,
							yAxisIndex: 0,
						}
					]
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
