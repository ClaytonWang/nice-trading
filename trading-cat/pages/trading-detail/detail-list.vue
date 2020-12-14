<template>
	<view class="container">
		<!-- 列表 -->
		<view class="coin-section m-t">
			<empty v-if="detial_list.length == 0" text="暂无订单记录" mode="data" margin-top="200"></empty>
			<view class="block little-line" v-for="(item,index) in detial_list" :key="index">
				<view class="s-row">
					<view class="col">
						<text class="coin buy" >买入</text>
						<text class="coin buy">南极人(600010)</text>
					</view>
					<view class="col r light"></view>
				</view>
				<view class="s-row">
					<view class="col subtitle row-title">成交价</view>
					<view class="col subtitle row-title">成交量</view>
					<view class="col subtitle row-title">成交额</view>
				</view>
				<view class="s-row">
					<view class="col subtitle row-amount">20.12</view>
					<view class="col subtitle row-amount">1000</view>
					<view class="col subtitle row-amount">20120</view>
				</view>
				<view class="s-row">
					<view class="col subtitle row-title">时间</view>
					<view class="col subtitle row-title">佣金</view>
					<view class="col subtitle row-title">税费</view>
				</view>
				<view class="s-row">
					<view class="col subtitle row-amount">2020/10/11</view>
					<view class="col subtitle row-amount">5</view>
					<view class="col subtitle row-amount">6</view>
				</view>
				<view class="s-row">
					<view class="col subtitle row-title">操作备忘</view>
					<view class="col subtitle row-title">买入评级</view>
					<view class="col subtitle row-amount">60%</view>
				</view>
				<view class="s-row">
					<view class="col subtitle row-amount">悄民顶级sdffsfd霜奇才大规模另</view>
				</view>
			</view>
			<view class="block little-line">
				<view class="s-row">
					<view class="col">
						<text class="coin sell" >卖出</text>
						<text class="coin sell">南极人(600010)</text>
					</view>
					<view class="col r light">
					</view>
				</view>
				<view class="s-row">
					<view class="col subtitle row-title">成交价</view>
					<view class="col subtitle row-title">成交量</view>
					<view class="col subtitle row-title">成交额</view>
				</view>
				<view class="s-row">
					<view class="col subtitle row-amount">20.12</view>
					<view class="col subtitle row-amount">1000</view>
					<view class="col subtitle row-amount">20120</view>
				</view>
				<view class="s-row">
					<view class="col subtitle row-title">时间</view>
					<view class="col subtitle row-title">佣金</view>
					<view class="col subtitle row-title">税费</view>
				</view>
				<view class="s-row">
					<view class="col subtitle row-amount">2020/10/11</view>
					<view class="col subtitle row-amount">5</view>
					<view class="col subtitle row-amount">6</view>
				</view>
				<view class="s-row">
					<view class="col subtitle row-title">操作备忘</view>
				</view>
				<view class="s-row">
					<view class="col subtitle row-amount">悄民顶级sdffsfd霜奇才大规模另</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {uniPopup, uniIcons} from '@dcloudio/uni-ui'
	import {commonMixin} from '@/common/mixin/mixin.js'
	import empty from '../../components/empty.vue'
	export default {
		components: {uniPopup, uniIcons,empty},
		mixins: [commonMixin],
		data() {
			return {
				detial_list:[]
			};
		},
		onShow(){
			this.getList();
		},
		onReachBottom(){
		},
		onPullDownRefresh() {
		},
		onNavigationBarButtonTap(e) {
			let $this = this;
			uni.showActionSheet({
			    itemList: ['添加操作详情'],
			    success: function (res) {
			        let i = res.tapIndex
					uni.navigateTo({
						url: "/pages/trading-detail/add-detail?name=南极人&code=600010&symbol=sh_600010&plan_id=1"
					})
			    },
			    fail: function (res) {
			    }
			});
		},
		methods: {
			...mapActions('Trading', ['getDetailList']),
			async getList() {
				const res = await this.getDetailList(1);
				console.log(res);
				if (res && res.data) {
					this.detial_list = res.data.rows;
				} else {
					this.detial_list = [];
				}
			},
		}
	}
</script>

<style lang='scss' scoped>
	.container{
		width: 100%;
		padding: 0upx 0upx;
	}
	.buy{
		color: $font-color-red;
	}
	.sell{
		color: $font-color-blue;
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
	.filter{
		display: flex;
		flex-direction: column;
		padding: 40upx 30upx 30upx 30upx;
		width: 100%;
		.filter-title{
			font-size: $font-md;
			padding-bottom: 20upx;
			padding-top: 30upx;
		}
		.filter-active{
			border-width: 2rpx;
			border-color: $font-color-blue;  
			border-style: solid;
			color: $font-color-blue;
		}
		.filter-pay{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			width: 100%;
			.filter-pay-item{
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
			.placeholder{
				width: 30%;
				height: 0;
			}
		}
	}
	.coin-section{
		background: #fff;
		.block{
			padding: 20upx 0;
			.s-row{
				display:flex;
				align-items:center;
				padding: 10upx 30upx 0upx 30upx;
				.subtitle{
					padding: 4upx 0 10upx 0;
				}
				.col{
					font-size: $font-base;
					color: $font-color-dark;
					flex:1;
					.coin{
						font-weight: bold;
						padding-right: 10upx;
					}
					.status{
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
				.light{
					font-weight: bold;
					font-size: $font-lg;
					color: $font-color-dark;
				}
				.r{
					text-align: right;
				}
				.row-title{
					font-size: $font-base;
					font-weight: normal;
					color: $font-color-light;
				}
				.row-amount{
					font-size: $font-base;
					font-weight: normal;
					color: $font-color-dark;
				}
				.gt{
					font-weight: 10;
				}
			}
		}
	}
</style>
