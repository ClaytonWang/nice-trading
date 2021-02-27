<template>
	<view class="container">
		<view class="header">
			<checkbox-group @change="checkboxChange">
				<label>
					<checkbox value="cb" checked="true" color="#FFCC33" style="transform:scale(0.8)" />过滤
				</label>
			</checkbox-group>
			<picker mode="date" :value="form.exec_start_date" :start="startDate" :end="endDate" @change="bindStartDateChange">
				<view class="uni-input">{{form.exec_start_date | moment("YYYY-MM-DD")}}</view>
			</picker>
			<picker mode="date" :value="form.exec_end_date" :start="startDate" :end="endDate" @change="bindEndDateChange">
				<view class="uni-input">{{form.exec_end_date | moment("YYYY-MM-DD")}}</view>
			</picker>
		</view>
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @up="upCallback" @down="downCallback">
			<uni-list :border="true">
				<uni-list-item v-for="(item,index) in plan_list" class="list-item" :showArrow="true" :ellipsis="1" :key="index"
				 :title="item.name+'('+item.code+')'" :note="noteLable(item)" clickable @click="navTo(item.id,item.name,item.code,item.symbol)"></uni-list-item>
			</uni-list>
		</mescroll-body>
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
	import PlanItem from '@/components/plan-list-item.vue';
	import moment from 'moment';
	export default {
		mixins: [commonMixin, MescrollMixin],
		components: {
			PlanItem,
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				mescroll: null,
				plan_list: [],
				form: {
					exec_start_date: currentDate,
					exec_end_date: currentDate,
				},
			}
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
		computed:{
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			},
		},
		methods: {
			...mapActions('Trading', ['getPlanList']),
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			async checkboxChange(e) {
				if(e.detail.value.length > 0){
					//checked
					await this.getList({
						offset:0,
						limit:20,
						start:this.form.exec_start_date,
						end:this.form.exec_end_date
					});
				}
			},
			async bindStartDateChange(e) {
				this.form.exec_start_date = e.target.value;
				await this.getList({
					offset:0,
					limit:20,
					start:e.target.value,
					end:this.form.exec_end_date
				});
			},
			async bindEndDateChange(e) {
				this.form.exec_end_date = e.target.value;
				await this.getList({
					offset:0,
					limit:20,
					start:this.form.exec_start_date,
					end:e.target.value
				});
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
			downCallback() {
				this.mescroll.resetUpScroll();
			},
			async upCallback(page) {
				let offset = page.num; // 页码, 默认从1开始
				let limit = page.size; // 页长, 默认每页10条
				offset = (offset - 1) * limit;
				await this.getList({
					offset,
					limit
				});
			},
			navTo(id, name, code, symbol) {
				uni.navigateTo({
					url: `/pages/trading-detail/detail-list?plan_id=${id}&name=${name}&code=${code}&symbol=${symbol}`
				})
			},
			noteLable(item) {
				return "止损:" + this.fixed(item.stop_loss) + "  止赢:" + this.fixed(item.take_profit) + ' 日期:' + moment.parseZone(item
					.exec_start_date).local().format('YYYY-MM-DD');
			},
			fixed(v, scale, unit) {
				if (v) {
					if (!scale) {
						scale = 2
					}
					if (!unit) {
						unit = "";
					}
					return parseFloat(v).toFixed(scale) + unit;
				} else {
					return '0.00'
				}
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
		}
	}
</script>
<style lang='scss' scoped>
	.container {
		padding: $page-row-spacing;
		width: 100%;

		.header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			.title {
				font-size: $font-md;
			}
		}

		.list-item {
			margin-top: 5px;
		}
	}
</style>
