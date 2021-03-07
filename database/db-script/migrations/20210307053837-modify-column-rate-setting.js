'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DECIMAL } = Sequelize;
    const fields = await queryInterface.describeTable('setting'); // 放到这个表中
    const t = await queryInterface.sequelize.transaction();
    try {
      if (fields.hasOwnProperty('commission_rate')) {
        await queryInterface.changeColumn('setting', 'commission_rate',{ type: DECIMAL(12, 8), allowNull: true }, { transaction: t });
      }
      if (fields.hasOwnProperty('fee_rate')) {
        await queryInterface.changeColumn('setting', 'fee_rate',{ type: DECIMAL(12, 8), allowNull: true }, { transaction: t });
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
