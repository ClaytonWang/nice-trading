'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // home
  router.get('/', controller.home.index);
  // router.get('/list', controller.home.list);
  // router.get('/detail', controller.home.detail);

  // login
  // router.get('/login', controller.user.login);
  // router.get('/authCallback', controller.user.authCallback);
  // router.post('/login', app.passport.authenticate('local', { successRedirect: '/authCallback' }));

  // logout
  // router.get('/logout', controller.user.logout);

  //
  // router.get('/trades/:id', controller.trades.get);

  // restfull api
  router.resources('trades', '/api/trades', controller.trades);

};
