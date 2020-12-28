'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, TEXT, STRING } = app.Sequelize;
  const Comment = app.model.define('comment', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    trading_plan_id: { type: INTEGER, allowNull: true },
    trading_detail_id: { type: INTEGER, allowNull: true },
    comment: { type: TEXT, allowNull: true },
    title: { type: STRING, allowNull: true },
    type: { type: STRING, allowNull: true, defaultValue: 'html' }, // markdown, html,text
    delta: { type: TEXT, allowNull: true }, // for editor delta proroty json data
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });

  return Comment;
};
