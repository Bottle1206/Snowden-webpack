import vue from 'vue';
import Vuex from 'vuex';
import ah from '../util/request.js';
import api from './api.js';
import { Message } from 'element-ui';

import home from './modules/home';
import activity from './modules/activity';

vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  actions: {
    isLogin({ commit, state }, payload) {
      ah.normalAjax(api.ISACCESSIBLE, {}, (state, res) => {
        if (state === 1) {
          // commit('updateState', {})
        } else {
          Message({
            type: 'error',
            message: '请求错误'
          })
        }
      })
    }
  },
  mutations: {
    updateState (state, payload) {
      state = Object.assign(state, payload)
    }
  },
  modules: {
    home,
    activity
  }
})