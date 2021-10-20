import RoutinesService from "@/Warehouse/RoutinesService";

export default {
  namespaced: true,

  state: () => ({
    routines: [],
  }),

  mutations: {
    SET_ROUTINES(state, routines) {
      state.routines = routines;
      state.status = "loading"
    },
    ADD_ROUTINE(state, routine) {
      state.routines.push(routine);
    },
  },

  actions: {
    async fetchAllRoutines({ commit }) {
      const routines = await RoutinesService.getRoutines();
      commit("SET_ROUTINES", routines);
    },
    async updateRoutine({ dispatch }, updatedRoutine) {
      await RoutinesService.updateRoutine(updatedRoutine);
      await dispatch("fetchAllRoutines");
    },
    async deleteRoutine({ dispatch }, { id }) {
      await RoutinesService.deleteRoutine(id);
      await dispatch("fetchAllRoutines");
    },
    async createRoutine({ dispatch }, newRoutine) {
      const { data } = await RoutinesService.insertRoutine(newRoutine);
      await dispatch("fetchAllRoutines");
    },
  },

  getters: {
    routines(state) {
      return state.routines;
    },
    activeRoutine(state) {
      return state.routines.find((r) => r.is_active);
    },
  },
};
