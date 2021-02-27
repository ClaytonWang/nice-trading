'use strict';

const Controller = require('egg').Controller;

class AnalysisReportController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    ctx.body = await ctx.service.analysisReportService.list(query);
    ctx.status = 200;
  }

  // eg: get api/trade/1
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.analysisReportService.find(ctx.helper.parseInt(ctx.params.id));
    ctx.status = 200;
  }

  // eg: post api/trade
  async create() {
    const ctx = this.ctx;
    // ctx.validate(createRule, ctx.request.body);
    const data = await ctx.service.analysisReportService.create(ctx.request.body);
    ctx.body = data;
    ctx.status = 201;
  }

  // eg: put api/trade/1
  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.analysisReportService.update({ id, updates: body });
    ctx.status = 200;
  }

  // eg: delete api/trade/1
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.analysisReportService.del(id);
    ctx.status = 200;
  }

}

module.exports = AnalysisReportController;
