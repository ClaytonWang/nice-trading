'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, STRING, DECIMAL } = app.Sequelize;
  const TradingPlan = app.model.define('trading_plan', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: STRING, allowNull: true }, // 600010
    symbol: { type: STRING, allowNull: true }, // sh_b00010
    name: { type: STRING, allowNull: true }, // 南极电商
    actual_price: { type: DECIMAL(12, 4), allowNull: true },
    plan_price: { type: DECIMAL(12, 4), allowNull: true },
    plan_volume: { type: INTEGER, allowNull: true },
    risk: { type: DECIMAL(12, 4), allowNull: true },
    stop_loss: { type: DECIMAL(12, 4), allowNull: true },
    take_profit: { type: DECIMAL(12, 4), allowNull: true },
    exec_start_date: { type: DATE, allowNull: true },
    exec_end_date: { type: DATE, allowNull: true },
    priority: { type: INTEGER, defaultValue: 0, allowNull: false },
    status: { type: INTEGER, defaultValue: 1, allowNull: false },
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });

  TradingPlan.associate = function() {
    app.model.TradingPlan.hasMany(app.model.TradingDetail, { foreignKey: 'trading_plan_id', constraints: false });
    app.model.TradingPlan.hasMany(app.model.Comment, { foreignKey: 'external_id', constraints: false });
  };

  return TradingPlan;
};
