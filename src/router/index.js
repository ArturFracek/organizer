import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Organise",
    name: "Organise",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "organise" */ "../views/Organise.vue"),
  },
  {
    path: "/Add-Routine",
    name: "MyRoutines",
    component: () =>
      import(
        /* webpackChunkName: "MyRoutines" */ "../views/MyRoutines.vue"
      ),
  },
  {
    path: "/Add-Activities",
    name: "MyActivities",
    component: () =>
      import(
        /* webpackChunkName: "MyActivities" */ "../views/MyActivities.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
