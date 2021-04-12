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
  components: {
    TheNavigation,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Antic&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Antic", sans-serif;
  margin: 0;
  padding: 0;
}

.nav a.router-link-exact-active {
  color: #ffffff;
  text-shadow: 0px 10px 10px #332d2d;
}
</style>
