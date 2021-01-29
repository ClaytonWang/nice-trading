import { TRADING } from './api'
import { httpRequest as request, METHOD } from '@/utils/request'

export function list (query) {
  return request(TRADING.PLAN, METHOD.GET, query)
}

export function fetch (id) {
  return request(TRADING.PLAN + '/' + id)
}

export function create (data) {
  return request(TRADING.PLAN, METHOD.POST, data)
}

export function update (data) {
  return request(TRADING.PLAN + '/' + data.id, METHOD.PUT, data)
}

export function del (id) {
  return request(TRADING.PLAN + '/' + id, METHOD.DELETE)
}

export default {
  list,
  fetch,
  create,
  update,
  del
}
