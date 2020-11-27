<template>
	<view class="order-item little-line">
		<view class="row user-info">
			<view class="name">
				<view class="profile">南极人(600010)</view>
			</view>
			<view class="nomarl">止损 100.12(-6.12%) | 止赢 110.28(12.11%)</view>
		</view>
		<view class="row">
			<view class="nomarl">数量 1000</view>
			<view class="nomarl">单价</view>
		</view>
		<view class="row">
			<view class="nomarl">执行日期 2020-10-1 -- 2020-10-5</view>
			<view class="price">￥11.23</view>
		</view>
		<view class="row opt">
			<view class="pay">
			</view>
			<view>
				<button class="btn buy">添加详情</button>
			</view>
		</view>
	</view>
</template> 

<script>
	
</script>

<style lang="scss" scoped>
	.order-item {
		width: 100%;
		padding: 20upx $page-row-spacing;
		.user-info{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			height: 80upx;
			line-height: 80upx;
			.name{
				font-size: $font-md;
				font-weight: bold;
				display: flex;
				flex-direction: row;
				align-items: center;
			}
			.profile{
				width: 50upx;
				height: 50upx;
				line-height: 50upx;
				border-radius: 50%;
				text-align: center;
				background: $uni-color-blue;
				color: #fff;
				font-weight: 100;
				font-weight: bold;
				font-size: $font-md;
				margin-right: 10upx;
			}
		}
		.opt{
			margin: 20upx 0;
		}
		.row{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 2upx 0;
			align-items:flex-end;
			.price{
				color: $font-color-blue;
			}
			.nomarl{
				font-size: $font-sm;
				color: $font-color-light;
			}
			.pay{
				image{
					width: 25px;
					height: 25px;
				}
			}
			.buy{
				background: $uni-color-blue;
			}
			.sell{
				background: #475F78;
			}
			.btn{
				border: 0;
				color: #fff;
				font-size: $font-sm;
				height: 60upx;
				line-height: 60upx;
				padding: 0 50upx;
			}
		}
	}
	.box{
		background: #fff;
		display: flex;
		flex-direction: column;
		height: 280px;
		padding: 30upx 30upx;
		font-size: $font-base;
		color: $font-color-light;
		.coin{
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-bottom: 10upx;
			.name{
				font-size: $font-lg;
				color: $font-color-base;
				padding-bottom: 10upx;
			}
			.price{
				color: $font-color-blue;
			}
			.icon{
				width: 40px;
				height: 40px;
			}
		}
		.type{
			display: flex;
			flex-direction: row;
			padding: 10upx 0;
			view{
				margin-right: 30upx;
				position: relative;
				padding: 10upx 0;
				&.active{
					color: $uni-color-blue;
					&:after{
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
		.input{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			width: 100%;
			padding: 14upx 10upx;
			margin: 20upx 0;
			border: 1upx solid #8B9FAA;
			input{
				color: $font-color-light;
				font-size: $font-base;
			}
			.cny{
				margin-right: 20upx;
				color: $font-color-base;
			}
			.all{
				margin-left: 20upx;
				color: $font-color-blue;
			}
		}
		.amount{
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 10upx 0;
			.p{
				font-size: $font-lg;
				color: $font-color-blue;
			}
		}
		.btns{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			width: 100%;
			padding: 10upx 0;
			.btn{
				display: block;
				width: 48%;
				height: 70upx;
				line-height: 70upx;
				text-align: center;
				color: #fff;
				border-radius: 0;
				font-size: $font-base;
			}
			.cancel{
				background: #96A7BA;
			}
			.submit{
				background: $uni-color-blue;
			}
		}
	}
</style>
