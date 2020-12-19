'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, TEXT, STRING } = app.Sequelize;
  const Comment = app.model.define('comment', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    external_id: { type: STRING, allowNull: false },
    comment: { type: TEXT, allowNull: true },
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });

  return Comment;
};
