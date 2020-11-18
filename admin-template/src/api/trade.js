import ajax from '@/utils/ajax';
import api from './resource';

export const getTrades = () => ajax.get(api.TRADE);

export const addTrade = (data) => ajax.post(api.TRADE, data);

export const delTrade = (id) => ajax.delete(api.TRADE + '/' + id);

export const getTradeDetails = (trade_id) =>
  ajax.get(api.TRADE_DETAIL, { params: { trade_id } });

export const addTradeDetail = (data) => ajax.post(api.TRADE_DETAIL, data);

export const delTradeDetail = (id) => ajax.delete(api.TRADE_DETAIL + '/' + id);

export const getTradeComments = (id) =>
  ajax.get(api.COMMENT, { params: { id } });
