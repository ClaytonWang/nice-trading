'use strict';

const Controller = require('egg').Controller;

class TradeDetailController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.params.limit),
      offset: ctx.helper.parseInt(ctx.params.offset),
      trading_plan_id: ctx.helper.parseInt(ctx.query.trading_plan_id),
    };
    ctx.body = await ctx.service.tradingDetailService.list(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.tradingDetailService.find(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    // ctx.validate(createRule, ctx.request.body);
    const tadeDetail = await ctx.service.tradingDetailService.create(ctx.request.body);
    ctx.body = tadeDetail;
    ctx.status = 201;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    ctx.body = await ctx.service.tradingDetailService.update({ id, updates: ctx.request.body });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.tradingDetailService.destroy(id);
    ctx.status = 200;
  }
}

module.exports = TradeDetailController;
