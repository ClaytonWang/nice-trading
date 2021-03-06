<template>
	<view class="container">
		<view class="total-box">
			<view class="title">总收益</view>
			<view class="asset">
				<view>
					<text class="cny"
						:class="totoalProfit.rate > 0 ?'red':'green'">{{totoalProfit.profit | fixed}}</text>
					<b :class="totoalProfit.rate > 0 ?'red':'green'">{{totoalProfit.rate | fixed(2,'%')}}</b>
				</view>
			</view>
			<view class="operat">
				<view class="col">
					<image src="../../static/icon-deposit-history.png" mode="widthFix" @click="navT('pages/trading-plan/plan-list')"></image>
					<text>交易计划</text>
				</view>
				<view class="col">
					<image src="../../static/icon-deposit-ing.png" mode="widthFix"></image>
					<text>反思笔记</text>
				</view>
				<view class="col">
					<image src="../../static/icon-deposit-draw.png" mode="widthFix"></image>
					<text>战法策略</text>
				</view>
			</view>
		</view>
		<view class="ing-box">
			<view class="title">{{page.timeFilter.label}}{{page.strategyFilter.title}}战法</view>
			<view class="no-data" v-if="empty">
				没有数据
			</view>
			<view class="list-item" v-for="(item, i) in contents" :ket="i"
				@click="navTo(item.id,item.name,item.code,item.symbol)">
				<view class="title little-line">
					<view class="tl">
						<text class="name">{{item.name}}</text>
						<view class="tags">
							<view class="item">{{item.code}}</view>
						</view>
					</view>
					<view class="tr">
						<view class="period" :class="rate(item.profit,item.total_amount) | formatRate">
							{{rate(item.profit,item.total_amount) |fixed(2,'%') }}</view>
					</view>
				</view>
				<view class="info">
					<view class="col">
						<text class="sub">总额</text>
						<text class="t">{{item.total_amount | fixed }}</text>
					</view>
					<view class="col">
						<text class="sub">风险</text>
						<text class="t">{{item.risk | fixed }}</text>
					</view>
					<view class="col">
						<text class="sub">建仓</text>
						<text class="t">{{item.start_date | moment("YY/MM/DD")}}</text>
					</view>
					<view class="col">
						<text class="sub">清仓</text>
						<text class="t">{{item.end_date | moment("YY/MM/DD")}}</text>
					</view>
					<view class="col">
						<text class="sub">收益</text>
						<text class="t"
							:class="rate(item.profit,item.total_amount) | formatRate">{{item.profit | fixed }}</text>
					</view>
				</view>
				<view class="info">
					<view class="col">
						<text class="sub">战法</text>
						<text class="t">{{item.strategy_title}}</text>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="top">
			<view class="filter-wrapper">
				<view class="filter">
					<view class="filter-title">时间</view>
					<view class="filter-pay">
						<text class="filter-pay-item" v-for="(v, k) in timeFiltersMap" :key="k"
							@click="filter(v,undefined)"
							:class="{'filter-active': page.timeFilter.id == v.id}">{{v.label}}</text>
					</view>
					<view class="filter-title">战法</view>
					<view class="filter-pay">
						<text class="filter-pay-item" v-for="(v, k) in strategyMap" :key="k"
							@click="filter(undefined, v)"
							:class="{'filter-active': page.strategyFilter.id == v.id}">{{v.title}}</text>
					</view>
				</view>
				<view class="btn-wrapper">
					<view class="btn" @click="reset">重置</view>
					<view class="btn submit" @click="search">筛选</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		uniPopup,
		uniIcons
	} from '@dcloudio/uni-ui'
	import {
		commonMixin
	} from '@/common/mixin/mixin.js'
	import moment from 'moment'

	export default {
		components: {
			uniPopup,
			uniIcons
		},
		mixins: [commonMixin],
		data() {
			return {
				contents: [],
				strategyMap: {},
				timeFiltersMap: [{
					label: '全部',
					id: 'ALL'
				}, {
					label: '本周',
					id: '0day'
				}, {
					label: '上周',
					id: '7day'
				}, {
					label: '上月',
					id: '30day'
				}, {
					label: '一年',
					id: '365day'
				}],
				page: {
					timeFilter: {
						label: '本周',
						id: '0day'
					},
					strategyFilter: {
						id: 'ALL',
						title: '全部'
					},
				},
				query: {
					offset: 0,
					limit: 1000,
					start: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
					end: moment().endOf('week').format('YYYY-MM-DD')
				},
				empty: false,
			};
		},
		onShow() {
			this.list = []
			this.query.page = 1
			this.loadData();
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
		filters: {
			formatRate(v) {
				if (v <= 0) {
					return 'green'
				} else {
					return 'red';
				}
			}
		},
		onNavigationBarButtonTap(e) {
			this.$refs.popup.open()
		},
		async onLoad(options) {
			const res = await this.getStrategy();
			if (res && res.data) {
				this.strategyMap = res.data.rows.map(e => {
					return {
						id: e.id,
						title: e.title
					}
				});
				this.strategyMap.unshift({
					id: 'ALL',
					title: '全部'
				})
			}
		},
		computed: {
			totoalProfit() {
				if (this.contents.length < 1) return 0;
				let total = 0;
				let profit = 0;
				for (let item of this.contents) {
					total = total + parseFloat(item.total_amount);
					profit = profit + parseFloat(item.profit);
				}
				return {
					rate: profit / total * 100,
					profit,
					total
				};
			}
		},
		methods: {
			...mapActions('Trading', ['getStrategy', 'getAnalysisReport']),
			rate(profit, total) {
				if (!profit) return 0;
				if (!total) return0;
				return parseFloat(profit) / parseFloat(total) * 100;
			},
			navTo(id, name, code, symbol) {
				uni.navigateTo({
					url: `/pages/trading-detail/detail-list?plan_id=${id}&name=${name}&code=${code}&symbol=${symbol}`
				})
			},
			navT(url){
				uni.navigateTo({
					url:url
				})
			},
			filter(time, strategy) {
				if (time) {
					this.page.timeFilter = time
					switch (time.id) {
						case '0day':
							this.query.start = moment().subtract(1, "weeks").format("YYYY-MM-DD");
							this.query.end = moment().endOf('week').format('YYYY-MM-DD');
							break;
						case '7day':
							this.query.start = moment().week(moment().week() - 1).startOf('week').format("YYYY-MM-DD");
							this.query.end = moment().week(moment().week() - 1).endOf('week').format("YYYY-MM-DD");
							break;
						case '30day':
							this.query.start = moment().month(moment().month() - 1).startOf('month').format("YYYY-MM-DD");
							this.query.end = moment().month(moment().month() - 1).endOf('month').format("YYYY-MM-DD");
							break;
						case '365day':
							this.query.start = moment().startOf('year').format('YYYY-MM-DD');
							this.query.end = moment().format('YYYY-MM-DD');
							break;
						case 'ALL':
							this.query.start = null;
							this.query.end = null;
							break;
					}
				}
				if (strategy) {
					this.page.strategyFilter = strategy
				}
			},
			reset() {
				this.page.filterTime = {
					label: '本周',
					id: '0day'
				}
				this.page.strategyFilter = {
					id: 'ALL',
					title: '全部'
				}
			},
			async search() {
				this.query.offset = 0
				this.contents = []
				await this.loadData()
				this.$refs.popup.close();
			},
			async loadData() {
				console.log(this.query);
				try{
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
								strategy_title: item.trading_plan.strategy.title
							}
						});
					} else {
						this.$msg(data.errMsg);
						this.contents = [];
					}
				} catch(e){
					uni.stopPullDownRefresh();
					console.log(e);
				}
			}
		}
	}
