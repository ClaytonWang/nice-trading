'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class NotePadService extends Service {

  async list({ offset = 0, limit = 10 }) {

    const options = {
      offset,
      limit,
      distinct: true,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    };
    return this.ctx.model.NotePad.findAndCountAll(options);
  }


  async create(model) {
    const ctx = this.ctx;
    model.updated_at = moment().utc().format();
    const data = await ctx.model.NotePad.create(model);
    return data;
  }

  async find(id) {
    const model = await this.ctx.model.NotePad.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'NotePad not found');
    }
    return model;
  }

  async update({ id, updates }) {
    const model = await this.ctx.model.NotePad.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'NotePad not found');
    }
    return model.update(updates);
  }

  async del(id) {
    const model = await this.ctx.model.NotePad.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'NotePad not found');
    }
    return model.destroy();
  }

}

module.exports = NotePadService;
