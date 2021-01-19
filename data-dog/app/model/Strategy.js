'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, TEXT, STRING } = app.Sequelize;
  const Strategy = app.model.define('strategy', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: STRING, allowNull: true },
    content: { type: TEXT, allowNull: true },
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });
  Strategy.associate = function() {
    app.model.Strategy.hasMany(app.model.TradingPlan, { foreignKey: 'strategy_id', constraints: false });
  };
  return Strategy;
};
