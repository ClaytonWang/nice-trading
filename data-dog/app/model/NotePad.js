'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, TEXT, STRING } = app.Sequelize;
  const NotePad = app.model.define('notepad', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: STRING, allowNull: true },
    content: { type: TEXT, allowNull: true },
    type: { type: STRING, allowNull: true },
    delta: { type: TEXT, allowNull: true },
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });

  return NotePad;
};
