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
