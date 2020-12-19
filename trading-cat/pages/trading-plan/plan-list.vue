<template>
	<view class="container">
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @up="upCallback" @down="downCallback">
			<view class="plan-group">
				<view class="header">
					<text class="title">盈利<text class="count">共 0 个</text></text>
					<text class="title">亏损<text class="count">共 0 个</text></text>
					<text class="title">风险<text class="count">共 4% </text></text>
				</view>
				<view class="item" :class="item.status?'':'gray'" v-for="(item,index) in plan_list" :key="index">
					<view class="top" @longpress="showOpration">
						<view class="stock">{{item.name}} ({{item.code}})</view>
						<uni-icons v-if="!isSHowOp" type="list" size="22" @click="showOpration"></uni-icons>
						<view class="opt" v-show="isSHowOp">
							<uni-icons type="trash" color="red" style="margin-right: 30upx;" size="22" @click="del(item.id,item.name)"></uni-icons>
							<switch :checked="item.status" style="transform:scale(0.7);" @change="changeStatus($event,item)" />
							<uni-icons type="compose" style="margin-left: 30upx;" size="22" @click="editPlan(item.id)"></uni-icons>
							<uni-icons type="redo" size="22" style="margin-left: 40upx;" @click="showOpration"></uni-icons>
						</view>
					</view>
					<view class="center" @click="navTo(item.id,item.name,item.code,item.symbol)">
						<view class="s-row row-title">
							<view class="col">计划/成本</view>
							<view class="col">止损</view>
							<view class="col">止赢</view>
						</view>
						<view class="s-row row-amount">
							<view class="col">
								{{item.plan_price | fixed}}/{{actual_price(item.trading_details) | fixed}}<br />
								<i :class="slide_point(item.plan_price,actual_price(item.trading_details))>=0?'take_profit':'stop_loss'">{{slide_point(item.plan_price,actual_price(item.trading_details)) | fixed(2,'%')}}</i>
							</view>
							<view class="col">
								{{item.stop_loss | fixed}}<br />
								<i class="stop_loss">-{{stop_loss_rate(item) | fixed(2,'%')}}</i>
							</view>
							<view class="col">
								{{item.take_profit | fixed}}<br />
								<i class="take_profit">{{take_profit_rate(item) | fixed(2,'%')}}</i>
							</view>
						</view>
						<view class="s-row row-title">
							<view class="col">数量(股)</view>
							<view class="col">益损比</view>
							<view class="col">风险额</view>
						</view>
						<view class="s-row row-amount">
							<view class="col">{{item.plan_volume | fixed}}</view>
							<view class="col red">{{profitLostRate(item) | fixed(2,'%')}}</view>
							<view class="col">{{item.risk | fixed}}￥</view>
						</view>
						<view class="s-row row-title">
							<view class="col">入场时间</view>
							<view class="col">优先级</view>
							<view class="col">关注时间</view>
						</view>
						<view class="s-row row-amount">
							<view class="col">{{item.exec_start_date | moment("MM/DD")}} - {{item.exec_end_date | moment("MM/DD")}}</view>
							<view class="col">{{item.priority | formatPriority}}</view>
							<view class="col">{{item.created_at | moment("MM/DD HH:mm")}}</view>
						</view>

					</view>
					<view class="bottom">
						<view class="s-row row-title">
							<view class="col">
								备注
								<uni-icons v-show="isSHowOp" type="compose" color="blue" size="20" @click="editComment(item.id)" style="margin-left: 15px;"></uni-icons>
							</view>
						</view>
						<template v-for="(cItem,cIndex) in item.comments">
							<view class="s-row row-title" :key="cIndex">
								<view class="col">
									{{cItem.created_at | moment("YYYY/MM/DD HH:mm")}}
								</view>
							</view>
							<view class="s-row row-amount" :key="'c'+cIndex">
								<view class="col">
									{{cItem.comment}}
								</view>
							</view>
						</template>
						
					</view>
				</view>
			</view>
		</mescroll-body>
		<uni-popup ref="popup" type="share" :maskClick="false">
			<view class="coments-box">
				<view class="cmt-tool-bar">
					<uni-icons type="closeempty" size="22" @click="closePop"></uni-icons>
					<view @click="submitComment">
						<uni-icons type="upload" size="22"></uni-icons>
						提交
					</view>
				</view>

				<view class="label">添加备注:</view>
				<view class="comments">
					<uni-forms border>
						<uni-easyinput type="textarea" autoHeight :maxlength="-1" :trim="true" :clearable="false" v-model="popup_comments"
						 placeholder="请输入内容"></uni-easyinput>
					</uni-forms>

				</view>
			</view>
		</uni-popup>
		<wyb-loading ref="loading" />
	</view>
