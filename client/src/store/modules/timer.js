export default {
  namespaced: true,

  state: () => ({
    currentTime: new Date(),
    timerState: "stopped",
    timerStartedAt: undefined,
    id: "",
  }),

  mutations: {
   async SET_CURRENT_TIME(state) {
      state.currentTime = new Date();
    },
    TOGGLE_TIMER(state, payload) {
      if (state.timerState !== "running") {
        state.timerState === "running";
        state.timerStartedAt = new Date();
        state.id = payload.routine._id;
        console.log(payload.routine.activitiesOccurences.activityId)
      } else {
        state.timerState === "stopped";
         setInterval(() => {
         dispatchEvent("SET_CURRENT_TIME()");
         }, 0);
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
      const diff = Math.abs(Math.round(
        (state.currentTime - state.timerStartedAt) / 1000)
      );
      return diff;
    },
  },
};
