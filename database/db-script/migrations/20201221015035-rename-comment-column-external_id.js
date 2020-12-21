'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    const fields = await queryInterface.describeTable('comment'); // 放到这个表中
    const t = await queryInterface.sequelize.transaction();
    try {
      if (fields.hasOwnProperty('external_id')) {
        await queryInterface.removeColumn('comment', 'external_id', { transaction: t });
        await queryInterface.addColumn('comment', 'trading_plan_id', { type: INTEGER, allowNull: true, after: 'id' }, { transaction: t });
        await queryInterface.addColumn('comment', 'trading_detail_id', { type: INTEGER, allowNull: true, after: 'trading_plan_id' }, {transaction:t});
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
