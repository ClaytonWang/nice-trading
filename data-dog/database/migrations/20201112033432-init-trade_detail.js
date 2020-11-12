'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, DECIMAL } = Sequelize;
    await queryInterface.createTable('trade_detail', {
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
      created_at: { type: DATE, allowNull: true },
      updated_at: { type: DATE, allowNull: true },
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
