<template>
	<view class="container">
		<view class="pay-group">
			<view class="header">
				<text class="title">盈利<text class="count">共 0 个</text></text>
				<text class="title">亏损<text class="count">共 0 个</text></text>
				<text class="title">风险<text class="count">共 4% </text></text>
			</view>
			<view class="item" v-for="(item,index) in plan_list" :key="index">
				<view class="top">
					<view class="stock" @click="navTo(item.id)">{{item.name}} ({{item.code}})</view>
					<view class="opt">
						<switch :checked="item.status==1" style="transform:scale(0.7);" />
						<icon type="cancel" size="26" />
					</view>
				</view>
				<view class="center">
					<view class="s-row row-amount">
						<view class="col">{{item.exec_start_date | moment("MM/DD")}} - {{item.exec_end_date | moment("MM/DD")}}</view>
						<view class="col">优先级: {{item.priority | formatPriority}}</view>
					</view>
					<view class="s-row row-title">
						<view class="col">入场</view>
						<view class="col">止损</view>
						<view class="col">止赢</view>
					</view>
					<view class="s-row row-amount">
						<view class="col">{{item.plan_price | fixed}}</view>
						<view class="col">
							{{item.stop_loss | fixed}}
							<i class="stop_loss">-{{stop_loss_rate(item) | fixed}}</i>
						</view>
						<view class="col">
							{{item.take_profit | fixed}}
							<i class="take_profit">{{take_profit_rate(item) | fixed}}</i>
						</view>
					</view>
					<view class="s-row row-title">
						<view class="col">数量</view>
						<view class="col">益损比</view>
						<view class="col">风险额</view>
					</view>
					<view class="s-row row-amount">
						<view class="col">{{item.plan_volume | fixed}}</view>
						<view class="col">{{profitLostRate(item) | fixed}}</view>
						<view class="col">{{item.risk | fixed}}</view>
					</view>
					<view class="s-row row-title">
						<view class="col">说明</view>
					</view>
					<view class="s-row row-amount">
						<view class="col">
							{{item.comment}}
						</view>
					</view>
				</view>
			</view>
			<view class="empty">
				暂无
			</view>
		</view>
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
	export default {
		mixins: [commonMixin],
		data() {
			return {
				plan_list: [],
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
			formatNum(v) {
				return parseFloat(v).toFixed(2);
			},
		},
		onShow() {
			this.getList()
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
			async getList() {
				const res = await this.getPlanList();
				console.log(res);
				if (res.data) {
					this.plan_list = res.data.rows;
				} else {
					this.$msg(data.errMsg);
					this.plan_list = [];
				}
			},
			navTo(id) {
				uni.navigateTo({
					url: '/pages/trading-detail/detail-list?plan_id=' + id
				})
			},
			stop_loss_rate(item) {
				const {
					plan_price,
					stop_loss
				} = item;
				if (plan_price && stop_loss) {
					return (Math.abs(plan_price - stop_loss) / plan_price * 100).toFixed(2);
				}
			},
			take_profit_rate(item) {
				const {
					plan_price,
					take_profit
				} = item;
				if (plan_price && take_profit) {
					return (Math.abs(take_profit - plan_price) / plan_price * 100).toFixed(2);
				}
			},
			profitLostRate(item) {
				const {
					plan_price,
					stop_loss,
					take_profit
				} = item;
				if (plan_price && stop_loss && take_profit) {
					return (Math.abs(take_profit - plan_price) / Math.abs(plan_price - stop_loss) * 100).toFixed(2);
				}
			},
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

	.pay-group {
		width: 100%;
		margin-bottom: 40upx;

		.header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			.title {
				font-size: $font-md;
			}

			.count {
				margin-left: 20upx;
				font-size: $font-sm;
				color: $font-color-light;
			}

			.add {
				font-size: $font-md;
				color: $font-color-spec;
			}
		}

		.empty {
			margin: 20upx 0upx;
			width: 100%;
			height: 180upx;
			line-height: 180upx;
			background: $uni-color-subbg;
			border-radius: 20upx;
			text-align: center;
			font-size: $font-md;
		}

		.item {
			margin: 20upx 0upx;
			width: 100%;
			padding: 20upx;
			text-align: left;
			font-size: $font-md;
			display: flex;
			flex-direction: column;
			background-color: #FFFFFF;
			border: 1px solid #cccccc;
			border-radius: 4px;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

			.top {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 30upx;

				.stock {
					font-weight: bold;
				}

				.opt {
					display: flex;
					flex-direction: row;
					align-items: center;
				}
			}

			.center {
				.s-row {
					display: flex;
					align-items: center;

					.col {
						flex: 1;
						padding: 4upx 0 10upx 0;
					}

					.take_profit {
						font-size: $font-xsm;
						color: red;
					}

					.stop_loss {
						font-size: $font-xsm;
						color: green;
					}
				}

				.row-title {
					font-size: $font-base;
					font-weight: normal;
					color: $font-color-light;
				}

				.row-amount {
					font-size: $font-base;
					font-weight: normal;
					color: $font-color-dark;
				}
			}
		}
	}
</style>
