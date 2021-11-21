const state = {
  now: '00:00:00',
};
const getters = {
  now: state => state.now,
};
const mutations = {
  getCurrentTime: (state) => {
    setInterval(() => {
      var date = new Date();
      state.now =
      // 時刻を２桁で表示する為に
      // .toString().padStart(2, '0')を付与している
      date.getHours().toString().padStart(2, '0')
       + ':' +
      date.getMinutes().toString().padStart(2, '0')
      + ':' +
      date.getSeconds().toString().padStart(2, '0')
    }, 1);
  },
};
const actions = {
  getCurrentTime({ commit }) {
    commit('getCurrentTime');
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}