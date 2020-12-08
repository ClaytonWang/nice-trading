'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, DATE, DECIMAL } = app.Sequelize;
  const Setting = app.model.define('setting', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: INTEGER, allowNull: false },
    total_amount: { type: DECIMAL(12, 4), allowNull: true },
    total_risk: { type: DECIMAL(12, 4), allowNull: true }, // 账户当月最大风险额度 6%
    single_risk: { type: DECIMAL(12, 4), allowNull: true }, // 单只股票当次交易的最大风险额度 2%
    commission_rate: { type: DECIMAL(12, 4), allowNull: true }, // 佣金比，如万2.5
    fee_rate: { type: DECIMAL(12, 4), allowNull: true }, // 税费比，如千分之1
    created_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
    updated_at: { type: DATE, defaultValue: moment().utc().format(), allowNull: false },
  });

  return Setting;
};
