import request from '@/utils/request'

export function add(plan) {
  return request({
    url: '/api/trading-plan',
    method: 'POST',
	data:plan
  })
}

export function get(id) {
  return request({
    url: '/api/trading-plan/'+id,
    method: 'GET'
  })
}

export function del(id) {
  return request({
    url: '/api/trading-plan/'+id,
    method: 'DELETE'
  })
}

