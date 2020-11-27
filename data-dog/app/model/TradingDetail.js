'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, DECIMAL, STRING } = app.Sequelize;
  const TradingDetail = app.model.define('trading_detail', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    trading_plan_id: { type: INTEGER, allowNull: false },
    trade_price: { type: DECIMAL(12, 4), allowNull: true },
    trade_volume: { type: INTEGER, allowNull: true },
    trade_date: { type: DATE, allowNull: true },
    commission: { type: DECIMAL(12, 4), allowNull: true },
    stamp_tax: { type: DECIMAL(12, 4), allowNull: true },
    trade_type: { type: STRING, allowNull: false },
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });

  TradingDetail.associate = function() {
    app.model.TradingDetail.belongsTo(app.model.TradingPlan, { foreignKey: 'trading_plan_id', constraints: false });
  };

  return TradingDetail;
};
