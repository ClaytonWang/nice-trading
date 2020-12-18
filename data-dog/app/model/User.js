'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, STRING } = app.Sequelize;
  const Setting = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING, allowNull: false },
    password: { type: STRING, allowNull: false },
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });

  return Setting;
};
