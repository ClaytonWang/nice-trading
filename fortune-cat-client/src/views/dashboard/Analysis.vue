<template>
  <div>
    <a-row :gutter="10">
      <a-col :sm="24" :md="12" :xl="8" :style="{ marginBottom: '5px' }">
        <a-card class="antd-pro-pages-dashboard-analysis-salesCard" :loading="loading" :bordered="false" title="交易成功率">
          <h4 v-for="(itemData,index) in winPieData" :key="index">{{ itemData.item }}: {{ itemData.count }}</h4>
          <div>
            <!-- style="width: calc(100% - 240px);" -->
            <div>
              <v-chart :force-fit="true" :height="405" :data="winPieData" :scale="pieScale">
                <v-tooltip :showTitle="false" dataKey="item*percent" />
                <v-axis />
                <!-- position="right" :offsetX="-140" -->
                <v-legend dataKey="item"/>
                <v-pie position="percent" color="item" :vStyle="pieStyle" />
                <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
              </v-chart>
            </div>
          </div>
        </a-card>
      </a-col>
      <a-col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
        <a-card class="antd-pro-pages-dashboard-analysis-salesCard" :loading="loading" :bordered="false" title="盈亏比例">
          <h4 v-for="(itemData,index) in mountPieData" :key="index">{{ itemData.item }}: {{ itemData.count }}</h4>
          <div>
            <!-- style="width: calc(100% - 240px);" -->
            <div>
              <v-chart :force-fit="true" :height="405" :data="mountPieData" :scale="pieScale">
                <v-tooltip :showTitle="false" dataKey="item*percent" />
                <v-axis />
                <!-- position="right" :offsetX="-140" -->
                <v-legend dataKey="item"/>
                <v-pie position="percent" color="item" :vStyle="pieStyle" />
                <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
              </v-chart>
            </div>
          </div>
        </a-card>
      </a-col>
      <a-col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
        <a-card class="antd-pro-pages-dashboard-analysis-salesCard" :loading="loading" :bordered="false" title="战法使用率">
          <h4 v-for="(itemData,index) in trategyPieData" :key="index">{{ itemData.item }}: {{ itemData.count }}次</h4>
          <div>
            <!-- style="width: calc(100% - 240px);" -->
            <div>
              <v-chart :force-fit="true" :height="405" :data="trategyPieData" :scale="pieScale">
                <v-tooltip :showTitle="true" dataKey="item*percent" />
                <v-axis />
                <!-- position="right" :offsetX="-140" -->
                <v-legend dataKey="item"/>
                <v-pie position="percent" color="item" :vStyle="pieStyle" />
                <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
              </v-chart>
            </div>
          </div>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="10">
      <a-col
        :xl="8"
        :lg="8"
        :md="8"
        :sm="24"
        :xs="24"
        v-for="(item,index) in strategyWinData"
        :key="index">
        <a-card class="antd-pro-pages-dashboard-analysis-salesCard" :loading="loading" :bordered="false" :title="item.name">
          <h4 v-for="(itemData,count) in item.value" :key="count">{{ itemData.item }}: {{ itemData.count }}</h4>
          <div>
            <!-- style="width: calc(100% - 240px);" -->
            <div>
              <v-chart :force-fit="true" :height="405" :data="item.value" :scale="pieScale">
                <v-tooltip :showTitle="false" dataKey="item*percent" />
                <v-axis />
                <!-- position="right" :offsetX="-140" -->
                <v-legend dataKey="item"/>
                <v-pie position="percent" color="item" :vStyle="pieStyle" />
                <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
              </v-chart>
            </div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import {
  ChartCard,
  MiniArea,
  MiniBar,
  MiniProgress,
  RankList,
  Bar,
  Trend,
  NumberInfo,
  MiniSmoothArea
} from '@/components'
import { baseMixin } from '@/store/app-mixin'
import { fetch } from '@/api/analysis'
const DataSet = require('@antv/data-set')

const pieScale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.00%'
}]

export default {
  name: 'Analysis',
  mixins: [baseMixin],
  components: {
    ChartCard,
    MiniArea,
    MiniBar,
    MiniProgress,
    RankList,
    Bar,
    Trend,
    NumberInfo,
    MiniSmoothArea
  },
  data () {
    return {
      loading: true,
      pieScale,
      winPieData: {},
      mountPieData: {},
      trategyPieData: {},
      strategyWinData: [],
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      }
    }
  },

  async created () {
    const data = await fetch()
    const dv = new DataSet.View().source(data.winRate)
    dv.transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    })
    this.winPieData = dv.rows

    const dv2 = new DataSet.View().source(data.mountRate)
    dv2.transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    })
    this.mountPieData = dv2.rows

    const dv3 = new DataSet.View().source(data.strategyUseRate)
    dv2.transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    })
    this.trategyPieData = dv3.rows
    for (const item of data.strategyWinRate) {
      const tmp = new DataSet.View().source(item.value)
      tmp.transform({
        type: 'percent',
        field: 'count',
        dimension: 'item',
        as: 'percent'
      })
      this.strategyWinData.push({
        name: item.name,
        value: tmp.rows
      })
    }

    this.loading = !this.loading
  }
}
</script>

<style lang="less" scoped>
  .extra-wrapper {
    line-height: 55px;
    padding-right: 24px;

    .extra-item {
      display: inline-block;
      margin-right: 24px;

      a {
        margin-left: 24px;
      }
    }
  }

  .antd-pro-pages-dashboard-analysis-twoColLayout {
    position: relative;
    display: flex;
    display: block;
    flex-flow: row wrap;
  }

  .antd-pro-pages-dashboard-analysis-salesCard {
    height: calc(100% - 24px);
    /deep/ .ant-card-head {
      position: relative;
    }
  }

  .dashboard-analysis-iconGroup {
    i {
      margin-left: 16px;
      color: rgba(0,0,0,.45);
      cursor: pointer;
      transition: color .32s;
      color: black;
    }
  }
  .analysis-salesTypeRadio {
    position: absolute;
    right: 54px;
    bottom: 12px;
  }
</style>
