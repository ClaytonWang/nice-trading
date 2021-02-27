'use strict';

const Controller = require('egg').Controller;

class AnalysisController extends Controller {
  async index() {
    const ctx = this.ctx;
    const totalData = await ctx.service.analysisService.totalAnalysis();

    const strategyUseRate = [];

    for (const key in totalData.strategyUse) {
      strategyUseRate.push({
        item: key, count: totalData.strategyUse[key].total,
      });
    }

    const strategyWinRate = [];
    for (const key in totalData.strategyUse) {
      strategyWinRate.push({
        name: key,
        value: [
          { item: '盈利次数', count: totalData.strategyUse[key].win },
          { item: '亏损次数', count: totalData.strategyUse[key].fail },
        ],
      });
    }

    const reslt = {
      winRate: [
        { item: '盈利次数', count: totalData.succCount },
        { item: '亏损次数', count: totalData.failCount },
      ],
      mountRate: [
        { item: '盈利金额', count: totalData.winMount },
        { item: '亏损金额', count: totalData.lostMount },
      ],
      strategyUseRate,
      strategyWinRate,
    };


    ctx.body = reslt;
    ctx.status = 200;
  }

  // eg: get api/trade/1
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.analysisService.find(ctx.helper.parseInt(ctx.params.id));
    ctx.status = 200;
  }

  // eg: post api/trade
  async create() {
    const ctx = this.ctx;
    // ctx.validate(createRule, ctx.request.body);
    const commment = await ctx.service.analysisService.create(ctx.request.body);
    ctx.body = commment;
    ctx.status = 201;
  }

  // eg: put api/trade/1
  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.analysisService.update({ id, updates: body });
    ctx.status = 200;
  }

  // eg: delete api/trade/1
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.analysisService.del(id);
    ctx.status = 200;
  }

}

module.exports = AnalysisController;
