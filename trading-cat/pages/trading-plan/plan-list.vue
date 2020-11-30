<template>
	<view class="container">
		<view class="pay-group">
			<view class="header">
				<text class="title">盈利<text class="count">共 0 个</text></text>
				<text class="title">亏损<text class="count">共 0 个</text></text>
			</view>
			<view class="item">
				<view class="top">
					<view class="stock" @click="navTo()">南极人(600010)</view>
					<view class="opt">
						<switch checked="1" style="transform:scale(0.7);" />
						<icon type="cancel" size="26" />
					</view>
				</view>
				<view class="center">
					<view class="s-row row-title">
						<view class="col">入场</view>
						<view class="col">止损</view>
						<view class="col">止赢</view>
					</view>
					<view class="s-row row-amount">
						<view class="col">100.12</view>
						<view class="col">
							100.12
							<i class="stop_loss">-6.12%</i>
						</view>
						<view class="col">
							110.28
							<i class="take_profit">16.12%</i>
						</view>
					</view>
					<view class="s-row row-title">
						<view class="col">盈亏比</view>
						<view class="col">执行日期</view>
						<view class="col">优先级</view>
					</view>
					<view class="s-row row-amount">
						<view class="col">200%</view>
						<view class="col">10/1 - 10/5</view>
						<view class="col">等待</view>
					</view>
					<view class="s-row row-title">
						<view class="col">说明</view>
					</view>
					<view class="s-row row-amount">
						<view class="col">
							据成都市卫健委消息，11月29日上午，成都市获悉重庆市SK海力士公司一韩国籍员工于11月26日自重庆来蓉，由双流国际机场搭乘航班飞往韩国，该旅客11月28日在韩国诊断为无症状感染者。目前，成都已完成重庆协查出境无症状感染者相关人员筛查，核酸检测均为阴性。详细
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
	export default {
		data() {
			return {}
		},
		onShow() {
			//this.getList()
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
			getList() {},
			navTo() {
				uni.navigateTo({
					url: '/pages/trading-detail/detail-list'
				})
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
				.stock{
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
					.take_profit{
						font-size: $font-xsm;
						color: red;
					}
					.stop_loss{
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
