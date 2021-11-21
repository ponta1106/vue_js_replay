import axios from 'axios'

const state = {
  tasks: [],
};
const getters = {
  tasks: state => state.tasks,
};
const mutations = {
  setTasks: (state, tasks) => {
    state.tasks = tasks
  },
  addTask: (state, task) => {
    state.tasks.push(task)
  },
};
const actions = {
  fetchTasks({ commit }) {
    axios.get('http://localhost:3000/api/tasks')
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
};

export default {
  state,
  getters,
  mutations,
  actions
}