// 跨域代理前缀
const API_PROXY_PREFIX = 'http://localhost:7001/api'
const PROXY_PREFIX = 'http://localhost:8080'
const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
const STOCK_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_STOCK_URL : PROXY_PREFIX
// const BASE_URL = process.env.VUE_APP_API_BASE_URL+'/api'
module.exports = {
  LOGIN: `${BASE_URL}/user/login`,
  ROUTES: `${BASE_URL}/routes`,
  STRATEGY: `${BASE_URL}/strategy`,
  TRADING: {
    PLAN: `${BASE_URL}/trading-plan`,
    DETAIL: `${BASE_URL}/trading-detail`
  },
  STOCK:STOCK_URL+'/suggest/type=&name=suggestdata&key='
}
