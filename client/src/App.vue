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

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Hahmlet', serif;
font-family: 'Merriweather', serif;
font-family: 'Roboto Slab', serif;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}

.nav a.router-link-exact-active {
  color: turquoise;
  text-shadow: 0px 0px 10px turquoise;
}
</style>
