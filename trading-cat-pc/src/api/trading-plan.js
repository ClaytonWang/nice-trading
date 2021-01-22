import request from '@/utils/request'

const url = 'trading-plan'

export function fetchList(query) {
  return request({
    url,
    method: 'get',
    params: query
  })
}

export function fetch(id) {
  return request({
    url: url + '/' + id,
    method: 'get'
  })
}

export function create(data) {
  return request({
    url,
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: url + '/' + data.id,
    method: 'put',
    data
  })
}

export function del(id) {
  return request({
    url: url + '/' + id,
    method: 'delete',
    params: { id }
  })
}
