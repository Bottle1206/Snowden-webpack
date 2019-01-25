import ah from '../../util/request.js';
import api from '../api.js';
import { Message } from 'element-ui';

const state = {
  dataSource: [],
  loading: false,
  pageNum: 1,
  total: null,
  // filter
  name: ''
}

// actions
const actions = {
  query ({ commit, state }, payload) {
    commit('updateState', { loading: true })
    ah.normalAjaxPost(api.AcitityGuery, param, (state, res) => {
      if (state === 1 && res.code === 0) {
        // commit('updateState', {})
      } else {
        Message({
          type: 'error',
          message: res.errorMsg || '请求错误'
        })
      }
      commit('updateState', { loading: false })
    })
  }
}

const mutations = {
  updateState (state, payload) {
    state = Object.assign(state, payload)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}