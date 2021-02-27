'use strict';

const Service = require('egg').Service;
const moment = require('moment');

const sqlstr = `SELECT tp.name,tp.code,td.trading_volume,trading_price,trading_type,strategy.title FROM trading_plan tp INNER JOIN trading_detail td on tp.id = td.trading_plan_id
INNER JOIN strategy on tp.strategy_id = strategy.id ORDER BY tp.name;`;

const sqlstr2 = 'SELECT DISTINCT tp.name,tp.code,strategy.title FROM trading_plan tp INNER JOIN trading_detail td on tp.id = td.trading_plan_id INNER Join strategy on strategy.id = tp.strategy_id ORDER BY tp.name';
class AnalysisService extends Service {

  async totalAnalysis() {
    const allData = await this.ctx.model.query(sqlstr, { type: this.app.Sequelize.QueryTypes.SELECT });
    const allStocks = await this.ctx.model.query(sqlstr2, { type: this.app.Sequelize.QueryTypes.SELECT });
    const result = [];
    let succCount = 0;
    let failCount = 0;
    let lostMount = 0;
    let winMount = 0;
    const strategyUse = {};
    if (allData && allData.length > 0) {
      for (const stock of allStocks) {
        const dataBuy = allData.filter(x => {
          return x.code === stock.code && x.trading_type === 'BUY';
        });

        let montBuy = 0;
        let volumeBuy = 0;
        for (const buy of dataBuy) {
          montBuy = montBuy + parseFloat(buy.trading_price) * parseFloat(buy.trading_volume);
          volumeBuy = volumeBuy + parseFloat(buy.trading_volume);
        }

        const dataSell = allData.filter(x => {
          return x.code === stock.code && x.trading_type === 'SELL';
        });
        let montSell = 0;
        let volumeSell = 0;
        for (const sell of dataSell) {
          montSell = montSell + parseFloat(sell.trading_price) * parseFloat(sell.trading_volume);
          volumeSell = volumeSell + parseFloat(sell.trading_volume);
        }

        // 清仓的才计算
        if ((volumeBuy - volumeSell) <= 0) {
          const profit = montSell - montBuy; // 负数为亏损，正数为盈利
          strategyUse[stock.title] = {};
          if (profit >= 0) {
            succCount = succCount + 1;
            winMount = profit + winMount;
            strategyUse[stock.title] = {
              total: !strategyUse[stock.title].total ? 1 : strategyUse[stock.title].total + 1,
              win: !strategyUse[stock.title].win ? 1 : strategyUse[stock.title].win + 1,
            };
            strategyUse[stock.title].fail = strategyUse[stock.title].total - strategyUse[stock.title].win;
          } else {
            failCount = failCount + 1;
            lostMount = profit + lostMount;
            strategyUse[stock.title] = {
              total: !strategyUse[stock.title].total ? 1 : strategyUse[stock.title].total + 1,
              fail: !strategyUse[stock.title].fail ? 1 : strategyUse[stock.title].fail + 1,
            };
            strategyUse[stock.title].win = strategyUse[stock.title].total - strategyUse[stock.title].fail;
          }
          result.push({
            ...stock,
            profit,
          });
        }
      }
    }
    return {
      tradeResult: result,
      tradeCount: allStocks.length,
      compTradeCount: result.length,
      succCount,
      failCount,
      lostMount,
      winMount,
      strategyUse,
    };
  }

  async create(model) {
    const ctx = this.ctx;
    model.updated_at = moment().utc().format();
    const data = await ctx.model.Analysis.create(model);
    return data;
  }

  async find(id) {
    const model = await this.ctx.model.Analysis.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Analysis not found');
    }
    return model;
  }

  async update({ id, updates }) {
    const model = await this.ctx.model.Analysis.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Analysis not found');
    }
    return model.update(updates);
  }

  async del(id) {
    const model = await this.ctx.model.Analysis.findByPk(id);
    if (!model) {
      this.ctx.throw(404, 'Analysis not found');
    }
    return model.destroy();
  }

}

module.exports = AnalysisService;
