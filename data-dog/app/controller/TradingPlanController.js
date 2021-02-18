'use strict';

const Controller = require('egg').Controller;

class TradeController extends Controller {
  // eg: get api/trade
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
      status: ctx.query.status ? ctx.helper.parseInt(ctx.query.status) : undefined,
      start: ctx.query.start ? ctx.query.start : undefined,
      end: ctx.query.end ? ctx.query.end : undefined,
    };
    ctx.body = await ctx.service.tradingPlanService.list(query);
  }

  // eg: get api/trade/1
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.tradingPlanService.find(ctx.helper.parseInt(ctx.params.id));
  }

  // eg: post api/trade
  async create() {
    const ctx = this.ctx;
    // ctx.validate(createRule, ctx.request.body);
    let tade = await ctx.service.tradingPlanService.create(ctx.request.body);
    tade = await ctx.service.tradingPlanService.find(tade.id);
    ctx.body = tade;
    ctx.status = 201;
  }

  // eg: put api/trade/1
  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.tradingPlanService.update({ id, updates: body });
  }

  // eg: delete api/trade/1
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    ctx.body = await ctx.service.tradingPlanService.del(id);
    ctx.status = 200;
  }
}

module.exports = TradeController;
