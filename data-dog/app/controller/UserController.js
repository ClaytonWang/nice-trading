'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    ctx.body = await ctx.service.userService.list(query);
  }

  // eg: get api/trade/1
  async show() {
    const users = {
      'admin-token': {
        roles: [ 'admin' ],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin',
      },
      'editor-token': {
        roles: [ 'editor' ],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor',
      },
    };
    const ctx = this.ctx;
    const { token } = ctx.query;
    const info = users[token];
    // ctx.body = await ctx.service.userService.find(ctx.helper.parseInt(ctx.params.id));
    ctx.body = {
      code: 20000,
      data: info,
    };
  }

  // eg: post api/trade
  async create() {
    const ctx = this.ctx;
    // ctx.validate(createRule, ctx.request.body);
    const user = await ctx.service.userService.create(ctx.request.body);
    ctx.body = user;
    ctx.status = 201;
  }

  // eg: put api/trade/1
  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.userService.update({ id, updates: body });
  }

  // eg: delete api/trade/1
  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.userService.del(id);
    ctx.status = 200;
  }

  async login() {

    const tokens = {
      admin: {
        token: 'admin-token',
      },
      editor: {
        token: 'editor-token',
      },
    };

    const ctx = this.ctx;
    const { username } = ctx.request.body;
    const token = tokens[username];
    ctx.body = {
      code: 20000,
      data: token,
    };
  }
}

module.exports = UserController;
