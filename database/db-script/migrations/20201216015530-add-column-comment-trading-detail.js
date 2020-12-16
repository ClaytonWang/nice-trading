'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { TEXT } = Sequelize;
    const fields = await queryInterface.describeTable('trading_detail'); // 放到这个表中
    const t = await queryInterface.sequelize.transaction();
    try {
      if (!fields.hasOwnProperty('comment')) {
        await queryInterface.addColumn('trading_detail', 'comment', { type: TEXT, allowNull: true, after: 'trading_type' }, {transaction:t});
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
