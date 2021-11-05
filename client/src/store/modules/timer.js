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
    },
    START_TIMER(state, { activityId, name }) {
      if (state.timerState !== "running") {
        state.timerState = "running";
        state.timerStartedAt = new Date();
        state.timerActivityId = activityId;
        state.timerActvityName = name;
      }
    },
    STOP_TIMER(state) {
      if (state.timerState === "running") {
        state.timerState = "stopped";
      }
    },
    RESET_TIMER(state) {
      state.timerState = "stopped";
      state.timerStartedAt = null;
    },
  },

  actions: {
    async stopTimerAndSave({ dispatch, getters, rootGetters, commit, state }) {
      const activity = rootGetters["activities/activityById"](
        state.timerActivityId
      );
      const activityWithUpdatedDuration = {
        ...activity,
        duration: getters.timerDiff,
      };
      await dispatch("activities/updateActivity", activityWithUpdatedDuration, {
        root: true,
      });
      commit("RESET_TIMER");
    },
  },

  getters: {
    currentTime(state) {
      return state.currentTime;
    },
    timerDiff(state, getters, rootState, rootGetters) {
      if (!state.timerStartedAt) return "Select Activity";
      const activity = rootGetters["activities/activityById"](
        state.timerActivityId
      );
      const activityDuration = activity.duration || 0;
      const diff = Math.abs(
        Math.ceil((state.currentTime - state.timerStartedAt) / 1000)
      );
      return activityDuration + diff;
    },
  },
};
