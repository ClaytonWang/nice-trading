import request from '@/utils/request'

export function search(keyword) {
  return request({
    url: '/suggest/type=&key='+keyword+'&name=suggestdata',
    method: 'GET'
  })
}
