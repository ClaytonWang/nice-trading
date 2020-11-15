'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, STRING, DECIMAL, TEXT } = app.Sequelize;
  const Trade = app.model.define('trade', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: STRING, allowNull: true },
    name: { type: STRING, allowNull: true },
    stop_loss: { type: DECIMAL, allowNull: true },
    take_profit: { type: DECIMAL, allowNull: true },
    plan_amount: { type: INTEGER, allowNull: true },
    exec_date: { type: DATE, allowNull: true },
    comment: { type: TEXT, allowNull: true },
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });

  return Trade;
};
