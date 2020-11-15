'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class TradeService extends Service {
  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.Trade.findAndCountAll({
      offset,
      limit,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    });
  }

  async create(trade) {
    const ctx = this.ctx;
    trade.updated_at = moment().utc().format();
    return await ctx.model.Trade.create(trade);
  }

  async find(id) {
    const trade = await this.ctx.model.Trade.findByPk(id, {
      include: [{
        model: this.ctx.model.TradeDetail,
        as: 'tradeDetails',
      }],
    });
    if (!trade) {
      this.ctx.throw(404, 'trade not found');
    }
    return trade;
  }

  async update({ id, updates }) {
    const trade = await this.ctx.model.Trade.findByPk(id);
    if (!trade) {
      this.ctx.throw(404, 'trade not found');
    }
    return trade.update(updates);
  }

  async del(id) {
    const trade = await this.ctx.model.Trade.findByPk(id);
    if (!trade) {
      this.ctx.throw(404, 'trade not found');
    }
    return trade.destroy();
  }

}

module.exports = TradeService;
