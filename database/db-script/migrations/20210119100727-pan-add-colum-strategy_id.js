'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DECIMAL } = Sequelize;
    const fields = await queryInterface.describeTable('trading_plan'); // 放到这个表中
    const t = await queryInterface.sequelize.transaction();
    try {
      if (!fields.hasOwnProperty('strategy_id')) {
        await queryInterface.addColumn('trading_plan', 'strategy_id', { type:  INTEGER, allowNull: true, after: 'name' }, {transaction:t});
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
