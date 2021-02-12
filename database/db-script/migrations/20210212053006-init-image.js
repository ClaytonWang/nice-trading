'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, TEXT } = Sequelize;
    await queryInterface.createTable('image', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      trading_plan_id: { type: INTEGER, allowNull: true },
      trading_detail_id:{ type: INTEGER, allowNull: true},
      image_url: { type: TEXT, allowNull: true },
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
