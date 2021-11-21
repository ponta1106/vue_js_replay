import Vue from 'vue'
import Vuex from 'vuex'
import now from './modules/now'
import count from './modules/count'
import tasks from './modules/tasks'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    now,
    count,
    tasks,
    users,
  }
})
