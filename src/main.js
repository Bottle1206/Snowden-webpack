// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router.js';
import store from './store';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';

import './components/style/common.styl';
import './components/iconfont/iconfont.css';
import 'element-ui/lib/theme-chalk/index.css';

import AcIcon from './components/icon/index.vue';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.http.options.root = '';
Vue.http.options.emulateJSON = false; //
// Vue.http.options.headers = {
//   // 'Accept': 'application/json',
//   'Content-Type': 'application/json;charset=UTF-8',
//   'X-CAPRICORN': 'capricorn.tongbanjie.com'

// };

// 注册antd-icon-font
Vue.component('AcIcon', AcIcon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
