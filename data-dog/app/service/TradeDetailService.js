'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class TradeDetailService extends Service {
  async create(tradeDetail) {
    const ctx = this.ctx;
    tradeDetail.updated_at = moment().utc().format();
    const data = await ctx.model.TradeDetail.create(tradeDetail);
    return data;
  }
}

module.exports = TradeDetailService;
