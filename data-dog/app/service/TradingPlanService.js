'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class TradingService extends Service {
  async list({ offset = 0, limit = 10, status }) {

    const options = {
      offset,
      limit,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
      include: [{
        // association: this.ctx.model.TradingPlan.hasMany(this.ctx.model.TradingDetail, { foreignKey: 'trading_plan_id', constraints: false }),
        model: this.ctx.model.TradingDetail,
      }, {
        model: this.ctx.model.Comment,
      }],
    };
    if (status !== undefined) {
      options.where = {
        status,
      };
    }
    return this.ctx.model.TradingPlan.findAndCountAll(options);
  }

  async create(trading) {
    const ctx = this.ctx;
    trading.updated_at = moment().utc().format();
    return await ctx.model.TradingPlan.create(trading);
  }

  async find(id) {
    // const trading = await this.ctx.model.TradingPlan.findByPk(id);
    const trading = await this.ctx.model.TradingPlan.findAll({
      where: { id },
      include: [{
        // association: this.ctx.model.TradingPlan.hasMany(this.ctx.model.TradingDetail, { foreignKey: 'trading_plan_id', constraints: false }),
        model: this.ctx.model.TradingDetail,
      }, {
        model: this.ctx.model.Comment,
      }],
    });
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
    const tradings = await this.find(id);

    if (!tradings) {
      this.ctx.throw(404, 'trading not found');
    }
    for (const plan of tradings) {
      for (const detail of plan.trading_details) {
        detail.destroy();
      }
      plan.destroy();
    }
    return {};
  }
}

module.exports = TradingService;
