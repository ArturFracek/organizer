import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.config.productionTip = false;

//Setting default vue's http modules for api calls
Vue.prototype.$http = axios;

//Load the token from the local storage
const token = localStorage.getItem("token")

//If there is any token we will simply append default axios authorization headers

if(token){
Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
};

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
