import { request, METHOD } from '@/utils/request'
import { STOCK } from '@/services/api'



export async function search(keyword) {
  let url= STOCK + keyword
  const res = await request(url, METHOD.GET)
  const list = []
  if (res&&res.data) {
    const data = res.data.split('=')[1]
    if (data) {
      const arrData = data.split(';')
      arrData && arrData.forEach((item) => {
        const temp = item.split(',')
        if (!temp[0]) {
          return
        }
        const name = temp[0].replace(/"/g, '')
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
