import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home';
import Activity from '@/views/activity';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      name: '首页',
      component: Home
    }, {
      path: '/activity',
      name: '活动',
      component: Activity
    }
  ]
})
