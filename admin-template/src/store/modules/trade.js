import * as apiTrade from '@/api/trade';

export default {
  namespaced: true,
  state: {
    trades: [],
    trade_details: [],
  },
  mutations: {
    SET_TRADES(state, trades) {
      state.trades = trades;
    },
    ADD_TRADE(state, trade) {
      state.trades.unshift(trade);
    },

    DEL_TRADE(state, trade_id) {
      const index = state.trades.findIndex((item) => {
        return item.id === trade_id;
      });
      state.trades.splice(index, 1);
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
          commit('ADD_TRADE', data);
        } else {
          console.log(data);
        }
      } catch (e) {
        console.log(e);
      }
    },

    async delTrade({ commit }, id) {
      try {
        const data = await apiTrade.delTrade(id);
        if (data) {
          commit('DEL_TRADE', id);
        } else {
          console.log(data);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
