import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import components from './components';
import directives from './directives';
import filters from './filters';
import './icons';
import './errorHandler';
import './permission';
import './styles/main.scss';
import './styles/reset.scss';

// 注册全局组件
Vue.use(ElementUI, { size: 'small' });
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
});

// 注册全局指令
Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key]);
});

// 注册全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

if (process.env.NODE_ENV === 'development') {
  // 禁用生产环境提示
  Vue.config.productionTip = false;

  // 引入开发环境模块
  require('./externals');
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
