import request from '@/utils/request'

export function add(plan) {
  return request({
    url: '/api/trading-plan',
    method: 'POST',
	data:plan
  })
}

export function get(params) {
	console.log(params)
	if(!params.id){ params.id= '';}
  return request({
    url: '/api/trading-plan/'+params.id,
    method: 'GET',
	data:{
		limit:params.limit,
		offset:params.offset,
	}
  })
}

export function del(id) {
  return request({
    url: '/api/trading-plan/'+id,
    method: 'DELETE'
  })
}

