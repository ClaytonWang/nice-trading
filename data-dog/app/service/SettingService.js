'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class SettingService extends Service {

  async list({ offset = 0, limit = 10, user_id }) {

    const options = {
      offset,
      limit,
      distinct: true,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    };
    if (user_id) {
      options.where = {
        user_id,
      };
    }
    return this.ctx.model.Setting.findAndCountAll(options);
  }

  async create(model) {
    const ctx = this.ctx;
    model.updated_at = moment().utc().format();
    return await ctx.model.Setting.create(model);
  }

  async find(id) {
    const model = await this.ctx.model.Setting.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'setting not found');
    }
    return model;
  }

  async update({ id, updates }) {
    const model = await this.ctx.model.Setting.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'setting not found');
    }
    return model.update(updates);
  }

  async del(id) {
    const model = await this.ctx.model.Setting.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'setting not found');
    }
    return model.destroy();
  }

}

module.exports = SettingService;
