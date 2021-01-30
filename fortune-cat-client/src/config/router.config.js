// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse, trade, strategy, diary } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/dashboard/workplace',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] },
        children: [
          {
            path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
            name: 'Analysis',
            component: () => import('@/views/dashboard/Analysis'),
            meta: { title: 'menu.dashboard.analysis', keepAlive: false, permission: ['dashboard'] }
          },
          {
            path: '/dashboard/workplace',
            name: 'Workplace',
            component: () => import('@/views/dashboard/Workplace'),
            meta: { title: 'menu.dashboard.workplace', keepAlive: true, permission: ['dashboard'] }
          }
        ]
      },
      {
        path: '/trade',
        name: 'trade',
        redirect: '/trade/list',
        component: BlankLayout,
        hideChildrenInMenu: true,
        meta: { title: 'menu.trade', keepAlive: true, icon: trade, permission: ['dashboard'] },
        children: [
          {
            path: '/trade/list',
            name: 'TradeList',
            component: () => import('@/views/trade/List'),
            meta: { title: 'menu.trade.list', keepAlive: false, permission: ['dashboard'] }
          },
          {
            path: '/trade/detail/:id(\\d+)',
            name: 'TradeDetail',
            component: () => import('@/views/trade/Detail'),
            meta: { title: 'menu.trade.detail', hidden: true, keepAlive: false, permission: ['dashboard'] }
          }
        ]
      },
      {
        path: '/strategy',
        name: 'strategy',
        redirect: '/strategy/list',
        component: BlankLayout,
        hideChildrenInMenu: true,
        meta: { title: 'menu.strategy', keepAlive: true, icon: strategy, permission: ['dashboard'] },
        children: [
          {
            path: '/strategy/list',
            name: 'StrategyList',
            component: () => import('@/views/strategy/List'),
            meta: { title: 'menu.strategy.list', keepAlive: false, permission: ['dashboard'] }
          },
          {
            path: '/strategy/create',
            name: 'CreateStrategy',
            component: () => import('@/views/strategy/Create'),
            meta: { title: 'menu.strategy.create', hidden: false, keepAlive: false, permission: ['dashboard'] }
          },
          {
            path: '/strategy/edit/:id(\\d+)',
            name: 'EditStrategy',
            component: () => import('@/views/strategy/Edit'),
            meta: { title: 'menu.strategy.edit', hidden: true, keepAlive: false, permission: ['dashboard'] }
          }
        ]
      },
      {
        path: '/diary',
        name: 'diary',
        redirect: '/diary/list',
        component: BlankLayout,
        hideChildrenInMenu: true,
        meta: { title: 'menu.diary', keepAlive: true, icon: diary, permission: ['dashboard'] },
        children: [
          {
            path: '/diary/list',
            name: 'DiaryList',
            component: () => import('@/views/diary/List'),
            meta: { title: 'menu.diary.list', keepAlive: false, permission: ['dashboard'] }
          },
          {
            path: '/diary/create',
            name: 'CreateDiary',
            component: () => import('@/views/diary/Create'),
            meta: { title: 'menu.diary.create', hidden: false, keepAlive: false, permission: ['dashboard'] }
          },
          {
            path: '/diary/edit/:id(\\d+)',
            name: 'EditDiary',
            component: () => import('@/views/diary/Edit'),
            meta: { title: 'menu.diary.edit', hidden: true, keepAlive: false, permission: ['dashboard'] }
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
