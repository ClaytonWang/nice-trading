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
  router.resources('trades', '/api/trade', controller.tradeController);
  router.resources('trade-detail', '/api/trade-detail', controller.tradeDetailController);
  router.resources('comment', '/api/comment', controller.commentController);
  router.resources('setting', '/api/setting', controller.settingController);

};
