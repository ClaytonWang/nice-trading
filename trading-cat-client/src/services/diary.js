import { DIARY } from '@/services/api'
import { request, METHOD } from '@/utils/request'

export function list(query) {
  return request(DIARY, METHOD.GET, query)
}

export function fetch(id) {
  return request(DIARY + '/' + id)
}

export function create(data) {
  return request(DIARY, METHOD.POST, data)
}

export function update(data) {
  return request(DIARY + '/' + data.id, METHOD.PUT, data)
}

export function del(id) {
  return request(DIARY + '/' + id, METHOD.DELETE)
}

export default {
  list,
  fetch,
  create,
  update,
  del
}
