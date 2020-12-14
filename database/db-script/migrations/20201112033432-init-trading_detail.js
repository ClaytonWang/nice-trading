'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, DECIMAL, STRING,TEXT } = Sequelize;
    await queryInterface.createTable('trading_detail', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      trading_plan_id: { type: INTEGER, allowNull: false },
      trading_price: { type: DECIMAL(12, 4), allowNull: true },
      trading_volume: { type: INTEGER, allowNull: true },
      trading_date: { type: DATE, allowNull: true },
      commission: { type: DECIMAL(12, 4), allowNull: true },
      stamp_tax: { type: DECIMAL(12, 4), allowNull: true },
      trading_type: { type: STRING, allowNull: false },
      comment: { type: TEXT, allowNull: true },
      created_at: { type: DATE, defaultValue: Sequelize.NOW, allowNull: false },
      updated_at: { type: DATE, defaultValue: Sequelize.NOW, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
