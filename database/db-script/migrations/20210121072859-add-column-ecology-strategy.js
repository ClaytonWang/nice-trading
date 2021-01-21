'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING } = Sequelize;
    const fields = await queryInterface.describeTable('strategy'); // 放到这个表中
    const t = await queryInterface.sequelize.transaction();
    try {
      if (!fields.hasOwnProperty('ecology')) {
        await queryInterface.addColumn('strategy', 'ecology', { type:  STRING, allowNull: true, after: 'title' }, {transaction:t});
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
