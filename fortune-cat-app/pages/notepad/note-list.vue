<template>
	<view class="container">
		<mescroll-body ref="mescrollRef" :down="downOption" :up="upOption" @init="mescrollInit" @up="upCallback" @down="downCallback">
			<uni-list :border="true">
			    <uni-list-item 
					v-for="(item,index) in note_list" 
					:title="item.title"
					:showArrow="true"
					clickable
					@click="navTo(item.id)"></uni-list-item>
			</uni-list>
		</mescroll-body>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex';
	import {
		commonMixin
	} from '@/common/mixin/mixin.js';
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [commonMixin, MescrollMixin],
	  data () {
	    return {
			note_list: [],
			downOption:{
				auto:true
			},
			upOption:{
				auto:false, // 不自动加载
				noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
				isBounce: true,
				page: {
					num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
					size: 15 // 每页数据的数量
				},
				empty:{
					tip: '~ 空空如也 ~'
				}
			},
	    }
	  },
	  // #ifndef MP
	  onNavigationBarButtonTap(e) {
	  	let $this = this;
	  	uni.showActionSheet({
	  		itemList: ['添加笔记'],
	  		success: function(res) {
	  			let i = res.tapIndex
	  			uni.navigateTo({
	  				url: "/pages/notepad/note-detail"
	  			})
	  		},
	  		fail: function(res) {}
	  	});
	  },
	  // #endif
	  methods: {
		  ...mapActions('Trading', ['getNotePads']),
		navTo(id) {
			uni.navigateTo({
				url: `/pages/notepad/note-detail?id=${id}`
			})
		},
		async getList(params) {
			const res = await this.getNotePads(params);
			if (res && res.data) {
				if (params.offset == 0) {
					this.note_list = [];
				}
				this.note_list = this.note_list.concat(res.data.rows);
				let curPageLen = res.data.rows.length;
				let totalSize = res.data.count;
				this.mescroll.endBySize(curPageLen, totalSize);
			} else {
				this.$msg(data.errMsg);
				this.note_list = [];
				this.mescroll.endErr();
			}
		},
		downCallback() {
			this.mescroll.resetUpScroll();
		},
		async upCallback(page) {
			let offset = page.num; // 页码, 默认从1开始
			let limit = page.size; // 页长, 默认每页10条
			offset = (offset-1) * limit;
			await this.getList({
				offset,
				limit
			});
		},
	  }
	}
</script>

<style lang='scss' scoped>
	.container {
		padding: $page-row-spacing;
		width: 100%;
	}
</style>
