import actions from './actions';
import mutations from './mutations';

const state = {
		socketTask: null,
		is_open_socket: false
	},
	
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};