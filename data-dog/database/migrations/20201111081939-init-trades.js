'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, DECIMAL, TEXT } = Sequelize;
    await queryInterface.createTable('trades', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      code: { type: STRING, allowNull: true },
      name: { type: STRING, allowNull: true },
      stop_loss: { type: DECIMAL, allowNull: true },
      take_profit: { type: DECIMAL, allowNull: true },
      plan_amount: { type: INTEGER, allowNull: true },
      exec_date: { type: DATE, allowNull: true },
      comment: { type: TEXT, allowNull: true },
      created_at: { type: DATE, defaultValue: Sequelize.NOW, allowNull: false },
      updated_at: { type: DATE, defaultValue: Sequelize.NOW, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('trades');
  },
};
