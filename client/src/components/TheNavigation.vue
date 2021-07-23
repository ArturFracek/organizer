<template>
  <div class="nav">
    <div class="nav_logo">
      <router-link to="/" class="main_link" v-if="!isLoggedIn">About organizing</router-link>
       <router-link :to="{ name: 'Organise' }" class="main_link" v-if="isLoggedIn">
        O r g a n i s e
      </router-link>
    </div>
    <div
      class="lower_links"
      :class="islower_linksActive ? 'active' : ''"
    >
      <router-link :to="{ name: 'Login' }" class="nav_link" v-if="!isLoggedIn">Sign in</router-link>
      <router-link :to="{ name: 'Register' }" class="nav_link" v-if="!isLoggedIn">Register</router-link>
      <router-link :to="{ name: 'Profile' }" class="nav_link" v-if="isLoggedIn">Profile</router-link>
      <a :to="{ name: 'Log-out' }" class="nav_link" v-if="isLoggedIn" @click.prevent='logoutUser'>Logout</a>
    </div>
     <a
      href="#"
      class="toggle-button"
      @click="islower_linksActive = !islower_linksActive"
    >
      <span class="bar color1"></span>
      <span class="bar color2"></span>
      <span class="bar color3"></span>
    </a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//import { toggleButton, nav_link } from "../constants"

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const lower_links = document.getElementsByClassName("lower_links")[0]


export default {
  data () {
    return {
      islower_linksActive: false,
    }
  },
  computed:{
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser(){
      this.logout();
    },
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Antic&family=Metal+Mania&family=Rock+Salt&display=swap");
* {
  box-sizing: border-box;
}

.nav {
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 9%;
  text-decoration: none;
  background-color: rgb(192, 187, 187);
  padding: 0.5rem;
}

.nav_logo {
  position: absolute;
  margin-left: auto;
  align-self: center;
  white-space: nowrap;
}

.lower_links {
  margin-left: auto;
}

.nav_link {
  font-size: 1.2rem;
  padding: 0 1rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
  text-shadow: 0px 0.5rem 0.5rem #bdb8b8;
  white-space: nowrap;
}

.nav_link:hover {
  border-color: #c0bdbd;
}

.main_link {
  font-size: 2.0rem;
  margin: .5rem;
  font-weight: bold;
  color: black;
  font-weight: bold;
  text-shadow: 0px 0.5rem 0.5rem #6b6868;
  text-decoration: none;
}

.toggle-button {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
}

.toggle-button .bar {
  height: 3px;
  width: 100%;
  border-radius: 10px;
}

.color1 {
  background-color: rgb(253, 253, 253);
}
.color2 {
  background-color: rgb(0, 255, 21);
}
.color3 {
  background-color: rgb(102, 237, 241);
}


@media (max-width: 600px) {

.toggle-button {
  display: flex;
}

.nav_link {
  display: flex;
  width: 100%;
  text-align: center;
}

.nav_link {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0.3rem;
}

.nav_logo {
  position: relative;
  margin-right: auto;
}

.nav_link:nth-child(1) {
  border-bottom: 0.5px solid black;
}

.nav {
  flex-direction: column;
  justify-content: center;
}

.lower_links {
  display: none;
  width: 100%;
  flex-direction: column;
}

.lower_links.active {
 display: flex;
}

}
</style>
