import Vue from 'vue';
import VueRouter from 'vue-router';
import requireAll from '@/utils/requireAll';
import Layout from '@/layout/index.vue';

Vue.use(VueRouter);

const requireRoutes = require.context('./routes', false, /\.js$/);
const routes = requireAll(requireRoutes);

/**
 * @example hidden: true           设为 true 则该路由不会显示在侧边栏，默认为 false
 * @example alwaysShow: true       设为 true 则根路由会一直显示；没有设置的话, 则只会显示子路由
 * @example redirect: 'noredirect' 设为 noredirect 则该路由在面包屑上点击不会跳转
 * @example name: 'router-name'    设置名称以便路由被 <keep-alive> 缓存，必须设置
 * @example meta: {
 *            title: 'title'              用来在侧边栏和面包屑上显示标题，建议设置
 *            icon: 'icon class'          用来在侧边栏上显示图标
 *            permission: 'loanAuditView' 用来控制该路由是否显示
 *            noCache: true               设为 true 则该页面不会被缓存，默认是 false
 *            breadcrumb: false           设为 false 则该页面不会显示在面包屑，默认是 true
 *            affix: true                 设为 true 则改页面会默认显示在标签栏，默认是 false
 *            activeMenu: '/example/list' 侧边栏会高亮配置的路径
 * }
 **/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () =>
      import(/* webpackChunkName: 'group-error' */ '@/views/error/404.vue'),
    hidden: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: 'group-login' */ '@/views/login/index.vue'),
    hidden: true,
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () =>
          import(
            /* webpackChunkName: 'group-dashboard' */ '@/views/dashboard/index.vue'
          ),
        meta: { title: '首页', icon: 'dashboard', noCache: true },
      },
    ],
  },
  {
    path: '/my-trade',
    component: Layout,
    redirect: 'trade',
    children: [
      {
        path: 'trade',
        name: 'Trade',
        component: () =>
          import(
            /* webpackChunkName: 'group-dashboard' */ '@/views/trade/Trade.vue'
          ),
        meta: { title: '交易', icon: 'insights', noCache: true },
      },
      {
        path: 'trade-detail',
        name: 'TradeDetail',
        hidden: true,
        component: () =>
          import(
            /* webpackChunkName: 'group-dashboard' */ '@/views/trade/TradeDetail.vue'
          ),
        meta: { title: '交易详情' },
      },
    ],
  },
];

export const asyncRouterMap = [
  ...Object.values(routes),
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
];

const createRouter = () =>
  new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap,
  });
const router = createRouter();

export const resetRouter = () => {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
};

export default router;
