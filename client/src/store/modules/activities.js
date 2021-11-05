import ActivitiesService from "@/Warehouse/ActivitiesService";

export default {
  namespaced: true,

  state: () => ({
    activities: [],
  }),

  mutations: {
    SET_ACTIVITIES(state, activities) {
      state.activities = activities;
    },
    ADD_ACTIVITY(state, Activity) {
      state.activities.push(Activity);
    },
  },

  actions: {
    async fetchAllActivities({ commit }) {
      const activities = await ActivitiesService.getActivities();
      commit("SET_ACTIVITIES", activities);
    },
    async updateActivity({ dispatch }, updatedActivity) {
      await ActivitiesService.updateActivity(updatedActivity);
      console.log(updatedActivity)
      await dispatch("fetchAllActivities");
    },
    async deleteActivity({ dispatch }, { id }) {
      await ActivitiesService.deleteActivity(id);
      await dispatch("fetchAllActivities");
    },
    async createActivity({ dispatch }, newActivity) {
      const { data } = await ActivitiesService.insertActivity(newActivity);
      await dispatch("fetchAllActivities");
    },
  },

  getters: {
    activities(state) {
      return state.activities;
    },
    activityById(state) {
      return (id) => state.activities.find(a => a._id === id)
    }
  },
};
