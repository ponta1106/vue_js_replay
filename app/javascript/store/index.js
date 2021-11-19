import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    count: 2,
  },
  //gettersはstateの値を参照する際に使用する
  getters: {
    count: state => state.count,
    tasks: state => state.tasks,
  },
  // mutationsでしか、データの値を変えないようにする方が安全
  mutations: {
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    },
    setTasks: (state, tasks) => {
      state.tasks = tasks
    },
    addTask: (state, task) => {
      state.tasks.push(task)
    }
  },
  actions: {
    increment({ commit }, number) {
      commit('increment', number);
    },
    decrement({ commit }, number) {
      commit('decrement', number);
    },
    fetchTasks({ commit }) {
      axios.get('tasks')
        .then(res => {
          commit('setTasks', res.data)
        })
        .catch(err => console.log(err.response));
    },
    createTask({ commit }, task) {
      return axios.post('tasks', task)
        .then(res => {
          commit('addTask', res.data)
        })
    },
  },
})