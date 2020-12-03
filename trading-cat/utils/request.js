import _config from './config'; // 导入私有配置
import G from './global.js'
export default function $http(options) {
	// 进行url字符串拼接，_config.url是再config中配置要请求的域名或者id+端口号这样方便管理，
	// options.url是index中请求配置的，完美拼接

	if(options.isThirdURL){
		options.url = G.THIRD_URL + options.url;
	}else{
		options.url = _config.url + options.url;
	}
	

	return new Promise((resolve, reject) => {
		if (options.data && options.data.authCode) {
			_config.header['Fex-auth'] = options.data.authCode
		}
		// 拦截请求
		let token = uni.getStorageSync('token')
		if (token) {
			_config.header.Authorization = token;
		}
		_config.complete = (response) => {
			// 登录失效这边后台是返回403看情况
			if (response.statusCode === 403) {
				//返回登录界面
				uni.navigateTo({
					url: '/pages/login/login'
				});
				uni.showToast({
					icon: 'none',
					title: '登录已失效'
				});
			} else if (response.statusCode === 200 || response.statusCode === 201) {
				resolve(response);
			} else {
				uni.showToast({
					icon: 'none',
					title: response
				});
				reject(response);
			}
		}
		_config.fail = (response) => {
			uni.showToast({
				icon: 'none',
				title: '系统异常,请稍后再试'
			});
		}
		// 开始请求
		uni.request(Object.assign({}, _config, options));
	})
}
