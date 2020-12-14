<template>
	<view class="container">
		<!-- 列表 -->
		<view class="coin-section m-t">
			<empty v-if="detial_list.length == 0" text="暂无订单记录" mode="data" margin-top="200"></empty>
			<view class="block little-line" v-for="(item,index) in detial_list" :key="index">
				<view class="s-row">
					<view class="col">
						<text class="coin" :class="item.trading_type==='BUY'?'buy':'sell'" >{{item.trading_type | trading_type}}</text>
						<text class="coin" :class="item.trading_type==='BUY'?'buy':'sell'">{{name}}({{code}})</text>
					</view>
					<view class="col r light"></view>
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
					<view class="col subtitle row-title">操作备忘</view>
					<!-- <view class="col subtitle row-title">{{item.trading_type==1?'买入评级':'卖出评级'}}</view> -->
					<view class="col subtitle row-amount"></view>
				</view>
				<view class="s-row">
					<view class="col subtitle row-amount">{{item.comment}}</view>
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
		filters:{
			trading_type(v){
				if(v==='BUY'){
					return "买入";
				}else{
					return "卖出";
				}
			}
		},
		data() {
			return {
				detial_list:[],
				plan_id:'',
				code:'',
				name:'',
				symbol:''
			};
		},
		onLoad(options){
			this.plan_id = options.plan_id;
			this.code = options.code;
			this.name = options.name;
			this.symbol = options.symbol;
			this.getList(options.plan_id);
		},
		onShow() {
			this.getList(this.plan_id);
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
						url: `/pages/trading-detail/add-detail?name=${$this.name}&code=${$this.code}&symbol=${$this.symbol}&plan_id=${$this.plan_id}`
					})
			    },
			    fail: function (res) {
			    }
			});
		},
		methods: {
			...mapActions('Trading', ['getDetailList']),
			async getList(plan_id) {
				const res = await this.getDetailList(plan_id);
				console.log(res);
				if (res && res.data) {
					this.detial_list = res.data.rows;
				} else {
					this.detial_list = [];
				}
			}
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
