import { ANALYSIS } from './api'
import { httpRequest as request, METHOD } from '@/utils/request'

export function fetch () {
  return request(ANALYSIS, METHOD.GET)
}
export default {
  fetch
}
