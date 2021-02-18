'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class ImageService extends Service {

  async list({ offset = 0, limit = 10, trading_plan_id = null, trading_detail_id = null }) {

    const options = {
      offset,
      limit,
      distinct: true,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    };
    if (trading_plan_id) {
      options.where = {
        trading_plan_id: 'NULL',
      };
    }
    if (trading_detail_id) {
      options.where = {
        trading_detail_id,
      };
    }
    return this.ctx.model.Image.findAndCountAll(options);
  }


  async create(model) {
    const ctx = this.ctx;
    model.updated_at = moment().utc().format();
    const data = await ctx.model.Image.create(model);
    return data;
  }

  async find(id) {
    const model = await this.ctx.model.Image.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Image not found');
    }
    return model;
  }

  async update({ id, updates }) {
    const model = await this.ctx.model.Image.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Image not found');
    }
    return model.update(updates);
  }

  async del(id) {
    const model = await this.ctx.model.Image.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Image not found');
    }
    return model.destroy();
  }

}

module.exports = ImageService;
