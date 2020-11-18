'use strict';

const Controller = require('egg').Controller;
// 定义创建接口的请求参数规则
const createRule = {
  accesstoken: 'string',
  title: 'string',
  tab: { type: 'enum', values: [ 'ask', 'share', 'job' ], required: false },
  content: 'string',
};

class TradeController extends Controller {
  // eg: get api/trade
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    ctx.body = await ctx.service.tradeService.list(query);
  }

  // eg: get api/trade/1
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.tradeService.find(ctx.helper.parseInt(ctx.params.id));
  }

  // eg: post api/trade
  async create() {
    const ctx = this.ctx;
    // ctx.validate(createRule, ctx.request.body);
    const tade = await ctx.service.tradeService.create(ctx.request.body);
    ctx.body = tade;
    ctx.status = 201;
  }

  // eg: put api/trade/1
  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.tradeService.update({ id, updates: body });
  }

  // eg: delete api/trade/1
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.tradeService.del(id);
    ctx.status = 200;
  }
}

module.exports = TradeController;
