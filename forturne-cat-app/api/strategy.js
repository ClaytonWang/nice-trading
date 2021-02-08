import request from '@/utils/request'
const api = '/api/strategy/';
export function add(data) {
  return request({
    url: api,
    method: 'POST',
	data
  });
}

export function update(data) {
  return request({
    url: api+data.id,
    method: 'PUT',
	data
  });
}

export function get(params) {
	if(!params){
		params={};
	}
	
	if(!params.id){ 
		params.id= '';
	}
  return request({
    url: api+params.id,
    method: 'GET',
	data:params
  });
}

export function del(id) {
  return request({
    url: api+id,
    method: 'DELETE'
  })
}
