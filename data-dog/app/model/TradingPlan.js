'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, STRING, DECIMAL, TEXT } = app.Sequelize;
  const TradingPlan = app.model.define('trading_plan', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: STRING, allowNull: true },
    name: { type: STRING, allowNull: true },
    plan_price: { type: DECIMAL(12, 4), allowNull: true },
    plan_amount: { type: INTEGER, allowNull: true },
    stop_loss: { type: DECIMAL(12, 4), allowNull: true },
    take_profit: { type: DECIMAL(12, 4), allowNull: true },
    exec_date: { type: DATE, allowNull: true },
    comment: { type: TEXT, allowNull: true },
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });

  TradingPlan.prototype.associate = function() {
    app.model.TradingPlan.hasMany(app.model.TradingDetail, { as: 'tradingDetail', foreignKey: 'trading_plan_id', constraints: false });
  };

  return TradingPlan;
};
