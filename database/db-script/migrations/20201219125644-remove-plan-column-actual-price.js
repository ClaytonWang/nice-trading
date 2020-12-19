'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    const fields = await queryInterface.describeTable('trading_plan');
    const t = await queryInterface.sequelize.transaction();
    try {
      if (fields.hasOwnProperty('actual_price')) {
        await queryInterface.removeColumn('trading_plan', 'actual_price', {transaction:t});
      }
      await t.commit();
    } catch (err) {
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
