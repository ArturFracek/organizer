export default {
  namespaced: true,

  state: () => ({
    currentTime: new Date(),
  }),

  mutations: {
    SET_CURRENT_TIME(state) {
      state.currentTime = new Date();
    },
  },

  actions: {},

  getters: {
    currentTime(state) {
      return state.currentTime;
    },
  },
};
