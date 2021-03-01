<template>
	<view class="container">
		<wyb-drop-down ref="dropDown" :options="options" drop-icon="line" @select="onItemSelect">
			<!-- 自定义模式开启时，这里可以放内容 -->
			<view class="cell-cust">
				<picker mode="date" :value="form.exec_start_date" :start="startDate" :end="endDate" @change="bindStartDateChange">
					<view class="uni-input">{{form.exec_start_date | moment("YYYY-MM-DD")}}</view>
				</picker>
				<text class="gap">到</text>
				<picker mode="date" :value="form.exec_end_date" :start="startDate" :end="endDate" @change="bindEndDateChange">
					<view class="uni-input">{{form.exec_end_date | moment("YYYY-MM-DD")}}</view>
				</picker>
				<!-- <button class="submit" >确认</button> -->
			</view>
		</wyb-drop-down>
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @up="upCallback" @down="downCallback">
			<wyb-table ref="table" :headers="headers" :contents="contents" :format-col="formatcol" />
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
	import wybTable from '@/components/wyb-table/wyb-table.vue'
	import wybDropDown from '@/components/wyb-drop-down/wyb-drop-down.vue'
	import moment from 'moment';
	
	export default {
		components: {
			wybTable,
			wybDropDown
		},
		mixins: [commonMixin, MescrollMixin],
		data() {
			return {
				headers: [{
					label: '名称',
					key: 'name',
				}, {
					label: '总额',
					key: 'total_amount',
				}, {
					label: '风险',
					key: 'risk',
					isNumber: true
				}, {
					label: '收益',
					key: 'profit'
				}, {
					label: '收益率',
					key: 'rate_profit'
				}, {
					label: '战法',
					key: 'strategy_title'
				}, {
					label: '建仓',
					key: 'start_date'
				}, {
					label: '清仓',
					key: 'end_date'
				}],
				formatcol: [{
					key: 'total_amount',
					template: '#total_amount#',
					bottomComputedFormat: true
				}, {
					key: 'risk',
					template: '#risk#',
					bottomComputedFormat: false
				}],
				offset: 0,
				limit: 10,
				contents: [],
				options: [{
					header: '日期',
					custom: true // 该栏目开启自定义模式
				}, {
					header: '战法',
					contents: ['选项5', '选项6', '选项7', '选项8']
				}],
				form: {
					exec_start_date: moment().day(-6),
					exec_end_date: moment(),
				},
			}
		},
		async onLoad() {

		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			...mapActions('Trading', ['getAnalysisReport']),
			onItemSelect(){},
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
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
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
			async getList(params) {
				const res = await this.getAnalysisReport(params);
				if (res.data && res.data.count > 0) {
					this.contents = res.data.rows.map(item => {
						return {
							...item,
							risk: item.trading_plan.risk,
							name: item.trading_plan.name,
							strategy_title: item.trading_plan.strategy.title
						}
					});
					let curPageLen = res.data.rows.length;
					let totalSize = res.data.count;
					this.mescroll.endBySize(curPageLen, totalSize);
				} else {
					this.$msg(data.errMsg);
					this.contents = [];
					this.mescroll.endErr();
				}
			}
		}
	}
</script>

<style lang='scss' scoped>
	.container {
		padding: $page-row-spacing;
		width: 100%;
		
		.cell-cust {
			width: 100%;
			height: 60upx;
			line-height: 60upx;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			padding: 60upx 0;
		}
		
		.submit {
			margin: 60upx 20upx;
			background: $uni-color-blue;
			color: #fff;
			font-size: $font-md;
		}
	}
	
</style>
