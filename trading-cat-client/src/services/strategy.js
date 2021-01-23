import {STRATEGY} from '@/services/api'
import {request, METHOD} from '@/utils/request'

export function list(query) {
  return request(STRATEGY, METHOD.GET, query);
}

export function fetch(id) {
  return request(STRATEGY + '/' + id);
}

export function create(data) {
  return request(STRATEGY, METHOD.POST, data);
}

export function update(data) {
  return request(STRATEGY+'/'+data.id, METHOD.PUT, data);
}

export function del(id) {
  return request(STRATEGY + '/' + id);
}


export default {
  list,
  fetch,
  create,
  update,
  del
}
