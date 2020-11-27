<template>
	<view class="container">
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">南极人(600010)</text>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">操作方向</text>
			<radio-group name="side" @change="selectSide">
				<label>
					<radio value="BUY" :checked="form.trade_type == 'BUY'"/><text class="cell-side">买入</text>
				</label>
				<label>
					<radio value="SELL" :checked="form.trade_type == 'SELL'"/><text class="cell-side">卖出</text>
				</label>
			</radio-group>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">单价</text>
			<input v-model="form.trade_price" type="number" class="cell-input" placeholder="请输入单价"/>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">数量</text>
			<input v-model="form.trade_volume" type="number" class="cell-input" placeholder="请输入数量"/>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">交易日期</text>
			<input v-model="form.trade_date" type="date" class="cell-input limit-l" placeholder="日期"/>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">佣金</text>
			<input v-model="form.commission" type="number" class="cell-input" placeholder="请输入佣金"/>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">税费</text>
			<input v-model="form.stamp_tax" type="number" class="cell-input" placeholder="请输入税费"/>
		</view>
		<view class="list-cell" hover-class="cell-hover" :hover-stay-time="50">
			<textarea placeholder="心得感悟" style="width: 100%; font-size: 28upx;"></textarea>
		</view>
		<button class="submit" @click="submit">确认</button>
		
		<uni-popup ref="popup" type="bottom">
			<view class="coin-box">
				<view class="coin-search">
					<uni-search-bar placeholder="搜索" @input="search"></uni-search-bar>
				</view>
				<view class="item-wrapper">
					<u-empty text="暂无数据" mode="data" :show="coinEmpty" img-width="140"></u-empty>
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
					trading_plan_id:undefined,
					trade_price: undefined,
					trade_volume: undefined,
					trade_date: undefined,
					commission: undefined,
					stamp_tax: undefined,
					trade_type: undefined,
					comment:undefined,
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
		}
	}
</script>

<style lang='scss' scoped>
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
