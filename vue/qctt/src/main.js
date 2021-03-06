// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/router'
import VueRouter from 'vue-router'
import axios from 'axios'
import IScroll from 'iscroll'
import IScrollView from  'vue-iscroll-view'
import store from './store/'



Vue.prototype.$ajax = axios;
Vue.config.productionTip = false

Vue.use(VueRouter,IScroll,IScrollView);
const router = new VueRouter({
  routes,
  mode:'history',
  base: __dirname,
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  
}).$mount('#app');
