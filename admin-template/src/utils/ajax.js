import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'
import { getToken, removeToken } from './auth'

const ajax = axios.create({
  baseURL: '/',
  withCredentials: true,
  timeout: 5000
})

ajax.interceptors.request.use(config => {
  // 非鉴权接口不携带 token
  if (config.headers.auth !== false) {
    config.headers.Authorization = `Bearer ${getToken()}`
  }

  return config
})

ajax.interceptors.response.use(
  resp => {
    return resp.data
  },
  err => {
    Message({
      type: 'error',
      message: err.message,
      duration: 1500,
      onClose: () => {
        switch (err.response.status) {
          case 401:
          case 403:
            removeToken()
            router.replace({ name: 'Login' })
            break
          default:
            break
        }
      }
    })

    return Promise.reject(err)
  }
)

export default ajax
