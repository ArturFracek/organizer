import Vue from "vue";
import Vuex from "vuex";
import routines from "./modules/routines.js";
import Auth from "../Warehouse/Auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    routines,
  },
});
