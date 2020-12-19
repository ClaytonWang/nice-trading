'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    const fields = await queryInterface.describeTable('trading_detail');
    const t = await queryInterface.sequelize.transaction();
    try {
      if (fields.hasOwnProperty('comment')) {
        await queryInterface.removeColumn('trading_detail', 'comment', {transaction:t});
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
