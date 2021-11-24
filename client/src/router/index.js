import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AboutOrganizing",
    component: () => import("../views/AboutOrganizing.vue"),
  },
  {
    path: "/organize",
    name: "Organize",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Organise.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/Registration.vue"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../components/Profile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next("/login");
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      next("/profile");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
