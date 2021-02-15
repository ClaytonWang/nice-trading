module.exports = {
  LOGIN: `/api/user/login`,
  ROUTES: `/api/routes`,
  STRATEGY: `/api/strategy`,
  TRADING: {
    PLAN: `/api/trading-plan`,
    DETAIL: `/api/trading-detail`
  },
  STOCK: `${process.env.VUE_APP_PUBLIC_PATH}/suggest/type=&name=suggestdata&key=`,
  DIARY: `/api/notepad`,
  UPLOAD: `/api/file`,
  ANALYSIS: `/api/analysis`
}
