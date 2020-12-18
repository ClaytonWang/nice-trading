'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class UserService extends Service {

  async list({ offset = 0, limit = 10, id }) {
    const options = {
      offset,
      limit,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    };
    if (id) {
      options.where = {
        id,
      };
    }
    return this.ctx.model.User.findAndCountAll(options);
  }

  async create(model) {
    const ctx = this.ctx;
    model.updated_at = moment().utc().format();
    return await ctx.model.User.create(model);
  }

  async find(id) {
    const model = await this.ctx.model.User.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'User not found');
    }
    return model;
  }

  async update({ id, updates }) {
    const model = await this.ctx.model.User.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'User not found');
    }
    return model.update(updates);
  }

  async del(id) {
    const model = await this.ctx.model.User.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'User not found');
    }
    return model.destroy();
  }
}

module.exports = UserService;
