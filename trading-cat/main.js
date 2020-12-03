import Vue from 'vue'
import App from './App'

import store from './store'

import uView from "uview-ui";
Vue.use(uView);

import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)
Vue.use(require('vue-moment'));

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const navTo = (url)=>{
	uni.navigateTo({
		url: url
	})
}
const msg = (title, duration=1500, mask=false, icon='none', success)=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon,
		success
	});
}

Vue.prototype.$msg = msg;
Vue.prototype.$navTo = navTo;

const app = new Vue({
	store,
	...App
})
app.$mount()