</template>
<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		commonMixin
	} from '@/common/mixin/mixin.js';
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import wybLoading from '@/components/wyb-loading/wyb-loading.vue';
	export default {
		mixins: [commonMixin, MescrollMixin],
		components: {
			wybLoading
		},
		data() {
			return {
				mescroll: null,
				plan_list: [],
				popup_plan_id: '',
				popup_comments: '',
				isSHowOp:false
			}
		},
		filters: {
			formatPriority(v) {
				switch (v.toString()) {
					case '0':
						return '耐心等待';
						break;
					case '1':
						return '等待';
						break;
					case '2':
						return '一般';
						break;
					case '3':
						return '高';
						break;
				}
			},
		},
		onShow() {
			//this.downCallback();
			this.getList({
				offset:0,
				limit:10
			});
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			let $this = this;
			uni.showActionSheet({
				itemList: ['添加交易计划'],
				success: function(res) {
					let i = res.tapIndex
					uni.navigateTo({
						url: "/pages/trading-plan/add-plan"
					})
				},
				fail: function(res) {}
			});
		},
		// #endif
		methods: {
			...mapActions('Trading', ['getPlanList', 'delPlanItem', 'updatePlan', 'addComents']),
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			actual_price(trading_details){
				if(trading_details && trading_details.length>0){
					let totalAmount=0,totalVol=0;
					for(let item of trading_details){
						if(!item.stamp_tax){
							item.stamp_tax=0;
						}
						if(!item.trading_price){
							item.trading_price=0;
						}
						if(!item.trading_volume){
							item.trading_volume=0;
						}
						if(!item.commission){
							item.commission=0;
						}
						if(item.trading_type==='BUY'){
							totalAmount = totalAmount+parseFloat(item.trading_price) * parseFloat(item.trading_volume) + parseFloat(item.commission) + parseFloat(item.stamp_tax);
							totalVol = totalVol+parseFloat(item.trading_volume);
						}
					}
					
					if(!totalVol) return 0;
					return (totalAmount / totalVol).toFixed(2);
				}else{
					return 0;
				}
			},
			showOpration(){
				this.isSHowOp=!this.isSHowOp;
			},
			editPlan(id){
				uni.navigateTo({
					url: `/pages/trading-plan/add-plan?plan_id=${id}`
				})
			},
			async getList(params) {
				const res = await this.getPlanList(params);
				if (res && res.data) {
					if (params.offset == 0) {
						this.plan_list = [];
					}
					this.plan_list = this.plan_list.concat(res.data.rows);
					let curPageLen = res.data.rows.length;
					let totalSize = res.data.count;
					this.mescroll.endBySize(curPageLen, totalSize);
				} else {
					this.$msg(data.errMsg);
					this.plan_list = [];
					this.mescroll.endErr();
				}
			},
			navTo(id, name, code, symbol) {
				if(this.isSHowOp) return;
				uni.navigateTo({
					url: `/pages/trading-detail/detail-list?plan_id=${id}&name=${name}&code=${code}&symbol=${symbol}`
				})
			},
			stop_loss_rate(item) {
				const {
					plan_price,
					stop_loss
				} = item;
				if (plan_price && stop_loss) {
					return (Math.abs(plan_price - stop_loss) / plan_price * 100).toFixed(2);
				}
			},
			slide_point(plan, actual) {
				if (actual == null || actual == undefined) {
					actual = 0;
				}
				return (((plan - actual) / plan) * 100).toFixed(2);
			},
			take_profit_rate(item) {
				const {
					plan_price,
					take_profit
				} = item;
				if (plan_price && take_profit) {
					return (Math.abs(take_profit - plan_price) / plan_price * 100).toFixed(2);
				}
			},
			profitLostRate(item) {
				const {
					plan_price,
					stop_loss,
					take_profit
				} = item;
				if (plan_price && stop_loss && take_profit) {
					return (Math.abs(take_profit - plan_price) / Math.abs(plan_price - stop_loss) * 100).toFixed(2);
				}
			},
			async changeStatus(e, item) {
				item.status = e.target.value ? 1 : 0;
				const res = await this.updatePlan(item);
				if (res && res.data) {
					this.$msg('sucess');
				} else {
					console.log(res)
					//this.$msg(res.errMsg);
				}
			},
			async del(id, name) {
				uni.showModal({
					content: `确定删除"${name}"吗？`,
					showCancel: true,
					success: async (res) => {
						if (res.confirm) {
							const resp = await this.delPlanItem(id);
							if (resp && resp.data) {
								this.$msg('删除成功！');
								this.downCallback();
							} else {
								this.$msg(resp.errMsg);
							}
						}
					}
				});
			},
			editComment(id) {
				this.popup_plan_id = id;
				this.$refs.popup.open();
			},
			async submitComment() {
				try {
					let data = {
						external_id: this.popup_plan_id,
						comment: this.popup_comments,
					};
					if (!data.external_id) {
						this.$msg('external_id不能为空！');
						return;
					}
					if (!data.comment) {
						this.$msg('内容不能为空！');
						return;
					}
					this.$refs.loading.showLoading();
					const resp = await this.addComents(data);
					if (resp && resp.data) {
						this.$msg('添加成功！');
						this.popup_plan_id = '';
						this.popup_comments = '';
						this.closePop();
						this.downCallback();
					} else {
						this.$msg(resp.errMsg);
					}
				} catch (e) {
					console.log(e);
				}
				this.$refs.loading.hideLoading();
			},
			closePop() {
				this.$refs.popup.close();
			},
			downCallback() {
				this.mescroll.resetUpScroll();
			},
			async upCallback(page) {
				let offset = page.num - 1; // 页码, 默认从1开始
				let limit = page.size; // 页长, 默认每页10条
				await this.getList({
					offset,
					limit
				});
			}
		}
	}
