'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, TEXT } = Sequelize;
    await queryInterface.createTable('comments', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      trade_detail_id: { type: INTEGER, allowNull: false },
      comment: { type: TEXT, allowNull: true },
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
  },
};
