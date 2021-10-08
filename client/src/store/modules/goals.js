import GoalsService from "@/Warehouse/GoalsService";

export default {
  namespaced: true,

  state: () => ({
    goals: [],
  }),

  mutations: {
    SET_GOALS(state, goals) {
      state.goals = goals;
    },
    ADD_GOAL(state, goal) {
      state.goals.push(goal);
    },
  },

  actions: {
    async fetchAllGoals({ commit }) {
      const goals = await GoalsService.getGoals();
      commit("SET_GOALS", goals);
    },
    async updateGoal({ dispatch }, updatedGoal) {
      await GoalsService.updateGoal(updatedGoal);
      await dispatch("fetchAllGoals");
    },
    async deleteGoal({ dispatch }, { id }) {
      await GoalsService.deleteGoal(id);
      await dispatch("fetchAllGoals");
    },
    async createGoal({ dispatch }, newGoal) {
      const { data } = await GoalsService.insertGoal(newGoal);
      await dispatch("fetchAllGoals")
    },
  },

  getters: {
    goals(state) {
      return state.goals;
    },
  },
};
