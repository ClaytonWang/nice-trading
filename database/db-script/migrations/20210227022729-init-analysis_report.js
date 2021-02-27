'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, DECIMAL, TEXT } = Sequelize;
    await queryInterface.createTable('analysis_report', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      plan_id: { type: INTEGER, allowNull: false },
      total_amount: { type: DECIMAL(12, 4), allowNull: true },//总持仓成本
      total_volume: { type: INTEGER, allowNull: true },//总持仓量
      profit: { type: DECIMAL(12, 4), allowNull: true },//收益
      start_date: { type: DATE, allowNull: true },//建仓日期
      end_date: { type: DATE, allowNull: true },//清仓日期
      total_comment: { type: TEXT, allowNull: true }, //所有的备忘
      created_at: { type: DATE, defaultValue: Sequelize.NOW, allowNull: false },
      updated_at: { type: DATE, defaultValue: Sequelize.NOW, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('analysis_report');
  },
};
