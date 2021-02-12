<template>
	<view class="container">
		<view class="page-body">
			<view class="title">
				<input  type="text" class="cell-input" v-model="myTitle" placeholder="请输标题" />
			</view>
			<view class='wrapper'>
				<view class='toolbar' @tap="format" v-if="!readOnly">
					<view :class="formats.bold ? 'ql-active' : ''" class="iconfont icon-zitijiacu" data-name="bold"></view>
					<view :class="formats.italic ? 'ql-active' : ''" class="iconfont icon-zitixieti" data-name="italic"></view>
					<view :class="formats.underline ? 'ql-active' : ''" class="iconfont icon-zitixiahuaxian" data-name="underline"></view>
					<view :class="formats.strike ? 'ql-active' : ''" class="iconfont icon-zitishanchuxian" data-name="strike"></view>
					<view :class="formats.align === 'left' ? 'ql-active' : ''" class="iconfont icon-zuoduiqi" data-name="align"
					 data-value="left"></view>
					<view :class="formats.align === 'center' ? 'ql-active' : ''" class="iconfont icon-juzhongduiqi" data-name="align"
					 data-value="center"></view>
					<view :class="formats.align === 'right' ? 'ql-active' : ''" class="iconfont icon-youduiqi" data-name="align"
					 data-value="right"></view>
					<view :class="formats.align === 'justify' ? 'ql-active' : ''" class="iconfont icon-zuoyouduiqi" data-name="align"
					 data-value="justify"></view>
					<view :class="formats.lineHeight ? 'ql-active' : ''" class="iconfont icon-line-height" data-name="lineHeight"
					 data-value="2"></view>
					<view :class="formats.letterSpacing ? 'ql-active' : ''" class="iconfont icon-Character-Spacing" data-name="letterSpacing"
					 data-value="2em"></view>
					<view :class="formats.marginTop ? 'ql-active' : ''" class="iconfont icon-722bianjiqi_duanqianju" data-name="marginTop"
					 data-value="20px"></view>
					<view :class="formats.previewarginBottom ? 'ql-active' : ''" class="iconfont icon-723bianjiqi_duanhouju"
					 data-name="marginBottom" data-value="20px"></view>
					<view class="iconfont icon-clearedformat" @tap="removeFormat"></view>
					<view :class="formats.fontFamily ? 'ql-active' : ''" class="iconfont icon-font" data-name="fontFamily" data-value="Pacifico"></view>
					<view :class="formats.fontSize === '24px' ? 'ql-active' : ''" class="iconfont icon-fontsize" data-name="fontSize"
					 data-value="24px"></view>

					<view :class="formats.color === '#0000ff' ? 'ql-active' : ''" class="iconfont icon-text_color" data-name="color"
					 data-value="#0000ff"></view>
					<view :class="formats.backgroundColor === '#00ff00' ? 'ql-active' : ''" class="iconfont icon-fontbgcolor"
					 data-name="backgroundColor" data-value="#00ff00"></view>

					<view class="iconfont icon-date" @tap="insertDate"></view>
					<view class="iconfont icon--checklist" data-name="list" data-value="check"></view>
					<view :class="formats.list === 'ordered' ? 'ql-active' : ''" class="iconfont icon-youxupailie" data-name="list"
					 data-value="ordered"></view>
					<view :class="formats.list === 'bullet' ? 'ql-active' : ''" class="iconfont icon-wuxupailie" data-name="list"
					 data-value="bullet"></view>
					<view class="iconfont icon-undo" @tap="undo"></view>
					<view class="iconfont icon-redo" @tap="redo"></view>

					<view class="iconfont icon-outdent" data-name="indent" data-value="-1"></view>
					<view class="iconfont icon-indent" data-name="indent" data-value="+1"></view>
					<view class="iconfont icon-fengexian" @tap="insertDivider"></view>
					<view class="iconfont icon-charutupian" @tap="insertImage"></view>
					<view :class="formats.header === 1 ? 'ql-active' : ''" class="iconfont icon-format-header-1" data-name="header"
					 :data-value="1"></view>
					<view :class="formats.script === 'sub' ? 'ql-active' : ''" class="iconfont icon-zitixiabiao" data-name="script"
					 data-value="sub"></view>
					<view :class="formats.script === 'super' ? 'ql-active' : ''" class="iconfont icon-zitishangbiao" data-name="script"
					 data-value="super"></view>
					<view :class="formats.direction === 'rtl' ? 'ql-active' : ''" class="iconfont icon-direction-rtl" data-name="direction"
					 data-value="rtl"></view>
					<view class="iconfont icon-shanchu" @tap="clear"></view>
				</view>
				<view v-if="!readOnly">
					<br />
					<hr>
				</view>
				<editor id="my_editor" 
					class="ql-container"
					placeholder="请输入..."
					:showImgSize="!readOnly"
					:showImgToolbar="!readOnly"
					:showImgResize="!readOnly"
					@statuschange="onStatusChange"
					:read-only="readOnly"
					@ready="onEditorReady">
				</editor>
			</view>
		</view>
	</view>
