<template>
	<view class="container">
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">股票</text>
			<text class="cell-more" @click="selectStock">请选择</text>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">入场价</text>
			<input v-model="form.plan_price" type="number" class="cell-input" placeholder="请输价格"/>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">数量</text>
			<input v-model="form.plan_volume" type="number" class="cell-input" placeholder="请输入数量"/>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">止损</text>
			<input v-model="form.stop_loss" type="number" class="cell-input" placeholder="请输入单价"/>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">止赢</text>
			<input v-model="form.take_profit" type="number" class="cell-input" placeholder="请输入单价"/>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">执行时间</text>
			<view class="cell-cust">
				<input v-model="form.exec_start_date" type="date" class="cell-input limit-l" placeholder="开始日期"/>
				<text class="gap">-</text>
				<input v-model="form.exec_end_date" type="date" class="cell-input limit-r" placeholder="结束日期"/>
			</view>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">{{form.priority==null ? '优先级' : form.priority}}</text>
			<text @click="selectPriority" class="cell-more">请选择</text>
		</view>
		<view class="list-cell" hover-class="cell-hover" :hover-stay-time="50">
			<textarea placeholder="理由" style="width: 100%; font-size: 28upx;"></textarea>
		</view>
		<button class="submit" @click="submit">确认</button>
		
		<uni-popup ref="popup" type="bottom">
			<view class="coin-box">
				<view class="coin-search">
					<uni-search-bar placeholder="搜索" @input="search"></uni-search-bar>
				</view>
				<view class="item-wrapper">
					<u-empty text="暂无数据" mode="data" img-width="140"></u-empty>
					<view class="coin-item little-line" @click="select">
						<view class="col">
							<text>南极人</text>
							<text>600010</text>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {uniIcons, uniPopup, uniSearchBar} from '@dcloudio/uni-ui'
	import {commonMixin, authMixin} from '@/common/mixin/mixin.js'
	export default {
		components: {uniIcons, uniPopup, uniSearchBar},
		mixins: [commonMixin],
		data() {
			return {
				form: {
					code:undefined,
					name:undefined,
					plan_price: undefined,
					plan_volume: undefined,
					stop_loss: undefined,
					take_profit: undefined,
					exec_start_date: undefined,
					exec_end_date: undefined,
					priority: undefined,
					comment: undefined
				},
			};
		},
		onLoad(){	
		},
		onUnload(){
			
		},
		methods:{
			search(){},
			select(){},
			selectStock(){
				this.$refs.popup.open()
			},
			submit(){},
			selectPriority(){
				let form = this.form
				let arrayData = ['耐心等待', '等待','一般','高']
				uni.showActionSheet({
					itemList: arrayData,
					success: function (res) {
						form.priority = arrayData[res.tapIndex]
					}
				})
			},
		}
	}
</script>

<style lang='scss' scoped>
	.container{
		width: 100%;
	}
	page{
		background: $page-color-base;
	}
	.list-cell{
		display:flex;
		flex-direction: row;
		align-items:baseline;
		padding: 30upx $page-row-spacing;
		line-height:60upx;
		position:relative;
		background: #fff;
		justify-content: space-between;
		&.log-out-btn{
			margin-top: 40upx;
			.cell-tit{
				color: $uni-color-primary;
				text-align: center;
				margin-right: 0;
			}
		}
		&.cell-hover{
			background:#fafafa;
		}
		&.b-b:after{
			left: 30upx;
		}
		&.m-t{
			margin-top: 16upx; 
		}
		.cell-more{
			align-self: baseline;
			font-size: $font-base;
			color: $font-color-blue;
			margin-left:10upx;
		}
		.cell-tit{
			font-size: $font-base + 2upx;
			color: $font-color-dark;
		}
		.cell-tip{
			font-size: $font-base;
			color: $font-color-light;
		}
		switch{
			transform: translateX(16upx) scale(.84);
		}
		.cell-cust{
			width: 60%;
			height: 60upx;
			line-height: 60upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.limit-r{
				text-align: right;
				width: 150upx;
			}
			.limit-l{
				text-align: left;
				width: 150upx;
			}
		}
		.cell-side{
			font-size: $font-base;
		}
		radio{
			transform:scale(0.7);
			margin-left: 20upx;
		}
		.cell-input{
			font-size: $font-base;
			text-align: right;
		}
		
		.cell-btn{
			display: block;
			margin-right: 0;
			padding: 2upx 40upx;
			font-size: $font-base;
			border: 1upx solid $font-color-blue;
			color: $font-color-blue;
		}
	}
	.submit{
		margin: 60upx 20upx;
		background: $uni-color-blue;
		color: #fff;
		font-size: $font-md;
	}
	.safe-tip{
		font-size: $font-sm;
		color: $font-color-blue;
		background: $uni-color-tip;
		padding: 20upx 30upx;
	}
</style>