</script>
<style lang='scss' scoped>
	page {
		background: $page-color-base;
	}

	.red {
		color: red;
	}

	.gray {
		background-color: #cccccc !important;
	}

	.container {
		padding: $page-row-spacing;
		width: 100%;
	}

	.coments-box {
		height: 100%;
		background-color: #FFFFFF;
		padding: 10upx 20upx 50upx 20upx;

		.cmt-tool-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

		.label {
			margin: 20upx 0;
		}
	}

	.plan-group {
		width: 100%;
		margin-bottom: 40upx;

		.header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			.title {
				font-size: $font-md;
			}

			.count {
				margin-left: 20upx;
				font-size: $font-sm;
				color: $font-color-light;
			}

			.add {
				font-size: $font-md;
				color: $font-color-spec;
			}
		}

		.empty {
			margin: 20upx 0upx;
			width: 100%;
			height: 180upx;
			line-height: 180upx;
			background: $uni-color-subbg;
			border-radius: 20upx;
			text-align: center;
			font-size: $font-md;
		}

		.item {
			margin: 20upx 0upx;
			width: 100%;
			padding: 20upx;
			text-align: left;
			font-size: $font-md;
			display: flex;
			flex-direction: column;
			background-color: #FFFFFF;
			border: 1px solid #cccccc;
			border-radius: 4px;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

			.top {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 30upx;

				.stock {
					font-weight: bold;
				}

				.opt {
					display: flex;
					flex-direction: row;
					align-items: center;
				}
			}

			.center,
			.bottom {
				.s-row {
					display: flex;
					align-items: center;

					.col {
						flex: 1;
						padding: 4upx 0 10upx 0;
					}

					.take_profit {
						font-size: $font-xsm;
						color: red;
					}

					.stop_loss {
						font-size: $font-xsm;
						color: green;
					}
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
			}
		}
	}
</style>
