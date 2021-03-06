/*
定时任务，每1分钟跑一次，把清仓了的票，统计出来。自动的标记为清仓
*/
'use strict';
const Subscription = require('egg').Subscription;

const sqlstr1 = `
SELECT t.id,
td.trading_price,
td.trading_volume,
td.commission,
td.stamp_tax,
td.trading_type,
td.trading_date
from trading_plan t
INNER JOIN trading_detail td on t.id = td.trading_plan_id
where t.id not in (select plan_id FROM analysis_report)
ORDER BY t.id DESC,td.trading_date DESC;
`;

const sqlstr2 = `SELECT DISTINCT t.id from trading_plan t
INNER JOIN trading_detail td on t.id = td.trading_plan_id
INNER JOIN strategy s on t.strategy_id = s.id
where t.id not in (select plan_id FROM analysis_report)
ORDER BY t.id DESC;`;


class CalcAnalyst extends Subscription {
  static get schedule() {
    return {
      interval: '30s', // 任务的间隔时间, 这个定义的30s执行一次
      type: 'worker', // 指定所有的 worker都需要执行
      immediate: true, // 项目启动就执行一次定时任务
    };
  }

  async subscribe() {
    const ids = await this.ctx.model.query(sqlstr2, { type: this.app.Sequelize.QueryTypes.SELECT });
    const dataPlans = await this.ctx.model.query(sqlstr1, { type: this.app.Sequelize.QueryTypes.SELECT });

    if (ids && ids.length > 0) {
      for (const idItem of ids) {

        let mountBuy = 0;
        let volumeBuy = 0;
        let start_date = '';
        const dataBuy = dataPlans.filter(x => {
          return x.id === idItem.id && x.trading_type === 'BUY';
        });
        if (dataBuy && dataBuy.length > 0) {
          for (const buy of dataBuy) {
            start_date = buy.trading_date;// 因为DESC 所以 开始时间为买入的最后一条记录
            mountBuy = mountBuy + parseFloat(buy.commission) + parseFloat(buy.trading_price) * parseFloat(buy.trading_volume);
            volumeBuy = volumeBuy + parseFloat(buy.trading_volume);
          }
        }

        let mountSell = 0;
        let volumeSell = 0;
        let end_date = null;
        const dataSell = dataPlans.filter(x => {
          return x.id === idItem.id && x.trading_type === 'SELL';
        });
        for (const sell of dataSell) {
          // 清仓日期为卖出的第一条数据
          if (!end_date) {
            end_date = sell.trading_date;
          }
          mountSell = mountSell - parseFloat(sell.commission) - parseFloat(sell.stamp_tax) + parseFloat(sell.trading_price) * parseFloat(sell.trading_volume);
          volumeSell = volumeSell + parseFloat(sell.trading_volume);
        }

        // 没有清仓的票不计算
        if ((volumeBuy - volumeSell) > 0) {
          continue;
        }

        const profit = mountSell - mountBuy;
        const model = {
          plan_id: idItem.id,
          total_amount: mountBuy, // 计算自己掏出去的钱为准
          total_volume: volumeSell, // 可能有分红，买出的数量为准
          profit,
          start_date,
          end_date,
        };

        await this.ctx.service.analysisReportService.create(model);
        // 把清仓的票，状态修改掉。
        const plan = await this.ctx.service.tradingPlanService.find(model.plan_id);
        await plan.update({ status: 0 });

      }
    }
  }
}

module.exports = CalcAnalyst;

