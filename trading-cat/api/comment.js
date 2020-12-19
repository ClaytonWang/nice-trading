import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/api/comment',
    method: 'POST',
	data
  });
}

export function update(data) {
  return request({
    url: '/api/comment/'+data.id,
    method: 'PUT',
	data
  });
}

export function get(id) {
	if(!id){ id= '';}
  return request({
    url: '/api/comment/'+id,
    method: 'GET'
  });
}
