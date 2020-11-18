import * as apiTrade from '@/api/trade';
import CreateLogger from 'vuex/dist/logger';
const debug = process.env.NODE_ENV !== 'production';
export default {
  namespaced: true,
  strict: debug,
  plugins: debug ? [CreateLogger()] : [],
  state: {
    trades: [],
  },
  mutations: {
    SET_TRADES(state, trades) {
      state.trades = trades;
    },
    ADD_TRADES(state, trade) {
      state.trades.unshift(trade);
    },
  },
  actions: {
    async getTrades({ commit }) {
      const data = await apiTrade.getTrades();
      commit('SET_TRADES', data.rows);
    },

    async addTrades({ commit }, trade) {
      try {
        const data = await apiTrade.addTrade(trade);
        if (data.id) {
          commit('ADD_TRADES', data);
        } else {
          console.log(data);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
