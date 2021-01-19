'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class StrategyService extends Service {

  async list({ offset = 0, limit = 10 }) {

    const options = {
      offset,
      limit,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    };
    return this.ctx.model.Strategy.findAndCountAll(options);
  }


  async create(model) {
    const ctx = this.ctx;
    model.updated_at = moment().utc().format();
    const data = await ctx.model.Strategy.create(model);
    return data;
  }

  async find(id) {
    const model = await this.ctx.model.Strategy.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Strategy not found');
    }
    return model;
  }

  async update({ id, updates }) {
    const model = await this.ctx.model.Strategy.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Strategy not found');
    }
    return model.update(updates);
  }

  async del(id) {
    const model = await this.ctx.model.Strategy.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Strategy not found');
    }
    return model.destroy();
  }

}

module.exports = StrategyService;
