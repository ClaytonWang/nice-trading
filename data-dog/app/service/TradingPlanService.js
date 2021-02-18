'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class TradingService extends Service {
  async list({ offset = 0, limit = 10, status }) {

    const options = {
      offset,
      limit,
      distinct: true,
      order: [[ 'exec_end_date', 'desc' ]],
      include: [{
        // association: this.ctx.model.TradingPlan.hasMany(this.ctx.model.TradingDetail, { foreignKey: 'trading_plan_id', constraints: false }),
        model: this.ctx.model.TradingDetail,
      }, {
        attributes: [ 'id', 'trading_plan_id', 'comment', 'created_at' ],
        model: this.ctx.model.Comment,
      }, {
        attributes: [ 'id', 'title', 'created_at' ],
        model: this.ctx.model.Strategy,
      }, {
        attributes: [ 'id', 'image_url', 'created_at' ],
        model: this.ctx.model.Image,
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
    const newTrading = await ctx.model.TradingPlan.create(trading);

    const coment = {
      trading_plan_id: newTrading.id,
      comment: trading.comment,
      updated_at: moment().utc().format(),
    };
    const data = await ctx.model.Comment.create(coment);
    newTrading.comment = data;
    return newTrading;

  }

  async find(id) {
    const trading = await this.ctx.model.TradingPlan.findByPk(id, {
      include: [{
        // association: this.ctx.model.TradingPlan.hasMany(this.ctx.model.TradingDetail, { foreignKey: 'trading_plan_id', constraints: false }),
        model: this.ctx.model.TradingDetail,
        include: [{
          model: this.ctx.model.Comment,
        }],
      }, {
        model: this.ctx.model.Strategy,
      }, {
        model: this.ctx.model.Comment,
      }, {
        model: this.ctx.model.Image,
      }],
    });
    if (!trading) {
      this.ctx.throw(404, 'trading not found');
    }
    return trading;
  }

  async update({ id, updates }) {
    console.log(updates);
    const trading = await this.ctx.model.TradingPlan.findByPk(id);
    if (!trading) {
      this.ctx.throw(404, 'trading not found');
    }

    const comment = await this.ctx.model.Comment.findByPk(updates.comments[0].id);
    comment.update(updates.comments[0]);

    return trading.update(updates);
  }

  async del(id) {
    try {
      const plan = await this.ctx.model.TradingPlan.findByPk(id, {
        include: [{
          model: this.ctx.model.TradingDetail,
        }, {
          model: this.ctx.model.Comment,
        }, {
          model: this.ctx.model.Image,
        }],
      });

      if (!plan) {
        this.ctx.throw(404, 'trading not found');
      }
      for (const detail of plan.trading_details) {
        this.service.tradingDetailService.destroy(detail.id);
      }
      for (const comment of plan.comments) {
        comment.destroy();
      }
      for (const image of plan.images) {
        image.destroy();
      }
      plan.destroy();
    } catch (err) {
      return err.message;
    }
    return {};
  }
}

module.exports = TradingService;
