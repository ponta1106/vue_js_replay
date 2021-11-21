import axios from 'axios'

const state = {
  users: [],
};
const getters = {
  users: state => state.users,
  tasks: state => state.tasks,
};
const mutations = {
  setUsers: (state, users) => {
    state.users = users
  },
};
const actions = {
  fetchUsers({ commit }) {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      commit('setUsers', res.data)
    })
    .catch(err => console.log(err.response));
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}