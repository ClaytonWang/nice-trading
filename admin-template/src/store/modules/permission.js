import { constantRouterMap, asyncRouterMap } from '@/router';

/**
 * 判断用户是否拥有访问该路由的权限
 * @param {Array} permissions 权限列表
 * @param {object} route 路由
 * @returns {boolean}
 */
const hasPermission = (permissions, route) => {
  if (route.meta && route.meta.permission) {
    return permissions.some(
      (permission) => route.meta.permission === permission,
    );
  }
  return true;
};

/**
 * 返回符合用户角色的路由表
 * @param {Array} asyncRouterMap
 * @param {Array} permissions
 * @returns {boolean}
 */
const filterAsyncRouter = (asyncRouterMap, permissions) => {
  const accessedRouters = asyncRouterMap.filter((route) => {
    if (hasPermission(permissions, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, permissions);
      }
      return true;
    }
    return false;
  });

  return accessedRouters;
};

export default {
  namespaced: true,
  state: {
    routers: constantRouterMap,
    addRouters: [],
  },
  mutations: {
    SET_ROUTERS(state, routers) {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
    },
  },
  actions: {
    generateRoutes({ commit }, data) {
      return new Promise((resolve) => {
        const { permissions } = data;
        const accessedRouters = filterAsyncRouter(asyncRouterMap, permissions);
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      });
    },
  },
};
