<template>  
    <view class="container">  
		<view class="pay-group">
			<view class="header">
				<text class="title">盈利<text class="count">共 0 个</text></text>
			</view>
			<view class="item item-bg-light">
				<view class="top">
					<view class="bank">南极人(600010)</view>
					<view class="opt">
						<switch checked="1" style="transform:scale(0.7);" color="rgb(255, 204, 51)"/>
						<view class="del"><icon type="cancel" size="26" color="#ffffff"/></view>
					</view>
				</view>
				<view class="center">
					<view class="row">
						<view class="nomarl">数量 1000</view>
						<view class="nomarl">单价 10.25</view>
					</view>
					<view class="row">
						<view class="nomarl">止损 100.12(-6.12%)</view>
						<view class="nomarl">止赢 110.28(12.11%)</view>
					</view>
					<view class="row">
						<view class="nomarl">损益比 60%</view>
						<view class="nomarl">执行日期 2020-10-1 -- 2020-10-5</view>
					</view>
					<view class="row">
						<button class="submit" @click="navTo()">确认</button>
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
		data(){
			return {
			}
		},
		onShow(){
			//this.getList()
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			let $this = this;
			uni.showActionSheet({
			    itemList: ['添加交易计划'],
			    success: function (res) {
			        let i = res.tapIndex
					uni.navigateTo({
						url: "/pages/trading-plan/add-plan"
					})
			    },
			    fail: function (res) {
			    }
			});
		},
		// #endif
        methods: {
			getList(){},
			navTo(){
				uni.navigateTo({
					url: '/pages/trading-detail/add-detail'
				})
			}
        }  
    }  
</script>  
<style lang='scss' scoped>
	page{
		background: $page-color-base;
	}
	.container{
		padding: $page-row-spacing;
		height: 100%;
	}
	.pay-group{
		width: 100%;
		margin-bottom: 40upx;
		.header{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.title{
				font-size: $font-md;
			}
			.count{
				margin-left: 20upx;
				font-size: $font-sm;
				color: $font-color-light;
			}
			.add{
				font-size: $font-md;
				color: $font-color-spec;
			}
		}
		.empty{
			margin: 20upx 0upx;
			width: 100%;
			height: 180upx;
			line-height: 180upx;
			background: $uni-color-subbg;
			border-radius: 20upx;
			text-align: center;
			font-size: $font-md;
		}
		.item-bg-Alipay{
			background: linear-gradient(left, rgba(55, 131, 217,0.7), rgba(55, 131, 217,1));
		}
		.item-bg-UnionPay{
			background: linear-gradient(left, rgba(255,0,0,0.7), rgba(255,0,0,1));
		}
		.item-bg-Wechat{
			background: linear-gradient(left, rgba(42, 189, 119,0.7), rgba(42, 189, 119,1));
		}
		.item-bg-light{
			background: linear-gradient(left, rgba(189, 187, 183, 0.7), rgba(189, 185, 184, 1.0));;
		}
		.item{
			margin: 20upx 0upx;
			padding: 30upx 30upx;
			width: 100%;
			border-radius: 20upx;
			text-align: left;
			font-size: $font-md;
			display: flex;
			flex-direction: column;
			color: #fff;
			.top{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 30upx;
				.opt{
					display: flex;
					flex-direction: row;
					align-items: center;
				}
				.del{
					padding-top: 14upx;
				}
			}
			.center{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}
			.name{
				display: flex;
				flex-direction: column;
				font-size: $font-base;
				.b{
					font-size: $font-xl;
					padding-top: 10upx;
				}
			}
			.qrcode{
				background: #fff;
				padding: 10upx 10upx;
				width: 84upx;
				height: 84upx;
			}
			image{
				width: 64upx;
				height: 64upx;
			}
		}
	}
</style>