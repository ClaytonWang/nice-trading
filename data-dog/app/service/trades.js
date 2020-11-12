'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class TradeService extends Service {
  async create(trade) {
    const ctx = this.ctx;
    trade.created_at = moment().format();
    trade.updated_at = moment().format();
    const data = await ctx.model.Trade.create(trade);
    return data;
  }
}

module.exports = TradeService;
