'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, TEXT, DECIMAL } = app.Sequelize;
  const AnalysisReport = app.model.define('analysis_report', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    plan_id: { type: INTEGER, allowNull: false },
    total_amount: { type: DECIMAL(12, 4), allowNull: true }, // 总持仓成本
    total_volume: { type: INTEGER, allowNull: true }, // 总持仓量
    risk: { type: DECIMAL(12, 4), allowNull: true }, // 风险额
    profit: { type: DECIMAL(12, 4), allowNull: true }, // 收益
    start_date: { type: DATE, allowNull: true }, // 建仓日期
    end_date: { type: DATE, allowNull: true }, // 清仓日期
    total_comment: { type: TEXT, allowNull: true }, // 所有的备忘
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });

  AnalysisReport.associate = function() {
    app.model.AnalysisReport.hasMany(app.model.TradingPlan, { foreignKey: 'plan_id', constraints: false });
  };

  return AnalysisReport;
};
