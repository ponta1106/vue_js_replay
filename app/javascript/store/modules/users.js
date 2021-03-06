import axios from 'axios'

const state = {
  users: [],
};
const getters = {
  users: state => state.users,
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
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}