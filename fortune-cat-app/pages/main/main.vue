<template>
	<view class="content">
		<wyb-table ref="table" :headers="headers" :contents="contents" height="100%" width="100%" :url-col="urlCol" />
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import wybTable from '@/components/wyb-table/wyb-table.vue'
	export default {
		components: {
			wybTable
		},
		data() {
			const theUrl = '/pages/demos/noticeBar-demo/more' // 本地的某个页面
			const httpUrl = 'https://ext.dcloud.net.cn/plugin?id=2667' // 某个网址
			return {
				headers: [{
					label: '姓名',
					key: 'name'
				}, {
					label: '年龄',
					key: 'age'
				}, {
					label: '学院',
					key: 'collage'
				}, {
					label: '成绩',
					key: 'score'
				}, {
					label: '路由',
					key: 'url'
				}, {
					label: '网址',
					key: 'link'
				}],
				contents: [{
					name: '刘一',
					age: '',
					collage: '信息学院',
					score: '99',
					url: ['查看更多', theUrl],
					link: ''
				}, {
					name: '陈二',
					age: '18',
					collage: '商学院',
					score: '98',
					url: ['我带参数', theUrl, {
						name: '陈二'
					}],
					link: ''
				}, {
					name: '张三',
					age: '22',
					collage: '统计与数学学院',
					score: '97',
					url: ['查看更多', theUrl],
					link: ''
				}, {
					name: '李四',
					age: '19',
					collage: '城市与环境学院',
					score: '96',
					url: '',
					link: ['访问网址', httpUrl]
				}, {
					name: '王五',
					age: '20',
					collage: '旅游与酒店管理学院',
					score: '95',
					url: ['查看更多', theUrl],
					link: ''
				}, {
					name: '赵六 ',
					age: '20',
					collage: '',
					score: '88',
					url: ['查看更多', theUrl],
					link: ''
				}, {
					name: '孙七',
					age: '21',
					collage: '',
					score: '95',
					url: '',
					link: ['访问网址', httpUrl]
				}, {
					name: '周八 ',
					age: '21',
					collage: '会计学院',
					score: '85',
					url: ['查看更多', theUrl],
					link: ''
				}, {
					name: '吴九 ',
					age: '20',
					collage: '',
					score: '91',
					url: ['查看更多', theUrl],
					link: ''
				}, {
					name: '郑十',
					age: '19',
					collage: '',
					score: '95',
					url: '',
					link: ['访问网址', httpUrl]
				}],
				urlCol: [{
					type: 'route',
					key: 'url'
				}, {
					type: 'http',
					key: 'link'
				}]
			}},
			computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
				onLoad() {
					const loginType = uni.getStorageSync('login_type')
					if (loginType === 'local') {
						this.login(uni.getStorageSync('username'))
						return
					}
					let uniIdToken = uni.getStorageSync('uniIdToken')
					if (uniIdToken) {
						this.login(uni.getStorageSync('username'))
						uniCloud.callFunction({
							name: 'user-center',
							data: {
								action: 'checkToken',
							},
							success: (e) => {

								console.log('checkToken success', e);

								if (e.result.code > 0) {
									//token过期或token不合法，重新登录
									if (this.forcedLogin) {
										uni.reLaunch({
											url: '../login/login'
										});
									} else {
										uni.navigateTo({
											url: '../login/login'
										});
									}
								}
							},
							fail(e) {
								uni.showModal({
									content: JSON.stringify(e),
									showCancel: false
								})
							}
						})
					} else {
						//this.guideToLogin()
					}
				},
				methods: {
					...mapMutations(['login']),
					guideToLogin() {
						uni.showModal({
							title: '未登录',
							content: '您未登录，需要登录后才能继续',
							/**
							 * 如果需要强制登录，不显示取消按钮
							 */
							showCancel: !this.forcedLogin,
							success: (res) => {
								if (res.confirm) {
									/**
									 * 如果需要强制登录，使用reLaunch方式
									 */
									if (this.forcedLogin) {
										uni.reLaunch({
											url: '../login/login'
										});
									} else {
										uni.navigateTo({
											url: '../login/login'
										});
									}
								}
							}
						});
					}
				}

		}
</script>

<style>
	.container {
		padding: $page-row-spacing;
		width: 100%;
	}
</style>
