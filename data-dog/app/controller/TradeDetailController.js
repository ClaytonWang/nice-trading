'use strict';

const Controller = require('egg').Controller;
// 定义创建接口的请求参数规则
const createRule = {
  accesstoken: 'string',
  title: 'string',
  tab: { type: 'enum', values: [ 'ask', 'share', 'job' ], required: false },
  content: 'string',
};

class TradeDetailController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    ctx.body = await ctx.service.tradeDetailService.list(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.tradeDetailService.find(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    // ctx.validate(createRule, ctx.request.body);
    const tadeDetail = await ctx.service.tradeDetailService.create(ctx.request.body);
    ctx.body = tadeDetail;
    ctx.status = 201;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    ctx.body = await ctx.service.tradeDetailService.update({ id, updates: ctx.request.body });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.tradeDetailService.destroy({ id });
    ctx.status = 200;
  }
}

module.exports = TradeDetailController;
