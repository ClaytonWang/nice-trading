'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, TEXT } = app.Sequelize;
  const Comment = app.model.define('comment', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    trading_detail_id: { type: INTEGER, allowNull: false },
    comment: { type: TEXT, allowNull: true },
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });

  Comment.associate = function() {
    app.model.Comment.belongsTo(app.model.TradingDetail, { foreignKey: 'trading_detail_id' });
  };

  return Comment;
};