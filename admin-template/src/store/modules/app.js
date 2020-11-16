export default {
  namespaced: true,
  state: {
    sidebar: localStorage.getItem('sidebar')
      ? JSON.parse(localStorage.getItem('sidebar'))
      : true,
    device: 'desktop'
  },
  mutations: {
    TOGGLE_SIDEBAR(state, sidebar) {
      localStorage.setItem('sidebar', sidebar)
      state.sidebar = sidebar
    },
    TOGGLE_DEVICE(state, device) {
      state.device = device
    }
  },
  actions: {
    toggleSidebar({ commit }, sidebar) {
      commit('TOGGLE_SIDEBAR', sidebar)
    },
    toggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    }
  }
}
