'use strict';

const Service = require('egg').Service;

class TradeService extends Service {
  async create(params) {
    console.log(params);
    return {};
  }
}

module.exports = TradeService;
