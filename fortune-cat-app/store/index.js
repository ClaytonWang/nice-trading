import Vue from 'vue'
import Vuex from 'vuex'
//import Websocket from './modules/websocket'
import Trading from './modules/trading';

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		//Websocket,
		Trading
	},
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		userName: ""
	},
	mutations: {
		login(state, userName) {
			state.userName = userName || '新用户';
			state.hasLogin = true;
		},
		logout(state) {
			state.userName = "";
			state.hasLogin = false;
		}
	}
})

export default store
