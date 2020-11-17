let api = window.baseUrl ? window.baseUrl : '/api';
const version = ''; //v1, v2

export default {
  TRADE: api + '/trade' + version,
  TRADE_DETAIL: api + '/trade-detail' + version,
  COMMENT: api + '/comment' + version,
};
