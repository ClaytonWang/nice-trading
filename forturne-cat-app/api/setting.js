import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/api/setting',
    method: 'POST',
	data:data
  });
}

export function update(data) {
  return request({
    url: '/api/setting/'+data.id,
    method: 'PUT',
	data:data
  });
}

export function get(id) {
	if(!id){ id= '';}
  return request({
    url: '/api/setting/'+id,
    method: 'GET'
  });
}
