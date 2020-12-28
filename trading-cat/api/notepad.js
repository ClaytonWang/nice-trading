import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/api/notepad',
    method: 'POST',
	data
  });
}

export function update(data) {
  return request({
    url: '/api/notepad/'+data.id,
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
    url: '/api/notepad/'+params.id,
    method: 'GET',
	data:params
  });
}

export function del(id) {
  return request({
    url: '/api/notepad/'+id,
    method: 'DELETE'
  })
}
