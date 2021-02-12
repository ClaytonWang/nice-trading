<template>
	<mescroll-body ref="mescrollRef" @init="mescrollInit" @up="upCallback" @down="downCallback">
		<MyEditor ref="my_editor" :title="title" :content="article" :readOnly="!isEdit" :useHtml="true" />
		<wyb-loading ref="loading" />
	</mescroll-body>
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
	import wybLoading from '@/components/wyb-loading/wyb-loading.vue';
	import MyEditor from './editor/editor.vue';
	export default {
		mixins: [commonMixin, MescrollMixin],
		components: {
			MyEditor,
			wybLoading
		},
		onLoad(options) {
			this.notepad_id = options.id;
			if (this.notepad_id) {
				this.isEdit = false;
			} else {
				this.isEdit = true;
			}
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			let $this = this;
			let actName = '编辑';
			if (this.isEdit) {
				actName = '保存';
			}
			let itemList = [actName, '删除'];
			uni.showActionSheet({
				itemList,
				success: function(res) {
					let i = res.tapIndex
					//保存
					if (itemList[i] === '保存') {
						$this.$refs.my_editor.editorCtx.getContents({
							success(res) {
								$this.submitNote({
									title: $this.$refs.my_editor.myTitle,
									delta: JSON.stringify(res.delta),
									html: res.html
								}).then(() => {
									uni.reLaunch({
										url: '/pages/notepad/note-list'
									});
								});
							}
						});
						$this.isEdit = !$this.isEdit;
					}
					//编辑
					if (itemList[i] === '编辑') {
						$this.isEdit = !$this.isEdit;
						return;
					}
					//删除
					if (itemList[i] === '删除') {
						if (!$this.notepad_id) {
							uni.reLaunch({
								url: '/pages/notepad/note-list'
							});
							return;
						}
						uni.showModal({
							content: `确定删除吗？`,
							showCancel: true,
							success: async (res) => {
								if (res.confirm) {
									$this.deleteNotePad($this.notepad_id).then(r => {
										if (r && r.data == 'OK') {
											uni.reLaunch({
												url: '/pages/notepad/note-list'
											});
										}
									});
								}
							}
						});
						return;
					}
				},
				fail: function(res) {}
			});

		},
		// #endif
		data() {
			const date = new Date();
			const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
			var weekday = new Array(7)
			weekday[0] = "星期天";
			weekday[1] = "星期一";
			weekday[2] = "星期二";
			weekday[3] = "星期三";
			weekday[4] = "星期四";
			weekday[5] = "星期五";
			weekday[6] = "星期六";
			return {
				article: '',
				title: formatDate + ' | ' + weekday[date.getDay()] + ' | 股票察觉日记',
				isEdit: false,
				notepad_id: ''
			}
		},
		methods: {
			...mapActions('Trading', ['addUpdateNotePad', 'getNotePads', 'deleteNotePad']),
			downCallback() {
				this.mescroll.resetUpScroll();
			},
			async getNote(id) {
				const res = await this.getNotePads({
					id
				});
				if (res && res.data) {
					this.article = res.data.content;
					
					if (res.data.title) {
						this.title = res.data.title;
						uni.setNavigationBarTitle({
							title: this.title
						});
					}
				}
				this.mescroll.endBySize(1, 1);
			},
			async upCallback(page) {
				if (this.notepad_id) {
					await this.getNote(this.notepad_id);
				} else {
					this.mescroll.endBySize(1, 1);
				}
			},
			async submitNote({
				title,
				delta,
				html
			}) {
				try {
					if (html == "<p><br></p>") {
						this.$msg('内容不能为空！');
						return;
					}
					let data = {
						title,
						delta,
						content: html
					};
					if (this.notepad_id) {
						data.id = this.notepad_id;
					}
					this.$refs.loading.showLoading();
					const resp = await this.addUpdateNotePad(data);
					if (resp && resp.data) {
						this.$msg('保存成功！');
					} else {
						this.$msg(resp);
					}
				} catch (e) {
					console.log(e);
				}
				this.$refs.loading.hideLoading();
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
