/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1604915011593_4632';

  // add your middleware config here
  config.middleware = [ 'errorHandler' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    sequelize: {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      database: 'my_trading',
      host: 'trading-db',
      port: 3306,
      username: 'nice_trading',
      password: 'Password1',
      define: {
        timestamps: false,
        freezeTableName: true,
      },
    },
    security: {
      csrf: {
        enable: false,
        ignoreJSON: true,
      },
      domainWhiteList: [ '*' ],
    },
    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    multipart: {
      mode: 'stream',
      fileSize: '50mb',
    },
    view: {
      defaultViewEngine: 'nunjucks',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
