<template>
	<view class="container">
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @up="upCallback" @down="downCallback">
			<!-- 列表 -->
			<PlanItem :item="planInfo" @delPlan="delelePlan"></PlanItem>
			<view class="coin-section m-t">
				<template v-for="(item,index) in planInfo.trading_details">
					<DetailItem :item="item" :name="planInfo.name" :code="planInfo.code" @delDetail="deleteDetail" :key="index"></DetailItem>
				</template>
			</view>
		</mescroll-body>
		<wyb-loading ref="loading" />
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
	} from '@dcloudio/uni-ui';
	import {
		commonMixin
	} from '@/common/mixin/mixin.js';
	import wybLoading from '@/components/wyb-loading/wyb-loading.vue';
	import PlanItem from '@/components/plan-list-item.vue';
	import DetailItem from '@/components/detail-list-item.vue';
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
		components: {
			uniPopup,
			uniIcons,
			wybLoading,
			PlanItem,
			DetailItem
		},
		mixins: [commonMixin,MescrollMixin],
		filters: {
			trading_type(v) {
				if (v === 'BUY') {
					return "买入";
				} else {
					return "卖出";
				}
			}
		},
		data() {
			return {
				mescroll: null,
				planInfo: {},
				plan_id: '',
			};
		},
		onLoad(options) {
			this.plan_id = options.plan_id;
			this.getPlanInfo(this.plan_id);
		},
		onShow() {
			this.getPlanInfo(this.plan_id);
		},
		onNavigationBarButtonTap(e) {
			let $this = this;
			uni.showActionSheet({
				itemList: ['添加操作详情'],
				success: function(res) {
					let i = res.tapIndex
					uni.navigateTo({
						url: `/pages/trading-detail/add-detail?name=${$this.planInfo.name}&code=${$this.planInfo.code}&symbol=${$this.planInfo.symbol}&plan_id=${$this.plan_id}`
					})
				},
				fail: function(res) {}
			});
		},
		methods: {
			...mapActions('Trading', ['getPlan', 'addComents', 'deleteComment']),
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			showOpration(item) {
				this.$set(item, 'isSHowOp', !item.isSHowOp);
			},
			editDetail(id) {
				uni.navigateTo({
					url: `/pages/trading-detail/add-detail?detail_id=${id}`
				})
			},
			async getPlanInfo(id) {
				const res = await this.getPlan(id);
				if (res && res.data) {
					this.planInfo = res.data;
				}
				this.mescroll.endBySize(1, 1);
			},
			async upCallback(page) {
				await this.getPlanInfo(this.plan_id);
			},
			delComment(id) {
				uni.showModal({
					content: `确定删除吗？`,
					showCancel: true,
					success: async (res) => {
						if (res.confirm) {
							const resp = await this.deleteComment(id);
							if (resp && resp.data) {
								this.$msg('删除成功！');
								await this.getPlanInfo(this.plan_id);
							} else {
								this.$msg(resp.errMsg);
							}
						}
					}
				});
			},
			async deleteDetail(id){
				await this.upCallback();
			},
			delelePlan(){
				uni.navigateTo({
					url: `/pages/trading-plan/plan-list`
				})
			}
		}
	}
</script>

<style lang='scss' scoped>
	.container {
		width: 100%;
		padding: $page-row-spacing;

		.coments-box {
			height: 100%;
			background-color: #FFFFFF;
			padding: 10upx 20upx 50upx 20upx;

			.cmt-tool-bar {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}

			.label {
				margin: 20upx 0;
			}
		}
	}

	.buy {
		color: $font-color-red;
	}

	.sell {
		color: $font-color-blue;
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

	.coin-section {
		background: #fff;

		.block {
			padding: 20upx 0;

			.s-row {
				display: flex;
				align-items: center;
				padding: 10upx 30upx 0upx 30upx;

				.subtitle {
					padding: 4upx 0 10upx 0;
				}

				.col {
					font-size: $font-base;
					color: $font-color-dark;
					flex: 1;

					.coin {
						font-weight: bold;
						padding-right: 10upx;
					}

					.status {
						font-size: $font-base;
						font-weight: 10;
					}
				}

				.coinLogo {
					width: 36upx;
					height: 36upx;
					margin-right: 8px;
					display: inline-block;
					vertical-align: middle;
					float: left;
				}

				.light {
					font-weight: bold;
					font-size: $font-lg;
					color: $font-color-dark;
				}

				.r {
					text-align: right;
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

				.gt {
					font-weight: 10;
				}
			}
		}
	}
</style>
