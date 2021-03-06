<template>
	<view class="container">
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">总资产</text>
			<input v-model="form.total_amount" type="number" class="cell-input" placeholder="请输入" />
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">总风险额</text>
			<input v-model="form.total_risk" type="number" class="cell-input" placeholder="请输入" />
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">单支险额</text>
			<input v-model="form.single_risk" type="number" class="cell-input" placeholder="请输入" />
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">佣金℅</text>
			<input v-model="form.commission_rate" type="number" class="cell-input" placeholder="请输入" />
		</view>
		<view class="list-cell b-b" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">税费‰</text>
			<input v-model="form.fee_rate" type="number" class="cell-input" placeholder="请输入" />
		</view>
		<button class="submit" @click="submit">提交</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex';
	import {
		commonMixin,
		authMixin
	} from '@/common/mixin/mixin.js';
	export default {
		mixins: [commonMixin],
		data() {
			return {
				form: {
					user_id: "",
					total_amount: "",
					total_risk: "",
					single_risk: "",
					commission_rate: 1.5,
					fee_rate: 1,
				}
			}
		},
		async onLoad() {
			const res = await this.getSetting(1);
			if (res && res.data) {
				this.form = res.data;
				this.form.commission_rate = (res.data.commission_rate * 10000);
				this.form.fee_rate = (res.data.fee_rate * 1000);
			}
		},
		methods: {
			...mapActions('Trading', ['addUpdateSetting', "getSetting"]),
			async submit() {
				if (!this.form.total_amount) {
					this.$msg('请输入资产总额');
					return;
				}

				if (!this.form.total_risk) {
					this.$msg('请输入总风险');
					return;
				}

				if (!this.form.single_risk) {
					this.$msg('请输入单支风险');
					return;
				}

				if (!this.form.commission_rate) {
					this.$msg('请输入佣金');
					return;
				}

				if (!this.form.fee_rate) {
					this.$msg('请输入税率');
					return;
				}
				this.form.user_id = 1;
				const res = await this.addUpdateSetting(this.form);
				if (res && res.data) {
					this.$msg("添加成功!");
					setTimeout(() => {
						uni.navigateBack({});
					}, 800);
				} else {
					console.log(res);
					this.$msg(res.errMsg);
				}
			}
		}
	}
</script>

<style lang='scss' scoped>
	.container {
		width: 100%;
	}

	page {
		background: $page-color-base;
	}

	.list-cell {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		padding: 30upx $page-row-spacing;
		line-height: 60upx;
		position: relative;
		background: #fff;
		justify-content: space-between;

		&.cell-hover {
			background: #fafafa;
		}

		&.b-b:after {
			left: 30upx;
		}

		&.m-t {
			margin-top: 16upx;
		}

		.cell-tit {
			font-size: $font-base + 2upx;
			color: $font-color-dark;
		}

		.cell-input {
			font-size: $font-base;
			text-align: right;
		}
	}

	.submit {
		margin: 60upx 20upx;
		background: $uni-color-blue;
		color: #fff;
		font-size: $font-md;
	}
</style>
