'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class TradeDetailService extends Service {
  async list({ offset = 0, limit = 10, trade_id }) {
    const options = {
      offset,
      limit,
      attributes: [ 'id', 'trade_id', 'created_at', 'updated_at' ],
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    };
    if (trade_id) {
      options.where = {
        trade_id,
      };
    }
    return this.ctx.model.TradeDetail.findAndCountAll(options);
  }

  async find(id) {
    const tradeDetail = await this.ctx.model.TradeDetail.findByPk(id, {
      include: [{
        model: this.ctx.model.Trade,
        as: 'trade',
        attributes: [ 'id', 'name', 'created_at', 'updated_at' ],
      }],
    });
    if (!tradeDetail) {
      this.ctx.throw(404, 'tradeDetail not found');
    }
    return tradeDetail;
  }

  async create(tradeDetail) {
    const ctx = this.ctx;
    tradeDetail.updated_at = moment().utc().format();
    const data = await ctx.model.TradeDetail.create(tradeDetail);
    return data;
  }

  async update({ id, updates }) {
    const tradeDetail = await this.ctx.model.TradeDetail.findByPk(id);
    if (!tradeDetail) this.ctx.throw(404, 'trade detail not found');
    return tradeDetail.update(updates);
  }

  async destroy({ id }) {
    const tradeDetail = await this.ctx.model.TradeDetail.findByPk(id);
    if (!tradeDetail) this.ctx.throw(404, 'trade detail not found');
    return tradeDetail.destroy();
  }
}

module.exports = TradeDetailService;
