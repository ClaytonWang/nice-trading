import ajax from '@/utils/ajax';
import api from './resource';

export const getTrades = () => ajax.get(api.TRADE);

export const addTrade = (data) => ajax.post(api.TRADE, data);

export const getTradeDetails = () => ajax.get(api.TRADE_DETAIL);

export const getTradeComments = () => ajax.get(api.COMMENT);
