'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // home
  router.get('/', controller.homeController.index);
  // router.get('/list', controller.home.list);
  // router.get('/detail', controller.home.detail);

  // login
  // router.get('/login', controller.user.login);
  // router.get('/authCallback', controller.user.authCallback);
  // router.post('/login', app.passport.authenticate('local', { successRedirect: '/authCallback' }));

  // logout
  // router.get('/logout', controller.user.logout);

  //
  // router.get('/trades/:id', controller.trades.get);s

  // restfull api
  router.resources('trading-plan', '/api/trading-plan', controller.tradingPlanController);
  router.resources('trading-detail', '/api/trading-detail', controller.tradingDetailController);
  router.resources('comment', '/api/comment', controller.commentController);
  router.resources('setting', '/api/setting', controller.settingController);
  router.resources('user', '/api/user', controller.userController);
  router.resources('notepad', '/api/notepad', controller.notePadController);
  router.resources('strategy', '/api/strategy', controller.strategyController);
  router.resources('analysis', '/api/analysis', controller.analysisController);
  router.resources('analysis-report', '/api/analysis-report', controller.analysisReportController);

  router.get('/api/file', controller.fileStoreController.show);
  router.post('/api/file', controller.fileStoreController.upload);

  router.post('/auth/login', controller.authController.login);
  router.post('/auth/logout', controller.authController.logout);
  router.post('/auth/2step-code', controller.authController.twofactor);

  router.get('/user/info', controller.userController.info);

  router.delete('/api/delByPlan', controller.analysisReportController.delByPlan);

};
