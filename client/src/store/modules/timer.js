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
    SET_CURRENT_TIME(state, interval) {
      state.currentTime = new Date();
      console.log(interval);
    },
    START_TIMER(state, activityData) {
      if (state.timerState !== "running") {
        state.timerState = "running";
        state.timerStartedAt = new Date();
        state.timerActivityId = activityData[0];
        state.timerActvityName = activityData[1];
      }
    },
    STOP_TIMER(state, activityData) {
      if (state.timerState === "running") {
        state.timerState = "stopped";
      }
    },
    RESET_TIMER(state, activityData) {
      state.timerState = "stopped";
      state.timerStartedAt = null;
    },
  },

  actions: {
    addDuration({ dispatch }, activity) {
      dispatch("activities/updateActivity", activity, { root: true });
    },
  },

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