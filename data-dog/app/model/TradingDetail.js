'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, DECIMAL, STRING } = app.Sequelize;
  const TradingDetail = app.model.define('trading_detail', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    trading_plan_id: { type: INTEGER, allowNull: false },
    trading_price: { type: DECIMAL(12, 4), allowNull: true },
    trading_volume: { type: INTEGER, allowNull: true },
    trading_date: { type: DATE, allowNull: true },
    commission: { type: DECIMAL(12, 4), allowNull: true },
    stamp_tax: { type: DECIMAL(12, 4), allowNull: true },
    trading_type: { type: STRING, allowNull: false },
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });

  TradingDetail.associate = function() {
    app.model.TradingDetail.belongsTo(app.model.TradingPlan, { foreignKey: 'trading_plan_id', constraints: false });
    app.model.TradingDetail.hasMany(app.model.Comment, { foreignKey: 'trading_detail_id', constraints: false });
  };

  return TradingDetail;
};
