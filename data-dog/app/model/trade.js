'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING } = app.Sequelize;
  const Trade = app.model.define('trade', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: STRING, allowNull: true },
    name: { type: STRING, allowNull: true },
    created_at: DATE,
    updated_at: DATE,
  });

  return Trade;
};
