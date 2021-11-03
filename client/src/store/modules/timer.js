export default {
  namespaced: true,

  state: () => ({
    currentTime: null,
    timerState: "stopped",
    timerStartedAt: null,
    timerActivityId: "",
    timerActvityName: "",
  }),

  mutations: {
    async SET_CURRENT_TIME(state) {
      state.currentTime = new Date();
    },
    TOGGLE_TIMER(state, activityData) {
      if (state.timerState !== "running") {
        state.timerState = "running";
        state.timerStartedAt = new Date();
        state.timerActivityId = activityData[0];
        state.timerActvityName = activityData[1];
      } else {
        state.timerState = "stopped";
        state.timerStartedAt = null;
      }
    },
  },

  actions: {},

  getters: {
    currentTime(state) {
      return state.currentTime;
    },
    timerDiff(state) {
      if (!state.timerStartedAt) return "00:00:00";
      const diff = Math.abs(
        Math.ceil((state.currentTime - state.timerStartedAt) / 1000)
      );
      return diff;
    },
  },
};
