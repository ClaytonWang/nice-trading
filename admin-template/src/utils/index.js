/**
 * 判断是不是 Safari
 */
export const isSafari = () => {
  const ua = navigator.userAgent
  return /Safari/.test(ua) && !/Chrome/.test(ua)
}

/**
 * 判断是否是外部链接
 * @param {string} path 路径
 */
export const isExternal = path => {
  return /^(https?:|mailto:|tel:)/.test(path)
}
