<template>
  <div id="app">
    <TheNavigation />
    <Errors v-if="error" :msg="error" />
    <transition name="moveUp" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
import Errors from "@/components/Errors.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    TheNavigation,
    Errors,
  },
  computed: {
    ...mapGetters(["error"])
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Hahmlet:wght@300&family=Merriweather&family=Roboto+Slab&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");
@import url('https://fonts.googleapis.com/css2?family=Rubik+Beastly&display=swap');
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Hahmlet', serif;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: hidden;
}

.nav a.router-link-exact-active {
  color: turquoise;
  text-shadow: 0px 0px 10px turquoise;
}
</style>
