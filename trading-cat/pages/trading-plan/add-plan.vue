<template>
	<view class="container">
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">{{stockLabel}}</text>
			<text class="cell-more" @click="navTo('/pages/public/stock-list')">请选择</text>
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">入场价</text>
			<input v-model="form.plan_price" type="number" class="cell-input" placeholder="请输价格" />
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">止损<i v-if="stop_loss_rate" style="color: green;">{{stop_loss_rate}} %</i></text>
			<input v-model="form.stop_loss" type="number" class="cell-input" placeholder="请输入单价" />
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">止赢<i v-if="take_profit_rate" style="color: red;">{{take_profit_rate}} %</i></text>
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
			<text class="cell-tit">总额/数量</text>
			<text class="cell-tit">{{plan_totoal}}元 / {{plan_volume}}股</text>
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
	} from '@/common/mixin/mixin.js';
	import empty from '../../components/empty.vue';

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
				searchRslt: [],
				stockLabel: '股票',
				form: {
					code: undefined,
					name: undefined,
					symbol: undefined,
					plan_price: undefined,
					plan_volume: undefined,
					risk: undefined,
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
			profitLostRate() {
				const {
					plan_price,
					stop_loss,
					take_profit
				} = this.form;
				if (plan_price && stop_loss && take_profit) {
					return (Math.abs(take_profit - plan_price) / Math.abs(plan_price - stop_loss) * 100).toFixed(2);
				}
			},
			plan_volume() {
				const {
					plan_price,
					stop_loss,
					risk
				} = this.form;
				if (plan_price && stop_loss && risk) {
					return (risk / Math.abs(plan_price - stop_loss)).toFixed(2);
				}
			},
			plan_totoal() {
				if (this.form.plan_price && this.plan_volume) {
					return (this.plan_volume * this.form.plan_price).toFixed(2);
				}
			},
			stop_loss_rate() {
				const {
					plan_price,
					stop_loss
				} = this.form;
				if (plan_price && stop_loss) {
					return (Math.abs(plan_price - stop_loss) / plan_price * 100).toFixed(2);
				}
			},
			take_profit_rate() {
				const {
					plan_price,
					take_profit
				} = this.form;
				if (plan_price && take_profit) {
					return (Math.abs(take_profit - plan_price) / plan_price * 100).toFixed(2);
				}
			}
		},
		onLoad() {
			uni.$on('selectStock', this.selectStock)
		},
		onUnload() {
			uni.$off('selectStock', this.selectStock)
		},
		methods: {
			...mapActions('Trading', ['addPlan']),
			select() {},
			selectStock({
				stock
			}) {
				console.log(stock);
				this.stockLabel = stock.item.name;
				if (this.stockLabel) {
					this.form.name = this.stockLabel.split(" (")[0];
					this.form.code = this.stockLabel.split(" (")[1].replace(")", "");
					this.form.symbol = stock.item.key;
				}
			},
			async submit() {
				if (!this.form.code) {
					this.$msg('请选择股票');
					return;
				}
				if (!this.form.name) {
					this.$msg('请选择股票');
					return;
				}
				if (!this.form.plan_price) {
					this.$msg('请输入场价');
					return;
				}
				if (!this.form.plan_volume) {
					this.form.plan_volume = this.plan_volume;
				}
				if (!this.form.stop_loss) {
					this.$msg('请输入止损价');
					return;
				}
				if (!this.form.take_profit) {
					this.$msg('请输入止盈价');
					return;
				}
				if (!this.form.exec_start_date) {
					this.$msg('请输入开始日期');
					return;
				}
				if (!this.form.exec_end_date) {
					this.$msg('请输入结束日期');
					return;
				}
				if (!this.form.priority) {
					this.$msg('请选择优先级');
					return;
				}
				if (!this.form.comment) {
					this.$msg('请输入备注');
					return;
				}
				//['耐心等待', '等待', '一般', '高'] 0,1,2,3
				switch(this.form.priority){
					case '耐心等待':
					this.form.priority = 0;
					break;
					case '等待':
					this.form.priority = 1;
					break;
					case '一般':
					this.form.priority = 2;
					break;
					case '高':
					this.form.priority = 3;
					break;
				}
				const res = await this.addPlan(this.form)
				if(res.data){
					this.$msg("添加成功!");
					setTimeout(()=>{
						uni.navigateBack({ });
					},500);
				}else{
					this.$msg(res.errMsg);
				}
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
			labelRate() {
				const {
					plan_price,
					stop_loss,
					take_profit
				} = this.form;
				if (plan_price && stop_loss && take_profit) {
					return `${(take_profit - plan_price).toFixed(2)} / ${(plan_price - stop_loss).toFixed(2)} = ${this.profitLostRate} %`;
				} else {
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
