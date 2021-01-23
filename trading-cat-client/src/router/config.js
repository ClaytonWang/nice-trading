import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'
import PageView from '@/layouts/PageView'

// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/pages/login')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/exception/404'),
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/pages/exception/403'),
    },
    {
      path: '/',
      name: '首页',
      component: TabsView,
      redirect: '/login',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: {
            icon: 'dashboard'
          },
          component: PageView,
          children: [
            {
              path: 'analysis',
              name: '分析页',
              component: () => import('@/pages/demo'),
            }
          ]
        },
        {
          path: 'trade',
          name: '交易',
          meta: {
            icon: 'file'
          },
          component: PageView,
          children: [
            {
              path: 'list',
              name: '交易列表',
              component: () => import('@/pages/demo'),
            }
          ]
        },
        {
          path: 'strategy',
          name: '战法',
          meta: {
            icon: 'dashboard',
          },
          component: BlankView,
          children: [
            {
              path: 'list',
              name: '战法列表',
              meta: {
                icon: 'file-ppt'
              },
              component: () => import('@/pages/strategy/list'),
            },
            {
              path: 'create',
              name: '新建战法',
              meta: {
                icon: 'file-ppt',
              },
              component: () => import('@/pages/strategy/create'),
            },
            {
              path: 'edit/:id(\\d+)',
              name: '编辑战法',
              meta: {
                icon: 'file-ppt',
                invisible: true,
              },

              component: () => import('@/pages/strategy/edit'),
            }
          ]
        },
        {
          path: 'parent2',
          name: '父级路由2',
          meta: {
            icon: 'form'
          },
          component: PageView,
          children: [
            {
              path: 'demo2',
              name: '演示页面2',
              component: () => import('@/pages/demo'),
            }
          ]
        },
        {
          path: 'exception',
          name: '异常页',
          meta: {
            icon: 'warning',
          },
          component: BlankView,
          children: [
            {
              path: '404',
              name: 'Exp404',
              component: () => import('@/pages/exception/404')
            },
            {
              path: '403',
              name: 'Exp403',
              component: () => import('@/pages/exception/403')
            },
            {
              path: '500',
              name: 'Exp500',
              component: () => import('@/pages/exception/500')
            }
          ]
        },
        {
          name: '验权页面',
          path: 'auth/demo',
          meta: {
            icon: 'file-ppt',
            authority: {
              permission: 'form',
              role: 'manager'
            },
            component: () => import('@/pages/demo')
          }
        }
      ]
    }
  ]
}

export default options
