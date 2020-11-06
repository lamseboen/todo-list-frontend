import Vue from 'vue'
import Vuex from 'vuex'
import dataDummy from "./dataDummy"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: dataDummy,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
