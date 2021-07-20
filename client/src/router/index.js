import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

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
      import(/* webpackChunkName: "Organise" */ "../views/Organise.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import("../components/LoginModal.vue"),
      meta:{
        requiresGuest: true
      }
  },
  {
    path: "/Register",
    name: "Register",
    component: () =>
      import("../components/RegisterModal.vue"),
      meta:{
        requiresGuest: true
      }
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../components/ProfileModal.vue"),
      meta:{
        requiresAuth: true
      }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/login')
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)){
      if(store.getters.isLoggedIn) {
        next('/profile');
      } else {
        next();
      }
    } else {
      next()
    }
})

export default router;
