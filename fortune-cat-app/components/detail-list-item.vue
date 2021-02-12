<template>
	<view class="block little-line" @longpress="showOpration(item)">
		<view class="s-row">
			<view class="col">
				<text class="coin" :class="item.trading_type==='BUY'?'buy':'sell'">{{item.trading_type | trading_type}}</text>
				<text class="coin" :class="item.trading_type==='BUY'?'buy':'sell'">{{name}}({{code}})</text>
			</view>
			<uni-icons v-if="!item.isSHowOp" type="list" size="22" @click="showOpration(item)"></uni-icons>
			<view class="col r light" v-show="item.isSHowOp">
				<uni-icons type="trash" color="red" style="margin-right: 30upx;" size="22" @click="del(item.id,name)"></uni-icons>
				<uni-icons type="compose" style="margin-left: 30upx;" size="22" @click="editDetail(item.id)"></uni-icons>
				<uni-icons type="redo" size="22" style="margin-left: 40upx;" @click="showOpration(item)"></uni-icons>
			</view>
		</view>
		<view class="s-row">
			<view class="col subtitle row-title">成交价</view>
			<view class="col subtitle row-title">成交量</view>
			<view class="col subtitle row-title">成交额</view>
		</view>
		<view class="s-row">
			<view class="col subtitle row-amount">{{item.trading_price | fixed}}</view>
			<view class="col subtitle row-amount">{{item.trading_volume | fixed}}</view>
			<view class="col subtitle row-amount">{{item.trading_volume * item.trading_price | fixed}}</view>
		</view>
		<view class="s-row">
			<view class="col subtitle row-title">时间</view>
			<view class="col subtitle row-title">佣金</view>
			<view class="col subtitle row-title">税费</view>
		</view>
		<view class="s-row">
			<view class="col subtitle row-amount">{{item.trading_date | moment("YY/MM/DD")}}</view>
			<view class="col subtitle row-amount">{{item.commission | fixed}}</view>
			<view class="col subtitle row-amount">{{item.stamp_tax | fixed}}</view>
		</view>
		<view class="s-row">
			<view class="col subtitle row-title">
				操作备忘
				<uni-icons type="plusempty" color="blue" size="20" @click="addComment(item.id)" style="margin-left: 15px;"></uni-icons>
			</view>
	
		</view>
		<view v-for="(cItem,cIndex) in item.comments" :key="cIndex">
			<view class="s-row">
				<view class="col subtitle row-title">
					{{cItem.created_at | moment("YYYY/MM/DD HH:mm")}}
				</view>
				<view class="col subtitle row-title" v-show="item.isSHowOp">
					<view class="s-row">
						<view class="col">
							<uni-icons type="trash" color="blue" size="20" @click="delComment(cItem.id)"></uni-icons>
						</view>
						<view class="col">
							<uni-icons type="compose" color="blue" size="20" @click="editComment(cItem.id,item.id,cItem.comment)"></uni-icons>
						</view>
					</view>
				</view>
			</view>
			<view class="s-row">
				<view class="col subtitle row-amount" style="white-space: pre-wrap;" v-html="cItem.comment"></view>
			</view>
		</view>
		<Comments ref="cmts" @added="addedCmt" />
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
	import Comments from '@/components/comments.vue';
	export default {
		components: {
			uniPopup,
			uniIcons,
			Comments
		},
		mixins: [commonMixin],
		props: ['name','code','item'],
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
			};
		},
		methods: {
			...mapActions('Trading', ['addComents', 'delDetailItem', 'deleteComment']),
			showOpration(item) {
				this.$set(item, 'isSHowOp', !item.isSHowOp);
			},
			editDetail(id) {
				uni.navigateTo({
					url: `/pages/trading-detail/add-detail?detail_id=${id}`
				})
			},
			async del(id) {
				uni.showModal({
					content: `确定删除吗？`,
					showCancel: true,
					success: async (res) => {
						if (res.confirm) {
							const resp = await this.delDetailItem(id);
							if (resp && resp.data) {
								this.$msg('删除成功！');
								this.$emit('delDetail',id);
							} else {
								this.$msg(resp.errMsg);
							}
						}
					}
				});
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
								let index = this.item.comments.findIndex((i)=>{
									return i.id==id;
								});
								this.item.comments.splice(index,1);
							} else {
								this.$msg(resp.errMsg);
							}
						}
					}
				});
			},
			addComment(id) {
				this.$refs.cmts.$emit('open',{
					cmt_id:'',
					trading_detail_id:id
				});
			},
			editComment(id, trading_detail_id, comment) {
				this.$refs.cmts.$emit('open',{
					cmt_id:id,
					comment,
					trading_detail_id
				});
			},
			addedCmt(cmt){
				this.item.comments.push(cmt)
			}
		}
	}
</script>

<style lang='scss' scoped>
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
