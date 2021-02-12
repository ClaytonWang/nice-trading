<template>
	<view class="uni-common-mt">
		<form>
			<view class="uni-list list-pd">
				<view class="uni-list-cell cell-pd">
					<view class="uni-uploader">
						<view class="uni-uploader-body">
							<view class="uni-uploader__files">
								<block v-for="(image,index) in imageList" :key="index">
									<view class="uni-uploader__file">
										<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
									</view>
								</block>
								<view class="uni-uploader__input-box">
									<view class="uni-uploader__input" @tap="chooseImage"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</form>
	</view>
</template>
<script>
	import API from '../api/api.js'
	export default {
		props:{
			planId:{
				type:Number,
				default:undefined,
			},
			detailId:{
				type:Number,
				default:undefined
			},
			imageList:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
			}
		},
		onUnload() {
			this.imageList = []
		},
		methods: {
			chooseImage: async function() {
				uni.chooseImage({
					sourceType: ['album'],
					sizeType: ['original'],
					count: 20,
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
						console.log(res.tempFilePaths)
						for(let img of res.tempFilePaths){
							uni.showLoading({
								title: '上传中...'
							});
							uni.uploadFile({
								url: API.BASE_URL+'/api/file', // 接口地址
								filePath: img,
								name: 'image',
								formData:{
									'trading_plan_id':this.planId,
									'trading_detail_id':this.detailId
								},
								success(res) {
									const data = JSON.parse(res.data);
									let img_url = API.BASE_URL+data.url;
								},
								fail: function(res){
									console.log(res)
								},
								complete: uni.hideLoading
							});
						}
					},
					fail: (err) => {
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = false;
								authStatus = res.authSetting['scope.album'];
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: '需要从您的相机或相册获取图片，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
						// #endif
					}
				})
			},
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
		}
	}
</script>

<style>
	.cell-pd {
		padding: 10rpx;
	}
	
	/* 上传 */
	.uni-uploader {
		flex: 1;
		flex-direction: column;
	}
	.uni-uploader-head {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.uni-uploader-info {
		color: #B2B2B2;
	}
	.uni-uploader-body {
		margin-top: 16rpx;
	}
	.uni-uploader__files {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.uni-uploader__file {
		margin: 10rpx;
		width: 210rpx;
		height: 210rpx;
	}
	.uni-uploader__img {
		display: block;
		width: 210rpx;
		height: 210rpx;
	}
	.uni-uploader__input-box {
		position: relative;
		margin:10rpx;
		width: 208rpx;
		height: 208rpx;
		border: 2rpx solid #D9D9D9;
	}
	.uni-uploader__input-box:before,
	.uni-uploader__input-box:after {
		content: " ";
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		background-color: #D9D9D9;
	}
	.uni-uploader__input-box:before {
		width: 4rpx;
		height: 79rpx;
	}
	.uni-uploader__input-box:after {
		width: 79rpx;
		height: 4rpx;
	}
	.uni-uploader__input-box:active {
		border-color: #999999;
	}
	.uni-uploader__input-box:active:before,
	.uni-uploader__input-box:active:after {
		background-color: #999999;
	}
	.uni-uploader__input {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
	
</style>
