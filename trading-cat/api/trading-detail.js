import request from '@/utils/request'

export function add(planDetail) {
  return request({
    url: '/api/trading-detail',
    method: 'POST',
	data:planDetail
  })
}

export function get(params) {
	if(!params){
		params={};
	}
	
	if(!params.id){ 
		params.id= '';
	}
  return request({
    url: '/api/trading-detail/'+params.id,
    method: 'GET',
	data:params
  })
}

export function del(id) {
  return request({
    url: '/api/trading-detail/'+id,
    method: 'DELETE'
  })
}

export function update(data) {
  return request({
    url: '/api/trading-detail/'+data.id,
    method: 'PUT',
	data
  })
}
