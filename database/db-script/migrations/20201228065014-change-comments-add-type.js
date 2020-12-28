'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING,TEXT } = Sequelize;
    const fields = await queryInterface.describeTable('comment'); // 放到这个表中
    const t = await queryInterface.sequelize.transaction();
    try {
      if (!fields.hasOwnProperty('type')) {
        await queryInterface.addColumn('comment', 'title', { type: STRING, allowNull: true, after: 'comment' }, {transaction:t});
        await queryInterface.addColumn('comment', 'type', { type: STRING, allowNull: true, defaultValue: 'html', after: 'title' }, { transaction: t });
        await queryInterface.addColumn('comment', 'delta', { type: TEXT, allowNull: true, after: 'title' }, {transaction:t});
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
