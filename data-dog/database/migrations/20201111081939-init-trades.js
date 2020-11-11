'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, DATE, DECIMAL } = Sequelize;
    await queryInterface.createTable('trades', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      buying_rate: DECIMAL,
      selling_rate: DECIMAL,
      commission: DECIMAL,
      stamp_tax: DECIMAL,
      trade_type: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('trades');
  },
};
