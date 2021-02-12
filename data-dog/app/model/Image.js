'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, TEXT } = app.Sequelize;
  const Image = app.model.define('image', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    trading_plan_id: { type: INTEGER, allowNull: true },
    trading_detail_id: { type: INTEGER, allowNull: true },
    image_url: { type: TEXT, allowNull: true },
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });

  return Image;
};
