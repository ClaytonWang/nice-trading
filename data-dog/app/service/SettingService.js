'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class SettingService extends Service {

  async create(model) {
    const ctx = this.ctx;
    model.updated_at = moment().utc().format();
    return await ctx.model.Setting.create(model);
  }

  async find(id) {
    const model = await this.ctx.model.Setting.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'trade not found');
    }
    return model;
  }

  async update({ id, updates }) {
    const model = await this.ctx.model.Setting.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'trade not found');
    }
    return model.update(updates);
  }

  async del(id) {
    const model = await this.ctx.model.Setting.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'trade not found');
    }
    return model.destroy();
  }

}

module.exports = SettingService;
