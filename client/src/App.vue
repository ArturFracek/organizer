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
import { mapGetters, mapMutations } from "vuex";

export default {
  metaInfo: {
    title: "Organizer",
  },
  data() {
    return {
      interval: "running",
    };
  },
  components: {
    TheNavigation,
    Errors,
  },
  computed: {
    ...mapGetters(["error"]),
  },
  methods: {
    ...mapMutations({
      SET_CURRENT_TIME: "timer/SET_CURRENT_TIME",
    }),
  },
  mounted() {
    this.interval = setInterval(() => {
      this.SET_CURRENT_TIME(this.interval);
    }, 1000);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Hahmlet:wght@300&family=Merriweather&family=Roboto+Slab&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");
@import url("https://fonts.googleapis.com/css2?family=Acme&family=Rubik+Beastly&display=swap");

html,
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
  font-size: 16px;
}

* {
  box-sizing: inherit;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Hahmlet", serif;
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

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 2px solid rgb(15, 151, 163);
  -webkit-text-fill-color: rgb(255, 255, 255);
  -webkit-box-shadow: 0 0 0px 1000px rgb(0, 0, 0) inset;
  transition: background-color 5000s ease-in-out 0s;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: rgb(108, 161, 163);
}
::-webkit-scrollbar-thumb {
  background: rgb(8, 112, 112);
  border-style: solid;
  border-width: 6px;
  border-image: linear-gradient(to bottom, rgb(112, 238, 255), rgb(19, 93, 95))
    1;
  border-image-repeat: stretch;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.6);
}

.scroller {
  overflow-y: scroll;
  scrollbar-color: #0478fd #c2d2e4;
}
</style>
