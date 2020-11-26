'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class CommentService extends Service {
  async create(model) {
    const ctx = this.ctx;
    model.updated_at = moment().utc().format();
    const data = await ctx.model.Comment.create(model);
    return data;
  }

  async find(id) {
    const model = await this.ctx.model.Comment.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Comment not found');
    }
    return model;
  }

  async update({ id, updates }) {
    const model = await this.ctx.model.Comment.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Comment not found');
    }
    return model.update(updates);
  }

  async del(id) {
    const model = await this.ctx.model.Comment.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Comment not found');
    }
    return model.destroy();
  }

}

module.exports = CommentService;
