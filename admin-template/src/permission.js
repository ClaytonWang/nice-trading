import NProgress from 'nprogress'
import router from './router'
import store from './store'
import { getToken } from './utils/auth'

// 进度条配置
NProgress.configure({ showSpinner: false })

// 不重定向白名单
const whiteList = ['/login', '/404']

router.beforeEach((to, from, next) => {
  NProgress.start()

  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (whiteList.includes(to.path)) {
        return next()
      }

      if (store.getters.permissions.length === 0) {
        store.dispatch('user/doGetInfo').then(() => {
          const permissions = store.getters.permissions

          store
            .dispatch('permission/generateRoutes', { permissions })
            .then(() => {
              router.addRoutes(store.state.permission.addRouters)
              next({ ...to, replace: true })
            })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({ name: 'Login', query: { redirect: to.path } })
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})
