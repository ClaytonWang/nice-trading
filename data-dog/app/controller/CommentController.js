'use strict';

const Controller = require('egg').Controller;
// 定义创建接口的请求参数规则
const createRule = {
  accesstoken: 'string',
  title: 'string',
  tab: { type: 'enum', values: [ 'ask', 'share', 'job' ], required: false },
  content: 'string',
};

class CommentController extends Controller {
  async create() {
    const ctx = this.ctx;
    // ctx.validate(createRule, ctx.request.body);
    const tade = await ctx.service.commentService.create(ctx.request.body);
    ctx.body = tade;
    ctx.status = 201;
  }

  async new(id) {
    const ctx = this.ctx;
    ctx.body = 'hi';
    ctx.status = 200;
  }

  async index() {
    const ctx = this.ctx;
    ctx.body = 'hi111';
    ctx.status = 200;
  }

  async show(id) {
    const ctx = this.ctx;
    ctx.body = { name: 'aaa' };
    ctx.status = 200;
  }
}

module.exports = CommentController;
