import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/api/trading-plan',
    method: 'POST',
	data
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
    url: '/api/trading-plan/'+params.id,
    method: 'GET',
	data:params
  })
}

export function del(id) {
  return request({
    url: '/api/trading-plan/'+id,
    method: 'DELETE'
  })
}

export function update(data) {
  return request({
    url: '/api/trading-plan/'+data.id,
    method: 'PUT',
	data
  })
}
