'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING } = Sequelize;
    const fields = await queryInterface.describeTable('comment'); // 放到这个表中
    const t = await queryInterface.sequelize.transaction();
    try {
      if (fields.hasOwnProperty('external_id')) {
        await queryInterface.removeColumn('comment', 'external_id', { transaction: t });
        await queryInterface.addColumn('comment', 'external_id', { type: STRING, allowNull: true, after: 'id' }, {transaction:t});
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
