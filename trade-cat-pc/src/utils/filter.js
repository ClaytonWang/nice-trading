import Vue from 'vue'
import moment from 'moment'
import * as filters from '@/filters' // global filters
import { formatUnit } from './number'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.filter('NumberFormat', function (value) {
  if (!value) {
    return '0'
  }
  return formatUnit(value, '￥')
})

Vue.filter('dayjs', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

Vue.filter('moment', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
