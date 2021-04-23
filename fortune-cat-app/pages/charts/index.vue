<template>
	<view class="container">
		<view class="info">
			<view class="col">
				<text class="sub">交易次数</text>
				<text class="t">{{total_count }}次</text>
			</view>
			<view class="col">
				<text class="sub">胜率</text>
				<text class="t">{{winRate | fixed(2,'%') }}</text>
			</view>
			<view class="col">
				<text class="sub">盈亏比</text>
				<text class="t">{{ profitRate | fixed }}</text>
			</view>
		</view>
		<br/>
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
				total_count:0,
				winRate:0.0,
				profitRate:0.0,
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
		filters: {
			formatRate(v) {
				if (v <= 0) {
					return 'green'
				} else {
					return 'red';
				}
			}
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
						let failCount = 0;
						let lostProfit = 0.0;
						let winProfit = 0.0;
						res.data.rows.map(item => {
							let barBorderRadius = [0, 0, 0, 0];
							let color = "red";
							if(parseFloat(item.profit) < 0){
								color="green";
								failCount = failCount + 1;
								lostProfit = lostProfit + Math.abs(parseFloat(item.profit));
							}else{
								winProfit = winProfit + parseFloat(item.profit);
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
						this.total_count = xAxis.length;
						this.winRate = this.rate((this.total_count-failCount) ,this.total_count);
						this.profitRate = this.rate(winProfit,lostProfit) / 100;
						this.option = this.createOpition(xAxis,seriesData,riskData);
					} else {
						this.$msg(data.errMsg);
					}
				} catch (e) {
					uni.stopPullDownRefresh();
					console.log(e);
				}
			},
			rate(profit, total) {
				if (!profit) return 0;
				if (!total) return 0;
				return parseFloat(profit) / parseFloat(total) * 100;
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
	.info {
		display: flex;
		justify-content: space-between;
		padding: 5upx 20upx 5upx 20upx;
	
		.col {
			display: flex;
			flex-direction: column;
	
			.t {
				display: block;
				height: 50upx;
				line-height: 50upx;
			}
	
			.rate {
				font-size: $font-xl;
				color: $font-color-red;
			}
		}
	}
</style>
