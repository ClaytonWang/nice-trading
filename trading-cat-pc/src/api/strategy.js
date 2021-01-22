import request from '@/utils/request'

const url = 'strategy'

export function fetchList(query) {
  return request({
    url,
    method: 'get',
    params: query
  })
}

export function fetchStrategy(id) {
  return request({
    url: url + '/' + id,
    method: 'get'
  })
}

export function createStrategy(data) {
  return request({
    url,
    method: 'post',
    data
  })
}

export function updateStrategy(data) {
  return request({
    url: url + '/' + data.id,
    method: 'put',
    data
  })
}

export function deleteStrategy(id) {
  return request({
    url: url + '/' + id,
    method: 'delete',
    params: { id }
  })
}
