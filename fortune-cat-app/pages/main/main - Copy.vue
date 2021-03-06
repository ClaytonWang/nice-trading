<template>
	<view>
		<view class="header">
			<view class="side">
				<view class="navbar">
					<view class="nav-item current" >报表</view>
				</view>
				<view class="menu">
					<image src="../../static/icon-filter.png" @click="filter"></image>
				</view>
			</view>
		</view>
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @up="upCallback" @down="downCallback">
			<wyb-table ref="table" :headers="headers" :contents="contents" :format-col="formatcol" />
		</mescroll-body>
		<uni-popup ref="popup" type="top">
			<view class="filter-wrapper">
				<view class="filter">
					<view class="filter-title">时间</view>
					<view class="filter-pay">
						<text class="filter-pay-item" v-for="(v, k) in timeFilters" :key="k" @click="filter(undefined, k)" :class="{'filter-active': page.timeFilter == v.id}" >{{v.label}}</text>
					</view>
					<view class="filter-title">战法</view>
					<view class="filter-pay">
						<text class="filter-pay-item" v-for="(v, k) in strategyMap" :key="k" @click="filter(undefined, k)" :class="{'filter-active': page.strategyFilter == k}" >{{v.label}}</text>
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
	import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue";
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		commonMixin
	} from '@/common/mixin/mixin.js'
	import wybTable from '@/components/wyb-table/wyb-table.vue'
	import moment from 'moment'
	export default {
		mixins: [MescrollMixin, commonMixin], // 使用mixin (在main.js注册全局组件)
		components: {
			wybTable,
			MescrollBody,
		},
		data() {
			return {
				strategyMap:[],
				sideIndex: 0,
				timeFilterIndex: 0,
				timeFilters: [{
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
					offset: 1,
					limit: 100,
					timeFilter: undefined,
					strategyFilter:undefined,
					start: moment().day(-6),
					end: moment(),
				},
				downOption: {
					auto: false // 不自动加载 (mixin已处理第一个tab触发downCallback)
				},
				upOption: {
					auto: false, // 不自动加载
					noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 100 // 每页数据的数量
					},
					empty: {
						tip: '~ 空空如也 ~'
					}
				},
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
				contents: [],
			}
		},
		onLoad() {},
		onShow() {
			uni.$on("refresh", (res) => {
				this.mescroll.resetUpScroll()
			})
		},
		onUnload() {
			uni.$off("refresh", (res) => {})
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			...mapActions('Trading', ['getAnalysisReport']),
			reset(){
				this.page.filterTime = undefined
				this.page.strategyFilter = undefined
			},
			search(){
				this.page.offset = 1
				this.contents = []
				this.loadingStatus = 'loadmore'
				this.mescroll.resetUpScroll();
				this.$refs.popup.close();
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			mescrollInit() {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调 */
			downCallback() {
				this.mescroll.resetUpScroll();
			},
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			async upCallback(page) {
				console.log(page.num)
				if (page.num <= 1) {
					this.contents = [];
				}
				this.page.offset = page.num
				console.log(this.page.page)
				switch (this.page.filterTime.id) {
					case '0day':
						this.page.start = moment().subtract(1, "weeks").format("YYYY-MM-DD");
						this.page.end = moment().endOf('week').format('YYYY-MM-DD');
						break;
					case '7day':
						this.page.start = moment().week(moment().week() - 1).startOf('week').format("YYYY-MM-DD");
						this.page.end = moment().week(moment().week() - 1).endOf('week').format("YYYY-MM-DD");
						break;
					case '30day':
						this.page.start = moment().month(moment().month() - 1).startOf('month').format("YYYY-MM-DD");
						this.page.end = moment().month(moment().month() - 1).endOf('month');
						break;
					case '365day':
						this.page.start = moment().startOf('year').format('YYYY-MM-DD');
						this.page.end = moment().format('YYYY-MM-DD');
						break;
				}
				const res = await this.getAnalysisReport(this.page);
				if (res.data && res.data.count > 0) {
					this.mescroll.endSuccess(res.data.rows.length)
					this.contents = res.data.rows.map(item => {
						return {
							...item,
							risk: item.trading_plan.risk,
							name: item.trading_plan.name,
							strategy_title: item.trading_plan.strategy.title
						}
					});
				} else {
					this.$msg(data.errMsg);
					this.contents = [];
					this.mescroll.endErr();
				}
			},
			//顶部tab点击
			filterTabClick(index) {
				this.timeFilterIndex = index;
				this.page.filterTime = this.timeFilters[index]
				this.mescroll.resetUpScroll()
			},
		}
	}
</script>

<style lang="scss">
	image {
		width: 100%;
		vertical-align: bottom;
		will-change: transform
	}

	.header {
		z-index: 9900;
		position: fixed;
		top: --window-top;
		left: 0;
		height: 180upx;
		background: #ffffff;
		width: 100%;
	}

	.navbar {
		display: flex;
		height: 40px;
		background: #fff;
		position: relative;
		margin: 0 30upx 20upx 30upx;
		padding-bottom: 30upx;

		.nav-item {
			height: 100%;
			font-size: 30upx;
			color: $font-color-light;
			margin-right: 15px;
			display: flex;
			align-items: flex-end;

			&.current {
				color: $font-color-dark;
				font-size: 40upx;
				font-weight: bold;
			}
		}
	}
	.filter-wrapper{
		background-color: #ffffff;
	}
	.btn-wrapper{
		display: flex;
		flex-direction: row;
		padding-top: 30upx;
		.btn{
			width: 50%;
			height: 90upx;
			line-height: 90upx;
			text-align: center;
			border-radius: 0upx;
			border: 0upx;
			background: #F8F8F8;
			font-size: $font-lg;
		}
		.submit{
			color: #ffffff;
			background-color: $uni-color-blue;
		}
	}
	.side{
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		.menu{
			image {
				width: 20px;
				height: 20px;
				margin: 0upx 30upx 0upx 10upx;
			}
		}
	}
	
	.timeNavbar {
		display: flex;
		height: 30px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0, 0, 0, .06);
		position: relative;
		z-index: 10;
		overflow-x: scroll;
		padding-left: 30upx;
		padding-right: 30upx;

		.nav-item {
			height: 100%;
			font-size: 15px;
			color: $font-color-dark;
			margin-right: 15px;
			position: relative;

			&.current {
				color: $uni-color-blue;

				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 100%;
					height: 0;
					border-bottom: 2px solid $uni-color-blue;
				}
			}
		}
	}
</style>
