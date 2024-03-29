'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, DECIMAL } = app.Sequelize;
  const AnalysisReport = app.model.define('analysis_report', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    plan_id: { type: INTEGER, allowNull: false },
    total_amount: { type: DECIMAL(12, 4), allowNull: true }, // 总持仓成本
    total_volume: { type: INTEGER, allowNull: true }, // 总持仓量
    profit: { type: DECIMAL(12, 4), allowNull: true }, // 收益
    start_date: { type: DATE, allowNull: true }, // 建仓日期
    end_date: { type: DATE, allowNull: true }, // 清仓日期
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });

  AnalysisReport.associate = function() {
    app.model.AnalysisReport.belongsTo(app.model.TradingPlan, { foreignKey: 'plan_id', constraints: false });
  };

  return AnalysisReport;
};
