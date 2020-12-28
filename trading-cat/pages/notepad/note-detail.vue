<template>
	<mescroll-body ref="mescrollRef" @init="mescrollInit" @up="upCallback" @down="downCallback">
		<u-parse :content="article" @preview="preview" @navigate="navigate" ></u-parse>
	</mescroll-body>
	
</template>

<script>
	import marked from 'marked';
	import uParse from '@/components/u-parse/u-parse.vue';
	import {
		mapState,
		mapActions
	} from 'vuex';
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import { commonMixin } from '@/common/mixin/mixin.js';
	export default {
	  mixins: [commonMixin, MescrollMixin],
	  components: {
	    uParse
	  },
	  onLoad(options) {
	  	this.comment_id = options.id;
	  },
	  data () {
	    return {
	      //article: '<b>我是HTML代码</b>'
		  article: '',
		  comment_id:''
	    }
	  },
	  methods: {
		  ...mapActions('Trading', ['getNotePads']),
	    preview(src, e) {
	      // do something
	    },
	    navigate(href, e) {
	      // do something
	    },
		downCallback() {
			this.mescroll.resetUpScroll();
		},
		async getNote(id) {
			const res = await this.getNotePads({id});
			if (res && res.data) {
				if(res.data.type=='markdown'){
					this.article = marked(res.data.comment);
				}else{
					this.article = res.data.comment;
				}
			}
			this.mescroll.endBySize(1, 1);
		},
		async upCallback(page) {
			await this.getNote(this.comment_id);
		},
	  }
	}
</script>

<style lang='scss' scoped>
	page {
		background: $page-color-base;
	}
	.container {
		padding: $page-row-spacing;
		width: 100%;
	}
	
</style>
<style>
	@import url("@/components/u-parse/u-parse.css");
</style>

