import defaultSettings from '@/settings'

export default {
  namespaced: true,
  state: {
    ...defaultSettings
  },
  mutations: {
    CHANGE_SETTING(state, { key, value }) {
      // eslint-disable-next-line no-prototype-builtins
      if (state.hasOwnProperty(key)) {
        state[key] = value
      }
    }
  },
  actions: {
    changeSetting({ commit }, setting) {
      commit('CHANGE_SETTING', setting)
    }
  }
}
