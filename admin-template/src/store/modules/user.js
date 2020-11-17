import { login, getInfo } from '@/api/auth';
import { setToken, getToken, removeToken } from '@/utils/auth';
import { resetRouter } from '@/router';

export default {
  namespaced: true,
  state: {
    token: getToken(),
    info: {
      permissions: [],
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_INFO(state, info) {
      state.info = info;
    },
  },
  actions: {
    async doLogin({ commit }, user) {
      const { data } = await login(user);
      setToken(data.token);
      commit('SET_TOKEN', data.token);
    },
    async doLogout({ dispatch }) {
      dispatch('doClear');
      dispatch('tagsView/delAllViews', null, { root: true });
    },
    async doGetInfo({ commit }) {
      const { data } = await getInfo();
      commit('SET_INFO', data);
    },
    doClear({ commit }) {
      removeToken();
      resetRouter();
      commit('SET_TOKEN', '');
      commit('SET_INFO', { permissions: [] });
    },
  },
};
