import request from '@/utils/request'

export function add(planDetail) {
  return request({
    url: '/api/trading-detail',
    method: 'POST',
	data:planDetail
  })
}

export function get(id) {
	if(!id){ id= '';}
  return request({
    url: '/api/trading-detail/'+id,
    method: 'GET'
  })
}

export function del(id) {
  return request({
    url: '/api/trading-detail/'+id,
    method: 'DELETE'
  })
}

export function getList(trading_plan_id) {
  return request({
    url: '/api/trading-detail',
	data:{trading_plan_id},
    method: 'GET'
  })
}
