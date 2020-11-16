import ajax from '@/utils/ajax'

/**
 * 登录
 * @param {object} data 登录数据
 */
export const login = data =>
  ajax.post('mock-service/login', data, { headers: { auth: false } })

/**
 * 获取用户信息
 */
export const getInfo = () => ajax.get('mock-service/userInfo')