</template>

<script>
	import template from '../../utils/note_template.js'
	export default {
		name:"MyEditor",
		props:{
			title:{
				type:String,
				default:'',
			},
			content:{
				type:String,
				default:''
			},
			readOnly:{
				type:Boolean,
				default:false
			},
			useHtml:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				formats: {},
				myTitle:this.title,
				editorCtx:null
			}
		},
		watch:{
			title(v){
				this.myTitle = v;
			},
			content(v){
				if(!this.editorCtx) return;
				if(v){
					if(this.useHtml){
						this.editorCtx.setContents({
							html:v
						});
					}else{
						const delta = JSON.parse(v);
						this.editorCtx.setContents({ delta });
					}
				}else{
					this.editorCtx.setContents({
						html:template.note
					});
				}
			}
		},
		methods: {
			onEditorReady() {
				uni.createSelectorQuery().select('#my_editor').context((res) => {
					this.editorCtx = res.context;
					if(this.content){
						if(this.useHtml){
							this.editorCtx.setContents({
								html:this.content
							});
						}else{
							const delta = JSON.parse(this.content);
							this.editorCtx.setContents({ delta });
						}
					}else{
						this.editorCtx.setContents({
							html:template.note
						});
					}
				}).exec();
			},
			undo() {
				this.editorCtx.undo()
			},
			redo() {
				this.editorCtx.redo()
			},
			format(e) {
				let {
					name,
					value
				} = e.target.dataset;
				if (!name) return;
				this.editorCtx.format(name, value);
			},
			onStatusChange(e) {
				const formats = e.detail
				this.formats = formats
			},
			insertDivider() {
				this.editorCtx.insertDivider({
					success: function() {
						console.log('insert divider success')
					}
				})
			},
			clear() {
				this.editorCtx.clear({
					success: function(res) {
						console.log("clear success")
					}
				})
			},
			removeFormat() {
				this.editorCtx.removeFormat()
			},
			insertDate() {
				const date = new Date()
				const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
				this.editorCtx.insertText({
					text: formatDate
				})
			},
			insertImage() {
				let $this = this;
				uni.chooseImage({
					count: 1,
					success: (img) => {
						/* 实际使用时，这里需要上传到服务器后返回*/
						uni.showLoading({
							title: '上传中'
						})
						uni.uploadFile({
							url: 'https://api.moyebuy.com/api/file', // 接口地址
							filePath: img.tempFilePaths[0],
							name: 'image',
							success(res) {
								const data = JSON.parse(res.data);
								$this.editorCtx.insertImage({
									src: 'https://api.moyebuy.com'+data.url,
									alt: '图像',
									success: function() {
										console.log('insert image success')
									}
								});
							},
							fail: function(res){},
							complete: uni.hideLoading
						});
					}
				})
			},
		},
	}
</script>

<style>
	@import "./editor-icon.css";
	.container {
		padding: $page-row-spacing;
		width: 100%;
		background: #fff;
	}
	.title{
		margin: 20px 5px;
		padding-bottom: 10px;
		border-bottom: 1px solid #C0C4CC;
	}
	.wrapper {
		padding: 5px;
	}

	.iconfont {
		display: inline-block;
		padding: 8px 8px;
		width: 24px;
		height: 24px;
		cursor: pointer;
		font-size: 22px;
	}

	.toolbar {
		box-sizing: border-box;
		border-bottom: 0;
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
	}


	.ql-container {
		box-sizing: border-box;
		padding: 12px 15px;
		width: 100%;
		min-height: 30vh;
		height: auto;
		font-size: 14px;
		line-height: 1.5;
	}

	.ql-active {
		color: #06c;
	}
</style>
