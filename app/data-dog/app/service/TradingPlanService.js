'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class TradingService extends Service {
  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.TradingPlan.findAndCountAll({
      offset,
      limit,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    });
  }

  async create(trading) {
    const ctx = this.ctx;
    trading.updated_at = moment().utc().format();
    return await ctx.model.TradingPlan.create(trading);
  }

  async find(id) {
    const trading = await this.ctx.model.TradingPlan.findByPk(id);
    if (!trading) {
      this.ctx.throw(404, 'trading not found');
    }
    return trading;
  }

  async update({ id, updates }) {
    const trading = await this.ctx.model.TradingPlan.findByPk(id);
    if (!trading) {
      this.ctx.throw(404, 'trading not found');
    }
    return trading.update(updates);
  }

  async del(id) {
    const trading = await this.ctx.model.TradingPlan.findByPk(id);
    if (!trading) {
      this.ctx.throw(404, 'trading not found');
    }
    return trading.destroy();
  }

}

module.exports = TradingService;
