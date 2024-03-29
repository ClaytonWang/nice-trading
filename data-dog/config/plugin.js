'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // mysql: {
  //   enable: true,
  //   package: 'egg-mysql',
  // },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  // validate: {
  //   enable: true,
  //   package: 'egg-validate',
  // },

  cors: {
    enable: true,
    package: 'egg-cors',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
};
