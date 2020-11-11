'use strict';

module.exports = app => {
  const { INTEGER, DATE, DECIMAL } = app.Sequelize;
  const Trade = app.model.define('trade', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    buying_rate: DECIMAL,
    selling_rate: DECIMAL,
    commission: DECIMAL,
    stamp_tax: DECIMAL,
    trade_type: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return Trade;
};
