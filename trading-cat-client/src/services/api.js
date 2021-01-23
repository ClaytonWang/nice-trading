//跨域代理前缀
const API_PROXY_PREFIX='http://localhost:7001/api'
const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
// const BASE_URL = process.env.VUE_APP_API_BASE_URL+'/api'
module.exports = {
  LOGIN: `${BASE_URL}/user/login`,
  ROUTES: `${BASE_URL}/routes`,
  STRATEGY: `${BASE_URL}/strategy`,
}
