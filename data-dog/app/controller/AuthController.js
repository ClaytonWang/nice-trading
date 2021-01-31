'use strict';

const Controller = require('egg').Controller;
const { builder } = require('../utils/util');

const username = [ 'clay' ];
// 强硬要求 ant.design 相同密码
// '21232f297a57a5a743894a0e4a801fc3',
const password = [ '8914de686ab28dc22f30d3d8e107ff6c', '21232f297a57a5a743894a0e4a801fc3' ]; // admin, ant.design

class AuthController extends Controller {
  async login() {
    const body = this.ctx.request.body;
    if (!username.includes(body.username) || !password.includes(body.password)) {
      this.ctx.body = builder({ isLogin: true }, '账户或密码错误', 401);
    } else {
      this.ctx.body = builder({
        id: '1',
        name: 'ClayWang',
        username: 'admin',
        password: '',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
        status: 1,
        telephone: '',
        lastLoginIp: '27.154.74.117',
        lastLoginTime: 1534837621348,
        creatorId: 'admin',
        createTime: 1497160610259,
        deleted: 0,
        roleId: 'admin',
        lang: 'zh-CN',
        token: '4291d7da9005377ec9aec4a71ea837f',
      }, '', 200, { 'Custom-Header': '8914de686ab28dc22f30d3d8e107ff6c' });
    }
  }

  async logout() {
    this.ctx.body = builder({}, '注销成功');
  }

  async smsCaptcha() {
    this.ctx.body = builder({ captcha: 99999 });
  }

  async twofactor() {
    this.ctx.body = builder({ stepCode: 1 });
  }
}

module.exports = AuthController;
