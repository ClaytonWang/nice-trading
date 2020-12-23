<template>
	<view class="container">
		<!-- 列表 -->
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @up="upCallback" @down="downCallback">
			<view class="coin-section m-t">
				<view class="block little-line" v-for="(item,index) in detial_list" :key="index" @longpress="showOpration(item)">
					<view class="s-row">
						<view class="col">
							<text class="coin" :class="item.trading_type==='BUY'?'buy':'sell'" >{{item.trading_type | trading_type}}</text>
							<text class="coin" :class="item.trading_type==='BUY'?'buy':'sell'">{{name}}({{code}})</text>
						</view>
						<uni-icons v-if="!item.isSHowOp" type="list" size="22" @click="showOpration(item)"></uni-icons>
						<view class="col r light" v-show="item.isSHowOp">
							<uni-icons type="trash" color="red" style="margin-right: 30upx;" size="22" @click="del(item.id,name)"></uni-icons>
							<uni-icons type="compose" style="margin-left: 30upx;" size="22" @click="editDetail(item.id)"></uni-icons>
							<uni-icons type="redo" size="22" style="margin-left: 40upx;" @click="showOpration(item)"></uni-icons>
						</view>
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
						<view class="col subtitle row-title">
							操作备忘
							<uni-icons type="plusempty" color="blue" size="20" @click="addComment(item.id)" style="margin-left: 15px;"></uni-icons>
						</view>
						
					</view>
					<view v-for="(cItem,cIndex) in item.comments" :key="cIndex">
						<view class="s-row">
							<view class="col subtitle row-title">
								{{cItem.created_at | moment("YYYY/MM/DD HH:mm")}}
							</view>
							<view class="col subtitle row-title" v-show="item.isSHowOp">
								<view class="s-row">
									<view class="col">
										<uni-icons type="trash" color="blue" size="20" @click="delComment(cItem.id)"></uni-icons>
									</view>
									<view class="col">
										<uni-icons type="compose" color="blue" size="20" @click="editComment(cItem.id,item.id,cItem.comment)"></uni-icons>
									</view>
								</view>
							</view>
						</view>
						<view class="s-row">
							<view class="col subtitle row-amount" style="white-space: pre-wrap;" v-html="cItem.comment"></view>
						</view>
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
	import {uniPopup, uniIcons} from '@dcloudio/uni-ui';
	import {commonMixin} from '@/common/mixin/mixin.js';
	import wybLoading from '@/components/wyb-loading/wyb-loading.vue';
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import PlanItem from '@/pages/trading-plan/components/plan-list-item.vue';
	export default {
		components: {uniPopup, uniIcons,wybLoading,PlanItem},
		mixins: [commonMixin,MescrollMixin],
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
				mescroll:null,
				detial_list:[],
				popup_comments_id:'',
				popup_detail_id:'',
				popup_comments:'',
				plan_id:'',
				code:'',
				name:'',
				symbol:'',
			};
		},
		onLoad(options){
			this.plan_id = options.plan_id;
			this.code = options.code;
			this.name = options.name;
			this.symbol = options.symbol;
			this.getPlanInfo(this.plan_id);
		},
		onShow() {
			this.getPlanInfo(this.plan_id);
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
			...mapActions('Trading', ['getPlan','addComents','delDetailItem','deleteComment']),
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			showOpration(item){
				this.$set(item,'isSHowOp',!item.isSHowOp);
			},
			editDetail(id){
				uni.navigateTo({
					url: `/pages/trading-detail/add-detail?detail_id=${id}`
				})
			},
			async del(id) {
				uni.showModal({
					content: `确定删除吗？`,
					showCancel: true,
					success: async (res) => {
						if (res.confirm) {
							const resp = await this.delDetailItem(id);
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
			async getPlanInfo(id) {
				const res = await this.getPlan(id);
				if (res && res.data) {
					if (params.offset == 0) {
						this.detial_list = [];
					}
					this.detial_list = this.detial_list.concat(res.data.rows);
					let curPageLen = res.data.rows.length;
					let totalSize = res.data.count;
					this.mescroll.endBySize(curPageLen, totalSize);
				} else {
					this.detial_list = [];
				}
			},
			async submitComment() {
				try {
					let data = {
						trading_detail_id: this.popup_detail_id,
						comment: this.popup_comments,
					};
					
					if(this.popup_comments_id){
						data.id = this.popup_comments_id;
					}
					
					if (!data.trading_detail_id) {
						this.$msg('trading_detail_id不能为空！');
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
			delComment(id){
				uni.showModal({
					content: `确定删除吗？`,
					showCancel: true,
					success: async (res) => {
						if (res.confirm) {
							const resp = await this.deleteComment(id);
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
			addComment(id){
				this.popup_detail_id = id;
				this.popup_comments_id = '';
				this.$refs.popup.open();
			},
			editComment(id,detail_id,content){
				this.popup_comments_id = id;
				this.popup_detail_id = detail_id;
				this.popup_comments = content;
				this.$refs.popup.open();
			},
			downCallback() {
				this.mescroll.resetUpScroll();
			},
			async upCallback(page) {
				let offset = page.num - 1; // 页码, 默认从1开始
				let limit = page.size; // 页长, 默认每页10条
				let trading_plan_id = this.plan_id;
				await this.getList({
					offset,
					limit,
					trading_plan_id
				});
			}
		}
	}
</script>

<style lang='scss' scoped>
	.container{
		width: 100%;
		padding: 0upx 0upx;
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
