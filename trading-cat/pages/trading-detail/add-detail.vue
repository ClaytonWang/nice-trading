<template>
	<view class="container">
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit" :class="form.trading_type=='BUY'?'red':'blue'">{{stockLable}}</text>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">操作方向</text>
			<radio-group name="side" @change="selectSide">
				<label>
					<radio value="BUY" :checked="form.trading_type=='BUY'" /><text class="cell-side red">买入</text>
				</label>
				<label>
					<radio value="SELL" :checked="form.trading_type=='SELL'" /><text class="cell-side blue">卖出</text>
				</label>
			</radio-group>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">单价</text>
			<input v-model="form.trading_price" type="number" class="cell-input" placeholder="请输入单价" />
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">数量</text>
			<input v-model="form.trading_volume" type="number" class="cell-input" placeholder="请输入数量" />
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">操作日期</text>
			<picker mode="date" :value="form.trading_date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="uni-input">{{form.trading_date}}</view>
			</picker>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">佣金</text>
			<text class="cell-tit">{{commission}}</text>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50" v-if="form.trading_type == 'SELL'">
			<text class="cell-tit">税费</text>
			<text class="cell-tit">{{stamp_tax}}</text>
		</view>
		<view class="list-cell" hover-class="cell-hover" :hover-stay-time="50">
			<textarea placeholder="心得感悟" style="width: 100%; font-size: 28upx;" v-model="form.comment"></textarea>
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
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		uniIcons,
		uniPopup,
		uniSearchBar
	} from '@dcloudio/uni-ui'
	import {
		commonMixin,
		authMixin
	} from '@/common/mixin/mixin.js'
	export default {
		components: {
			uniIcons,
			uniPopup,
			uniSearchBar
		},
		mixins: [commonMixin],
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				stockLable:'',
				form: {
					trading_plan_id: undefined,
					trading_price: undefined,
					trading_volume: undefined,
					trading_date: currentDate,
					commission: undefined,
					stamp_tax: undefined,
					trading_type: 'BUY',
					comment: undefined,
				},
			};
		},
		onShow() {
			console.log(this.$route)
			if(this.$route.query.plan_id){
				this.stockLable = this.$route.query.name + " ("+this.$route.query.code+")"
				this.form.trading_plan_id = this.$route.query.plan_id
			}
		},
		onUnload() {

		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			},
			commission() {
				const {
					trading_price,
					trading_volume
				} = this.form;
				if (trading_price && trading_volume) {
					let v = trading_price * trading_volume * 0.00025;
					if (v <= 5) return 5;
					return v.toFixed(2);
				} else {
					return 0;
				}
			},
			stamp_tax() {
				const {
					trading_price,
					trading_volume
				} = this.form;
				if (trading_price && trading_volume) {
					return (trading_price * trading_volume * 0.001);
					return v.toFixed(2);
				} else {
					return 0;
				}
			}
		},
		methods: {
			...mapActions('Trading', ['addDetail']),
			search() {},
			select() {},
			selectSide(value) {
				console.log(value)
				this.form.trading_type = value.target.value;
			},
			selectStock() {
				this.$refs.popup.open()
			},
			async submit() {
				if(!this.form.trading_type){ 
					this.$msg('请选择交易方向');
					return ;}
				if(!this.form.trading_price){ 
					this.$msg('请输入成交价格');
					return ;}
				if(!this.form.trading_volume){ 
					this.$msg('请输入成交数量');
					return ;}
				if(!this.form.trading_date){ 
					this.$msg('请输操作日期');
					return ;}
				if(!this.form.comment){ 
					this.$msg('请输备注');
					return ;}
				this.form.commission = this.commission;
				if(this.form.trading_type==='SELL'){
					this.form.stamp_tax = this.stamp_tax;
				}
				
				const res = await this.addDetail(this.form);
				if(res && res.data){
					this.$msg("添加成功!");
					setTimeout(()=>{
						uni.navigateBack({ });
					},500);
				}else{
					this.$msg(res.errMsg);
				}
			},
			bindDateChange: function(e) {
				this.form.trading_date = e.target.value;
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style lang='scss' scoped>
	.container {
		width: 100%;
	}

	.red{
		color: red !important;
	}
	.blue{
		color: blue !important;
	}
	page {
		background: $page-color-base;
	}

	.list-cell {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		padding: 30upx $page-row-spacing;
		line-height: 60upx;
		position: relative;
		background: #fff;
		justify-content: space-between;

		&.log-out-btn {
			margin-top: 40upx;

			.cell-tit {
				color: $uni-color-primary;
				text-align: center;
				margin-right: 0;
			}
		}

		&.cell-hover {
			background: #fafafa;
		}

		&.b-b:after {
			left: 30upx;
		}

		&.m-t {
			margin-top: 16upx;
		}

		.cell-more {
			align-self: baseline;
			font-size: $font-base;
			color: $font-color-blue;
			margin-left: 10upx;
		}

		.cell-tit {
			font-size: $font-base + 2upx;
			color: $font-color-dark;
		}

		.cell-tip {
			font-size: $font-base;
			color: $font-color-light;
		}

		switch {
			transform: translateX(16upx) scale(.84);
		}

		.cell-cust {
			width: 60%;
			height: 60upx;
			line-height: 60upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.limit-r {
				text-align: right;
				width: 150upx;
			}

			.limit-l {
				text-align: left;
				width: 150upx;
			}
		}

		.cell-side {
			font-size: $font-base;
		}

		radio {
			transform: scale(0.7);
			margin-left: 20upx;
		}

		.cell-input {
			font-size: $font-base;
			text-align: right;
		}

		.cell-btn {
			display: block;
			margin-right: 0;
			padding: 2upx 40upx;
			font-size: $font-base;
			border: 1upx solid $font-color-blue;
			color: $font-color-blue;
		}
	}

	.submit {
		margin: 60upx 20upx;
		background: $uni-color-blue;
		color: #fff;
		font-size: $font-md;
	}

	.safe-tip {
		font-size: $font-sm;
		color: $font-color-blue;
		background: $uni-color-tip;
		padding: 20upx 30upx;
	}
</style>
