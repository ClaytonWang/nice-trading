'use strict';

const Subscription = require('egg').Subscription;
let i = 0;
class CalcAnalyst extends Subscription {
  static get schedule() {
    return {
      interval: '1m', // 任务的间隔时间, 这个定义的10秒执行一次
      type: 'all', // 指定所有的 worker都需要执行
      immediate: true, // 项目启动就执行一次定时任务
    };
  }
  async subscribe() {
    i++;
    console.log(i);
  }
}

module.exports = CalcAnalyst;

