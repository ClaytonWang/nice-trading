/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    sequelize: {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      database: 'my_trading',
      host: 'localhost',
      port: 3306,
      username: 'nice_trading',
      password: 'Password1',
      define: {
        timestamps: false,
        freezeTableName: true,
      },
    },
  };

  return {
    ...userConfig,
  };
};
