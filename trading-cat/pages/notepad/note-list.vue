<template>
	<view class="container">
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @up="upCallback" @down="downCallback">
			<uni-list :border="true">
			    <uni-list-item 
					v-for="(item,index) in note_list" 
					:title="item.title"
					clickable="true"
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
	  				url: "/pages/notepad/editor/editor?isEdit=false"
	  			})
	  		},
	  		fail: function(res) {}
	  	});
	  },
	  // #endif
	  methods: {
		  ...mapActions('Trading', ['getComments']),
		navTo(id) {
			uni.navigateTo({
				url: `/pages/notepad/note-detail?id=${id}`
			})
		},
		async getList(params) {
			const res = await this.getComments(params);
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
			let offset = page.num - 1; // 页码, 默认从1开始
			let limit = page.size; // 页长, 默认每页10条
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
