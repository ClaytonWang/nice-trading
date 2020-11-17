import Vue from 'vue';
import store from './store';

Vue.config.errorHandler = (err, vm, info) => {
  Vue.nextTick(() => {
    store.dispatch('errorLog/addErrorLog', {
      err,
      vm,
      info,
      url: window.location.href,
    });
  });
  console.error(err);
};
