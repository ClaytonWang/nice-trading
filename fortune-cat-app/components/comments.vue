<template>
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
					 <textarea v-model="cmt.comment" 
						placeholder-style="color:#F76260" 
						placeholder="请输入内容" 
						:maxlength="-1" 
						auto-height
						style="width: 100%; font-size: 28upx;"></textarea>
				</uni-forms>
			</view>
		</view>
		<wyb-loading ref="loading" />
	</uni-popup>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		uniPopup,
		uniIcons
	} from '@dcloudio/uni-ui';
	import wybLoading from '@/components/wyb-loading/wyb-loading.vue';
	export default {
		components: {
			uniPopup,
			uniIcons,
			wybLoading,
		},
		created() {
			this.$on('open', function(data) {
				if (data) {
					this.cmt = data;
				}
				this.$refs.popup.open();
			});
		},

		data() {
			return {
				cmt: {
					comment: '',
					id: '',
					trading_plan_id: '',
					trading_detail_id: ''
				}
			}
		},
		methods: {
			...mapActions('Trading', ['addComents']),
			closePop() {
				this.$refs.popup.close();
			},
			async submitComment() {
				try {
					let data = {
						comment: this.cmt.comment,
					};

					if (this.cmt.id) {
						data.id = this.cmt.id;
					}

					if (this.cmt.trading_plan_id) {
						data.trading_plan_id = this.cmt.trading_plan_id;
					}

					if (this.cmt.trading_detail_id) {
						data.trading_detail_id = this.cmt.trading_detail_id;
					}

					if (!data.comment) {
						this.$msg('内容不能为空！');
						return;
					}
					if(data.trading_detail_id && data.trading_plan_id){
						this.$msg('plan id 或 detail id不能为空！');
						return;
					}
					this.$refs.loading.showLoading();
					const resp = await this.addComents(data);
					if (resp && resp.data) {
						this.$msg('添加成功！');
						this.closePop();
						this.$emit('added',resp.data);
					} else {
						this.$msg(resp.errMsg);
					}
				} catch (e) {
					console.log(e);
				}
				this.$refs.loading.hideLoading();
			},
		}
	}
</script>

<style lang="scss">
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
</style>
