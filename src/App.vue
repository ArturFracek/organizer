<template>
  <div id="app">
    <TheNavigation />
    <transition name="moveUp" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  setup() {

  },
  components: {
    TheNavigation,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Antic&display=swap");

*{
  padding: 0;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Antic", sans-serif;
}

.nav a.router-link-exact-active {
  color: #ffffff;
  text-shadow: 0px 10px 10px  #332d2d;
}
</style>
