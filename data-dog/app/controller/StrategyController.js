'use strict';

const Controller = require('egg').Controller;

class StrategyController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
      trading_plan_id: ctx.helper.parseInt(ctx.query.trading_plan_id),
      trading_detail_id: ctx.helper.parseInt(ctx.query.trading_detail_id),
    };
    ctx.body = await ctx.service.strategyService.list(query);
    ctx.status = 200;
  }

  // eg: get api/trade/1
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.strategyService.find(ctx.helper.parseInt(ctx.params.id));
    ctx.status = 200;
  }

  // eg: post api/trade
  async create() {
    const ctx = this.ctx;
    // ctx.validate(createRule, ctx.request.body);
    const model = await ctx.service.strategyService.create(ctx.request.body);
    ctx.body = model;
    ctx.status = 201;
  }

  // eg: put api/trade/1
  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.strategyService.update({ id, updates: body });
    ctx.status = 200;
  }

  // eg: delete api/trade/1
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.strategyService.del(id);
    ctx.status = 200;
  }
}

module.exports = StrategyController;
