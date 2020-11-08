import Vue from 'vue'
import Vuex from 'vuex'
import dataDummy from "./dataDummy"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: dataDummy,
  },
  mutations: {
    addTodo(state, payload){
      state.todos.push(payload)
    },
    delTodo(state, payload){
      // console.log(payload)
      state.todos = state.todos.filter(el=>{
        return el.id !== payload
      })
    },
    updateTodo(state, payload){
      console.log(state.todos)
      state.todos = state.todos.filter(el=>{
        return el.id !== payload.id
      })
      console.log(state.todos)
      state.todos = [...state.todos, payload]
      console.log(state.todos)
    }
  },
  actions: {
    addTodo({commit}, payload){
      commit('addTodo', payload)
    },
    delTodo({commit}, payload){
      commit('delTodo', payload)
    },
    updateTodo({commit}, payload){
      commit('updateTodo', payload)
    }
  },
  modules: {
  }
})