</script>

<style lang='scss'>
	.red {
		color: red !important;
	}

	.green {
		color: green !important;
	}

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

	.filter-wrapper {
		background-color: #ffffff;
	}

	.btn-wrapper {
		display: flex;
		flex-direction: row;
		padding-top: 30upx;

		.btn {
			width: 50%;
			height: 90upx;
			line-height: 90upx;
			text-align: center;
			border-radius: 0upx;
			border: 0upx;
			background: #F8F8F8;
			font-size: $font-lg;
		}

		.submit {
			color: #ffffff;
			background-color: $uni-color-blue;
		}
	}

	.filter {
		display: flex;
		flex-direction: column;
		padding: 40upx 30upx 30upx 30upx;
		width: 100%;

		.filter-title {
			font-size: $font-md;
			padding-bottom: 20upx;
			padding-top: 30upx;
		}

		.filter-active {
			border-width: 2rpx;
			border-color: $font-color-blue;
			border-style: solid;
			color: $font-color-blue;
		}

		.filter-pay {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			width: 100%;

			.filter-pay-item {
				display: block;
				width: 30%;
				background-color: $border-color-base;
				height: 70upx;
				line-height: 70upx;
				font-size: $font-sm;
				text-align: center;
				margin-top: 10upx;
				margin-bottom: 10upx;

			}

			.placeholder {
				width: 30%;
				height: 0;
			}
		}
	}

	.total-box {
		width: 100%;
		background: #5E7EEE;
		font-size: $font-base;
		padding: 30upx 15upx 170upx 15upx;
		color: #ffffff;
		text-align: center;
		position: relative;

		.title {
			padding-bottom: 10upx;
		}

		.cny {
			font-size: $font-xl;
			margin-right: 10upx;
		}

		.operat {
			position: absolute;
			left: 15upx;
			right: 15upx;
			margin-top: 40upx;
			height: 170upx;
			background-color: #ffffff;
			border-radius: 10upx;
			display: flex;
			justify-content: space-around;
			align-content: center;
			align-items: center;

			.col {
				image {
					width: 80upx;
				}

				text {
					display: block;
					color: #000000;
				}
			}
		}
	}

	.ing-box {
		width: 100%;
		padding: 50upx 15upx 15upx 15upx;

		.title {
			font-size: $font-lg;
			font-weight: bold;
			padding: 0upx;
		}
	}

	.no-data {
		background: #ffffff;
		height: 180upx;
		line-height: 180upx;
		text-align: center;
		border: 10upx;
	}

	.list-item {
		margin-top: 20upx;
		background: #ffffff;
		border-radius: 10upx;

		.title {
			padding-left: 20upx;
			height: 100upx;
			line-height: 100upx;
			display: flex;
			justify-content: space-between;

			.tl {
				display: flex;

				.name {
					font-size: $font-md;
					font-weight: bold;
				}

				.tags {
					height: 100upx;
					line-height: 100upx;
					display: flex;
					align-items: center;

					.item {
						font-size: $font-sm;
						font-weight: normal;
						height: 50upx;
						line-height: 50upx;
						padding-left: 10upx;
						padding-right: 10upx;
						background-color: rgb(234, 242, 252);
						margin-left: 20upx;
						color: #3B414E;
					}
				}
			}

			.tr {
				height: 100upx;
				line-height: 100upx;
				display: flex;
				align-items: center;

				.period {
					background-color: rgb(234, 242, 252);
					font-size: $font-base;
					color: $font-color-blue;
					font-weight: normal;
					text-align: center;
					width: 150upx;
					height: 60upx;
					line-height: 60upx;
					border-top-left-radius: 50upx;
					border-bottom-left-radius: 50upx;
				}
			}

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
	}
</style>
