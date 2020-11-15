'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, DECIMAL } = app.Sequelize;
  const TradeDetail = app.model.define('trade_detail', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    trade_id: { type: INTEGER, allowNull: false },
    buying_rate: { type: DECIMAL, allowNull: true },
    buying_amount: { type: INTEGER, allowNull: true },
    buying_date: { type: DATE, allowNull: true },
    selling_rate: { type: DECIMAL, allowNull: true },
    selling_amount: { type: INTEGER, allowNull: true },
    selling_date: { type: DATE, allowNull: true },
    commission: { type: DECIMAL, allowNull: true },
    stamp_tax: { type: DECIMAL, allowNull: true },
    trade_type: { type: INTEGER, allowNull: false },
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });

  TradeDetail.prototype.associate = function() {
    app.model.TradeDetail.hasMany(app.model.Comment);
  };

  TradeDetail.associate = function() {
    app.model.TradeDetail.belongsTo(app.model.Trade, { as: 'trade', foreignKey: 'trade_id' });
  };

  return TradeDetail;
};
