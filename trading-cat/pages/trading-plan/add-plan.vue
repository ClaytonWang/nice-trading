<template>
	<view class="container">
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">股票</text>
			<text class="cell-more" @click="selectStock">请选择</text>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">入场价</text>
			<input v-model="form.plan_price" type="number" class="cell-input" placeholder="请输价格" />
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">止损 <i v-if="stop_loss_rate" style="color: green;">{{stop_loss_rate}} %</i></text>
			<input v-model="form.stop_loss" type="number" class="cell-input" placeholder="请输入单价" />
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">止赢 <i v-if="take_profit_rate" style="color: red;">{{take_profit_rate}} %</i></text>
			<input v-model="form.take_profit" type="number" class="cell-input" placeholder="请输入单价" />
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">益损比</text>
			<text class="cell-tit" :class="profitLostRate>=100?'red':'green'"> {{labelRate()}}</text>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">风险额</text>
			<input v-model="form.risk" type="number" class="cell-input" placeholder="请输入数量" />
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">数量</text>
			<text class="cell-tit">{{plan_volume}}</text>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">执行时间</text>
			<view class="cell-cust">
				<picker mode="date" :value="form.exec_start_date" :start="startDate" :end="endDate" @change="bindStartDateChange">
					<view class="uni-input">{{form.exec_start_date}}</view>
				</picker>
				<text class="gap">-</text>
				<picker mode="date" :value="form.exec_end_date" :start="startDate" :end="endDate" @change="bindEndDateChange">
					<view class="uni-input">{{form.exec_end_date}}</view>
				</picker>
			</view>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">{{form.priority==null ? '优先级' : form.priority}}</text>
			<text @click="selectPriority" class="cell-more">请选择</text>
		</view>
		<view class="list-cell" hover-class="cell-hover" :hover-stay-time="50">
			<textarea v-model="form.comment" placeholder="备忘,理由" style="width: 100%; font-size: 28upx;"></textarea>
		</view>
		<button class="submit" @click="submit">确认</button>

		<uni-popup ref="popup" type="bottom">
			<view class="coin-box">
				<view class="coin-search">
					<uni-search-bar placeholder="搜索" @input="search"></uni-search-bar>
				</view>
				<view class="item-wrapper">
					<empty text="暂无数据" mode="data" img-width="140"></empty>
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
		uniIcons,
		uniPopup,
		uniSearchBar
	} from '@dcloudio/uni-ui'
	import {
		commonMixin,
		authMixin
	} from '@/common/mixin/mixin.js'
	import empty from '../../components/empty.vue'
	export default {
		components: {
			uniIcons,
			uniPopup,
			uniSearchBar,
			empty
		},
		mixins: [commonMixin],
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				form: {
					code: undefined,
					name: undefined,
					plan_price: undefined,
					plan_volume: undefined,
					risk:undefined,
					stop_loss: undefined,
					take_profit: undefined,
					exec_start_date: currentDate,
					exec_end_date: currentDate,
					priority: undefined,
					comment: undefined
				},
			};
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			},
			profitLostRate(){
				const {plan_price,stop_loss,take_profit } = this.form;
				if(plan_price && stop_loss && take_profit){
					return ((take_profit - plan_price) / (plan_price - stop_loss) * 100).toFixed(2);
				}
			},
			plan_volume(){
				const {plan_price,stop_loss,risk } = this.form;
				if(plan_price && stop_loss && risk){
					return (risk / (plan_price - stop_loss)).toFixed(2);
				}
			},
			stop_loss_rate(){
				const {plan_price,stop_loss } = this.form;
				if(plan_price && stop_loss){
					return ((plan_price - stop_loss) / plan_price * 100).toFixed(2);
				}
			},
			take_profit_rate(){
				const {plan_price,take_profit } = this.form;
				if(plan_price && take_profit){
					return ((take_profit - plan_price) / plan_price * 100).toFixed(2);
				}
			}
		},
		onLoad() {},
		onUnload() {

		},
		methods: {
			search() {},
			select() {},
			selectStock() {
				this.$refs.popup.open()
			},
			submit() {
				//if(!this.form.code){return;}
				//if(!this.form.name){return;}
				if(!this.form.plan_price){return;}
				if(!this.form.plan_volume){
					this.form.plan_volume = this.plan_volume;
				}
				if(!this.form.stop_loss){return;}
				if(!this.form.take_profit){return;}
				if(!this.form.exec_start_date){return;}
				if(!this.form.exec_end_date){return;}
				if(!this.form.priority){return;}
				if(!this.form.comment){return;}
				console.log(this.form);
			},
			selectPriority() {
				let form = this.form
				let arrayData = ['耐心等待', '等待', '一般', '高']
				uni.showActionSheet({
					itemList: arrayData,
					success: function(res) {
						form.priority = arrayData[res.tapIndex]
					}
				})
			},
			bindStartDateChange: function(e) {
				this.form.exec_start_date = e.target.value;
			},
			bindEndDateChange: function(e) {
				this.form.exec_end_date = e.target.value;
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
			},
			labelRate(){
				const {plan_price,stop_loss,take_profit } = this.form;
				if(plan_price && stop_loss && take_profit){
					return `${(take_profit - plan_price).toFixed(2)} / ${(plan_price - stop_loss).toFixed(2)} = ${this.profitLostRate} %` ;
				}else{
					return '输入盈亏价格'
				}
			}
		}
	}
</script>

<style lang='scss' scoped>
	.container {
		width: 100%;
	}

	page {
		background: $page-color-base;
	}
	.red {
		color: red !important;
	}
	.green {
		color: green !important;
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
