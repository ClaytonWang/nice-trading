'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class CommentService extends Service {
  async create(comment) {
    const ctx = this.ctx;
    comment.updated_at = moment().utc().format();
    const data = await ctx.model.Comment.create(comment);
    return data;
  }
}

module.exports = CommentService;
