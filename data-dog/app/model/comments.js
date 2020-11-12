'use strict';

module.exports = app => {
  const { INTEGER, DATE, TEXT } = app.Sequelize;
  const Comments = app.model.define('comments', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    trade_detail_id: { type: INTEGER, allowNull: false },
    comment: { type: TEXT, allowNull: true },
    created_at: DATE,
    updated_at: DATE,
  });

  return Comments;
};
