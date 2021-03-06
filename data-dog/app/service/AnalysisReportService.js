'use strict';

const Service = require('egg').Service;
const moment = require('moment');
const { Op } = require('sequelize');

class AnalysisReportService extends Service {

  async list({ offset = 0, limit = 10, strategy_id, start, end }) {

    const options = {
      offset,
      limit,
      distinct: true,
      order: [[ 'plan_id', 'asc' ]],
      attributes: [ 'id', 'total_amount', 'total_volume', 'profit', 'start_date', 'end_date' ],
      include: [{
        attributes: [ 'id', 'name', 'code', 'risk', 'symbol', 'strategy_id' ],
        model: this.ctx.model.TradingPlan,
        include: [{
          attributes: [ 'title' ],
          model: this.ctx.model.Strategy,
        }, {
          attributes: [ 'comment' ],
          model: this.ctx.model.Comment,
        }],
      }],
    };
    const where = {};
    if (start && end) {
      where.end_date = {
        [Op.gte]: start,
        [Op.lte]: end,
      };
    }
    options.where = where;
    const data = await this.ctx.model.AnalysisReport.findAndCountAll(options);
    data.rows = data.rows.filter(x => {
      if (strategy_id) { return x.trading_plan.strategy_id === strategy_id; }
      return x;
    });
    return data;
  }

  async create(model) {
    const ctx = this.ctx;
    model.updated_at = moment().utc().format();
    const data = await ctx.model.AnalysisReport.create(model);
    return data;
  }

  async find(id) {
    const model = await this.ctx.model.AnalysisReport.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Analysis report not found');
    }
    return model;
  }

  async update({ id, updates }) {
    const model = await this.ctx.model.AnalysisReport.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Analysis report not found');
    }
    return model.update(updates);
  }

  async del(id) {
    const model = await this.ctx.model.AnalysisReport.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Analysis report not found');
    }
    return model.destroy();
  }

  async delByPlanId(plan_id) {
    await this.ctx.model.AnalysisReport.destroy(
      {
        where: {
          plan_id,
        },
      }
    );
  }

}

module.exports = AnalysisReportService;
