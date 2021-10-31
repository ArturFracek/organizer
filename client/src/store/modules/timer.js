export default {
  namespaced: true,

  state: () => ({
    currentTime: new Date(),
    timerState: "stopped",
    timerStartedAt: null,
  }),

  mutations: {
    SET_CURRENT_TIME(state) {
      state.currentTime = new Date();
    },
    TOGGLE_TIMER(state) {
      if (state.timerState !== "running") {
        state.timerState === "running";
        state.timerStartedAt = new Date();
      } //else {
      //   state.timerState === "stopped";
      //   setInterval(() => {
      //     dispatchEvent.SET_CURRENT_TIME();
      //   }, 2000);
      // }
    }
  },

  actions: {
    
  },

  getters: {
    currentTime(state) {
      return state.currentTime;
    },
    timerDiff(state) {
      if (!state.timerStartedAt) return "00:00:00";
      const diff = Math.floor(
        (state.currentTime - state.timerStartedAt) / 1000
      );
      return diff;
    },
  },
};
