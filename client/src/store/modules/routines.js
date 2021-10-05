import RoutinesService from "@/Warehouse/RoutinesService";

export default {
  namespaced: true,

  state: () => ({
    routines: [],
  }),

  mutations: {
    SET_ROUTINES(state, routines) {
      state.routines = routines;
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
    async createRoutine({ commit }, newRoutine) {
      const { data } = await RoutinesService.insertRoutine(newRoutine);
      commit("ADD_ROUTINE", data);
    },
  },

  getters: {
    routines(state) {
      return state.routines;
    },
  },
};
