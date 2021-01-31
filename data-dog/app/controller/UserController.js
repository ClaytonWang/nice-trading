'use strict';

const Controller = require('egg').Controller;
const { builder } = require('../utils/util');

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
    const ctx = this.ctx;
    ctx.body = await ctx.service.userService.find(ctx.helper.parseInt(ctx.params.id));
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

  async info() {
    const ctx = this.ctx;
    const userInfo = {
      id: '4291d7da9005377ec9aec4a71ea837f',
      name: '穿越牛熊',
      username: 'admin',
      password: '',
      avatar: '/avatar2.jpg',
      status: 1,
      telephone: '',
      lastLoginIp: '27.154.74.117',
      lastLoginTime: 1534837621348,
      creatorId: 'admin',
      createTime: 1497160610259,
      merchantCode: 'TLif2btpzg079h15bk',
      deleted: 0,
      roleId: 'admin',
      role:
      {
        id: 'admin',
        name: '管理员',
        describe: '拥有所有权限',
        status: 1,
        creatorId: 'system',
        createTime: 1497160610259,
        deleted: 0,
        permissions: [
          {
            roleId: 'admin',
            permissionId: 'dashboard',
            permissionName: '仪表盘',
            actions: '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
            actionEntitySet: [{
              action: 'add',
              describe: '新增',
              defaultCheck: false,
            }, {
              action: 'query',
              describe: '查询',
              defaultCheck: false,
            }, {
              action: 'get',
              describe: '详情',
              defaultCheck: false,
            }, {
              action: 'update',
              describe: '修改',
              defaultCheck: false,
            }, {
              action: 'delete',
              describe: '删除',
              defaultCheck: false,
            }],
            actionList: null,
            dataAccess: null,
          },
        ],
      },
    };
    ctx.body = builder(userInfo);
  }
}

module.exports = UserController;
