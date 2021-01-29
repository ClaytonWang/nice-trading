import { TRADING } from './api'
import { httpRequest as request, METHOD } from '@/utils/request'

export function list (query) {
  return request(TRADING.DETAIL, METHOD.GET, query)
}

export function fetch (id) {
  return request(TRADING.DETAIL + '/' + id)
}

export function create (data) {
  return request(TRADING.DETAIL, METHOD.POST, data)
}

export function update (data) {
  return request(TRADING.DETAIL + '/' + data.id, METHOD.PUT, data)
}

export function del (id) {
  return request(TRADING.DETAIL + '/' + id, METHOD.DELETE)
}

export default {
  list,
  fetch,
  create,
  update,
  del
}
