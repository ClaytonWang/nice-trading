import request from '@/utils/request'

export async function search(keyword) {
  const res = await request({
    url: 'http://localhost:9527/suggest/type=&key=' + keyword + '&name=suggestdata',
    method: 'GET'
  })
  const list = []
  if (res) {
    const data = res.split('=')[1]
    if (data) {
      const arrData = data.split(';')
      arrData && arrData.forEach((item) => {
        const temp = item.split(',')
        if (!temp[0]) {
          return
        }
        const name = temp[0].replace(/\"/g, '')
        if (!name) {
          return
        }
        list.push({
          name,
          code: temp[2],
          symbol: temp[3],
          label: name + ' (' + temp[2] + ')'
        })
      })
    }
  }
  return list
}
