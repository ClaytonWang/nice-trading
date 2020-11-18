import * as apiTrade from '@/api/trade';

export default {
  namespaced: true,
  state: {
    trade_details: [],
  },
  mutations: {
    SET_TRADE_DETAILS(state, trade_details) {
      state.trade_details = trade_details;
    },

    ADD_TRADE_DETAIL(state, trade_detail) {
      state.trade_details.unshift(trade_detail);
    },

    DEL_TRADE_DETAIL(state, detail_id) {
      const index = state.trade_details.findIndex((item) => {
        return item.id === detail_id;
      });
      state.trade_details.splice(index, 1);
    },
  },
  actions: {
    async getTradeDetails({ commit }, detail_id) {
      const data = await apiTrade.getTradeDetails(detail_id);
      commit('SET_TRADE_DETAILS', data.rows);
    },

    async addTradeDetail({ commit }, trade_detail) {
      try {
        const data = await apiTrade.addTradeDetail(trade_detail);
        if (data.id) {
          commit('ADD_TRADE_DETAIL', data);
        } else {
          console.log(data);
        }
      } catch (e) {
        console.log(e);
      }
    },

    async delTradeDetail({ commit }, detail_id) {
      try {
        const data = await apiTrade.delTradeDetail(detail_id);
        if (data) {
          commit('DEL_TRADE_DETAIL', detail_id);
        } else {
          console.log(data);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
