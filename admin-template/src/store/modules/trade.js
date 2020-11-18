import { getTrades } from '@/api/trade';

export default {
  namespaced: true,
  state: {
    trades: [],
  },
  mutations: {
    SET_TRADES(state, trades) {
      state.trades = trades;
    },
  },
  actions: {
    async getTrades({ commit }) {
      const { data } = await getTrades();
      commit('SET_TRADES', data);
    },
  },
};
