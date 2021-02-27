<template>
	<view class="tabs">
		<scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto">
			<view v-for="(tab,index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index" @click="ontabtap">
				<text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
			</view>
		</scroll-view>
		<view class="line-h"></view>
		<swiper :current="tabIndex" class="swiper-box" style="flex: 1;" :duration="300" @change="ontabchange">
			<swiper-item class="swiper-item" v-for="(tab,index1) in newsList" :key="index1">
				<!-- #ifdef APP-NVUE -->
				<list class="scroll-v list" enableBackToTop="true" scroll-y loadmoreoffset="15" @loadmore="loadMore(index1)">
					<refresh class="refresh" @refresh="onrefresh(index1)" @pullingdown="onpullingdown" :display="tab.refreshing ? 'show' : 'hide'">
						<div class="refresh-view">
							<image class="refresh-icon" :src="refreshIcon" :style="{width: (tab.refreshing || pulling) ? 0: '30px'}" :class="{'refresh-icon-active': tab.refreshFlag}"></image>
							<loading-indicator class="loading-icon" animating="true" v-if="tab.refreshing"></loading-indicator>
							<text class="loading-text">{{tab.refreshText}}</text>
						</div>
					</refresh>
					<cell v-for="(newsitem,index2) in tab.data" :key="newsitem.id">
						<media-item :options="newsitem" @close="close(index1,index2)" @click="goDetail(newsitem)"></media-item>
					</cell>
					<cell class="loading-more" v-if="tab.isLoading || tab.data.length > 4">
						<text class="loading-more-text">{{tab.loadingText}}</text>
					</cell>
				</list>
				<!-- #endif -->
				<!-- #ifndef APP-NVUE -->
				<scroll-view class="scroll-v list" enableBackToTop="true" scroll-y @scrolltolower="loadMore(index1)">
					<view v-for="(newsitem,index2) in tab.data" :key="newsitem.id">
						<media-item :options="newsitem" @close="close(index1,index2)" @click="goDetail(newsitem)"></media-item>
					</view>
					<view class="loading-more" v-if="tab.isLoading || tab.data.length > 4">
						<text class="loading-more-text">{{tab.loadingText}}</text>
					</view>
				</scroll-view>
				<!-- #endif -->
			</swiper-item>
		</swiper>
	</view>
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
				cacheTab: [],
				tabIndex: 0,
				form: {
					exec_start_date: currentDate,
					exec_end_date: currentDate,
				},
				tabBars: [{
					name: '关注',
					id: 'guanzhu'
				}, {
					name: '持仓',
					id: 'chicang'
				}, {
					name: '清仓',
					id: 'qingcang'
				}],
				scrollInto: "",
				showTips: false,
				navigateFlag: false,
				pulling: false,
				refreshIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="
				
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
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			},
		},
		methods: {
			...mapActions('Trading', ['getPlanList']),
			switchTab(index) {
			    if (this.newsList[index].data.length === 0) {
			        this.getList(index);
			    }
			
			    if (this.tabIndex === index) {
			        return;
			    }
			
			    // 缓存 tabId
			    if (this.newsList[this.tabIndex].data.length > MAX_CACHE_DATA) {
			        let isExist = this.cacheTab.indexOf(this.tabIndex);
			        if (isExist < 0) {
			            this.cacheTab.push(this.tabIndex);
			            //console.log("cache index:: " + this.tabIndex);
			        }
			    }
			
			    this.tabIndex = index;
			    this.scrollInto = this.tabBars[index].id;
			
			    // 释放 tabId
			    if (this.cacheTab.length > MAX_CACHE_PAGE) {
			        let cacheIndex = this.cacheTab[0];
			        this.clearTabData(cacheIndex);
			        this.cacheTab.splice(0, 1);
			        //console.log("remove cache index:: " + cacheIndex);
			    }
			},
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			async checkboxChange(e) {
				if (e.detail.value.length > 0) {
					//checked
					await this.getList({
						offset: 0,
						limit: 20,
						start: this.form.exec_start_date,
						end: this.form.exec_end_date
					});
				}
			},
			async bindStartDateChange(e) {
				this.form.exec_start_date = e.target.value;
				await this.getList({
					offset: 0,
					limit: 20,
					start: e.target.value,
					end: this.form.exec_end_date
				});
			},
			async bindEndDateChange(e) {
				this.form.exec_end_date = e.target.value;
				await this.getList({
					offset: 0,
					limit: 20,
					start: this.form.exec_start_date,
					end: e.target.value
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
<style>
	/* #ifndef APP-PLUS */
	page {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

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

	.tabs {
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		background-color: #ffffff;
		/* #ifdef MP-ALIPAY || MP-BAIDU */
		height: 100vh;
		/* #endif */
	}

	.scroll-h {
		width: 750rpx;
		height: 80rpx;
		flex-direction: row;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
		/* flex-wrap: nowrap; */
		/* border-color: #cccccc;
		border-bottom-style: solid;
		border-bottom-width: 1px; */
	}

	.line-h {
		height: 1rpx;
		background-color: #cccccc;
	}

	.uni-tab-item {
		/* #ifndef APP-PLUS */
		display: inline-block;
		/* #endif */
		flex-wrap: nowrap;
		padding-left: 34rpx;
		padding-right: 34rpx;
	}

	.uni-tab-item-title {
		color: #555;
		font-size: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		flex-wrap: nowrap;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
	}

	.uni-tab-item-title-active {
		color: #007AFF;
	}

	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		flex: 1;
		flex-direction: row;
	}

	.scroll-v {
		flex: 1;
		/* #ifndef MP-ALIPAY */
		flex-direction: column;
		/* #endif */
		width: 750rpx;
	}

	.update-tips {
		position: absolute;
		left: 0;
		top: 41px;
		right: 0;
		padding-top: 5px;
		padding-bottom: 5px;
		background-color: #FDDD9B;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.update-tips-text {
		font-size: 14px;
		color: #ffffff;
	}

	.refresh {
		width: 750rpx;
		height: 64px;
		justify-content: center;
	}

	.refresh-view {
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
	}

	.refresh-icon {
		width: 30px;
		height: 30px;
		transition-duration: .5s;
		transition-property: transform;
		transform: rotate(0deg);
		transform-origin: 15px 15px;
	}

	.refresh-icon-active {
		transform: rotate(180deg);
	}

	.loading-icon {
		width: 20px;
		height: 20px;
		margin-right: 5px;
		color: #999999;
	}

	.loading-text {
		margin-left: 2px;
		font-size: 16px;
		color: #999999;
	}

	.loading-more {
		align-items: center;
		justify-content: center;
		padding-top: 10px;
		padding-bottom: 10px;
		text-align: center;
	}

	.loading-more-text {
		font-size: 28rpx;
		color: #999;
	}
</style>
