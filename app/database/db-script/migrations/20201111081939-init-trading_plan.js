'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, DECIMAL, TEXT } = Sequelize;
    await queryInterface.createTable('trading_plan', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      code: { type: STRING, allowNull: true },
      symbol: { type: STRING, allowNull: true },
      name: { type: STRING, allowNull: true },
      plan_price: { type: DECIMAL(12, 4), allowNull: true },
      plan_volume: { type: INTEGER, allowNull: true },
      risk: { type: DECIMAL(12, 4), allowNull: true },
      stop_loss: { type: DECIMAL(12, 4), allowNull: true },
      take_profit: { type: DECIMAL(12, 4), allowNull: true },
      exec_start_date: { type: DATE, allowNull: true },
      exec_end_date: { type: DATE, allowNull: true },
      priority: { type: INTEGER, defaultValue: 0, allowNull: false },
      status: { type: INTEGER, defaultValue: 1, allowNull: false },
      comment: { type: TEXT, allowNull: true },
      created_at: { type: DATE, defaultValue: Sequelize.NOW, allowNull: false },
      updated_at: { type: DATE, defaultValue: Sequelize.NOW, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('trade');
  },
};
