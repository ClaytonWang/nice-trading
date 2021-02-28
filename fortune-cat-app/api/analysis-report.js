import request from '@/utils/request'

export function get(params) {
	if(!params){
		params={};
	}
	
	if(!params.id){ 
		params.id= '';
	}
  return request({
    url: '/api/analysis-report/'+params.id,
    method: 'GET',
	data:params
  });
}
