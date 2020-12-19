'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class TradingDetailService extends Service {
  async list({ offset = 0, limit = 10, trading_plan_id }) {
    const options = {
      offset,
      limit,
      // attributes: [ 'id', 'trading_plan_id', 'created_at', 'updated_at' ],
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
      include: [{
        model: this.ctx.model.TradingPlan,
        // attributes: [ 'id', 'code', 'symbol', 'name', 'created_at', 'updated_at' ],
      }, {
        model: this.ctx.model.Comment,
      }],
    };
    if (trading_plan_id) {
      options.where = {
        trading_plan_id,
      };
    }
    return this.ctx.model.TradingDetail.findAndCountAll(options);
  }

  async find(id) {
    const tradingDetail = await this.ctx.model.TradingDetail.findByPk(id, {
      include: [{
        model: this.ctx.model.TradingPlan,
        // attributes: [ 'id', 'code', 'symbol', 'name', 'created_at', 'updated_at' ],
      }, {
        model: this.ctx.model.Comment,
      }],
    });
    if (!tradingDetail) {
      this.ctx.throw(404, 'TradingDetail not found');
    }
    return tradingDetail;
  }

  async create(model) {
    const ctx = this.ctx;
    model.updated_at = moment().utc().format();
    const newDetail = await ctx.model.TradingDetail.create(model);
    const coment = {
      external_id: 'detail_' + newDetail.id,
      comment: model.comment,
      updated_at: moment().utc().format(),
    };
    const data = await ctx.model.Comment.create(coment);
    newDetail.comment = data;
    return newDetail;
  }

  async update({ id, updates }) {
    const tradingDetail = await this.ctx.model.TradingDetail.findByPk(id);
    if (!tradingDetail) this.ctx.throw(404, 'trading detail not found');
    return tradingDetail.update(updates);
  }

  async destroy(id) {
    try {
      const tradingDetail = await this.find(id);
      if (!tradingDetail) this.ctx.throw(404, 'trading detail not found');

      for (const comment of tradingDetail.comments) {
        comment.destroy();
      }
      return tradingDetail.destroy();
    } catch (err) {
      return err;
    }
  }
}

module.exports = TradingDetailService;
