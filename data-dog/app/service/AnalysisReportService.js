'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class AnalysisReportService extends Service {

  async list({ offset = 0, limit = 10 }) {

    const options = {
      offset,
      limit,
      distinct: true,
      order: [[ 'id', 'desc' ]],
    };
    return this.ctx.model.AnalysisReport.findAndCountAll(options);
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
      this.ctx.throw(404, 'Analysis not found');
    }
    return model;
  }

  async update({ id, updates }) {
    const model = await this.ctx.model.AnalysisReport.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Analysis not found');
    }
    return model.update(updates);
  }

  async del(id) {
    const model = await this.ctx.model.AnalysisReport.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Analysis not found');
    }
    return model.destroy();
  }

}

module.exports = AnalysisReportService;
