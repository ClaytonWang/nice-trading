module.exports = {
  LOGIN: `/user/login`,
  ROUTES: `/routes`,
  STRATEGY: `/strategy`,
  TRADING: {
    PLAN: `/trading-plan`,
    DETAIL: `/trading-detail`
  },
  STOCK: `${process.env.VUE_APP_PUBLIC_PATH}/suggest/type=&name=suggestdata&key=`,
  DIARY: `/notepad`
}
