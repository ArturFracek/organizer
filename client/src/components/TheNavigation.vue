<template>
  <div class="nav">
    <div class="nav__logo">
      <router-link
        :to="{ name: 'AboutOrganizing' }"
        class="nav__mainLink"
        v-if="!isLoggedIn"
        >About Organizer</router-link
      >
      <router-link
        :to="{ name: 'Organize' }"
        class="nav__mainLink organize"
        v-if="isLoggedIn"
        data-test="organize"
      >
        Organize
      </router-link>
    </div>
    <div class="nav__lowerLinks" :class="islower_linksActive ? 'active' : ''">
      <router-link
        :to="{ name: 'AboutOrganizing' }"
        class="nav__link nav__link--toLeft"
        v-if="isLoggedIn"
        >About Organizer</router-link
      >
      <router-link :to="{ name: 'Login' }" class="nav__link" v-if="!isLoggedIn"
        >Sign in</router-link
      >
      <router-link
        :to="{ name: 'Register' }"
        class="nav__link"
        v-if="!isLoggedIn"
        >Register</router-link
      >
      <router-link :to="{ name: 'Profile' }" class="nav__link" v-if="isLoggedIn"
        >Profile</router-link
      >
      <a
        :to="{ name: 'Log-out' }"
        class="nav__link"
        v-if="isLoggedIn"
        @click.prevent="logoutUser"
        >Logout</a
      >
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

export default {
  data() {
    return {
      islower_linksActive: false,
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Antic&family=Metal+Mania&family=Rock+Salt&display=swap");
* {
  box-sizing: border-box;
  color: whitesmoke;
}

.nav {
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 9%;
  text-decoration: none;
  background: repeating-linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.11) 0px,
      rgba(0, 0, 0, 0.11) 12px,
      rgba(1, 1, 1, 0.16) 12px,
      rgba(1, 1, 1, 0.16) 24px,
      rgba(0, 0, 0, 0.14) 24px,
      rgba(0, 0, 0, 0.14) 36px,
      rgba(0, 0, 0, 0.23) 36px,
      rgba(0, 0, 0, 0.23) 48px,
      rgba(0, 0, 0, 0.12) 48px,
      rgba(0, 0, 0, 0.12) 60px,
      rgba(1, 1, 1, 0.07) 60px,
      rgba(1, 1, 1, 0.07) 72px,
      rgba(0, 0, 0, 0.21) 72px,
      rgba(0, 0, 0, 0.21) 84px,
      rgba(0, 0, 0, 0.24) 84px,
      rgba(0, 0, 0, 0.24) 96px,
      rgba(1, 1, 1, 0.23) 96px,
      rgba(1, 1, 1, 0.23) 108px,
      rgba(1, 1, 1, 0.07) 108px,
      rgba(1, 1, 1, 0.07) 120px,
      rgba(0, 0, 0, 0.01) 120px,
      rgba(0, 0, 0, 0.01) 132px,
      rgba(1, 1, 1, 0.22) 132px,
      rgba(1, 1, 1, 0.22) 144px,
      rgba(1, 1, 1, 0.24) 144px,
      rgba(1, 1, 1, 0.24) 156px,
      rgba(0, 0, 0, 0) 156px,
      rgba(0, 0, 0, 0) 168px,
      rgba(0, 0, 0, 0.12) 168px,
      rgba(0, 0, 0, 0.12) 180px
    ),
    repeating-linear-gradient(
      180deg,
      rgba(1, 1, 1, 0.01) 0px,
      rgba(1, 1, 1, 0.01) 12px,
      rgba(1, 1, 1, 0.15) 12px,
      rgba(1, 1, 1, 0.15) 24px,
      rgba(0, 0, 0, 0.09) 24px,
      rgba(0, 0, 0, 0.09) 36px,
      rgba(0, 0, 0, 0.02) 36px,
      rgba(0, 0, 0, 0.02) 48px,
      rgba(0, 0, 0, 0.1) 48px,
      rgba(0, 0, 0, 0.1) 60px,
      rgba(1, 1, 1, 0.07) 60px,
      rgba(1, 1, 1, 0.07) 72px,
      rgba(1, 1, 1, 0.15) 72px,
      rgba(1, 1, 1, 0.15) 84px,
      rgba(0, 0, 0, 0.18) 84px,
      rgba(0, 0, 0, 0.18) 96px,
      rgba(1, 1, 1, 0.15) 96px,
      rgba(1, 1, 1, 0.15) 108px,
      rgba(1, 1, 1, 0.09) 108px,
      rgba(1, 1, 1, 0.09) 120px,
      rgba(1, 1, 1, 0.07) 120px,
      rgba(1, 1, 1, 0.07) 132px,
      rgba(1, 1, 1, 0.05) 132px,
      rgba(1, 1, 1, 0.05) 144px,
      rgba(0, 0, 0, 0.1) 144px,
      rgba(0, 0, 0, 0.1) 156px,
      rgba(1, 1, 1, 0.18) 156px,
      rgba(1, 1, 1, 0.18) 168px
    ),
    repeating-linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.24) 0px,
      rgba(0, 0, 0, 0.24) 16px,
      rgba(1, 1, 1, 0.06) 16px,
      rgba(1, 1, 1, 0.06) 32px,
      rgba(0, 0, 0, 0.16) 32px,
      rgba(0, 0, 0, 0.16) 48px,
      rgba(1, 1, 1, 0) 48px,
      rgba(1, 1, 1, 0) 64px,
      rgba(1, 1, 1, 0.12) 64px,
      rgba(1, 1, 1, 0.12) 80px,
      rgba(1, 1, 1, 0.22) 80px,
      rgba(1, 1, 1, 0.22) 96px,
      rgba(0, 0, 0, 0.24) 96px,
      rgba(0, 0, 0, 0.24) 112px,
      rgba(0, 0, 0, 0.25) 112px,
      rgba(0, 0, 0, 0.25) 128px,
      rgba(1, 1, 1, 0.12) 128px,
      rgba(1, 1, 1, 0.12) 144px,
      rgba(0, 0, 0, 0.18) 144px,
      rgba(0, 0, 0, 0.18) 160px,
      rgba(1, 1, 1, 0.03) 160px,
      rgba(1, 1, 1, 0.03) 176px,
      rgba(1, 1, 1, 0.1) 176px,
      rgba(1, 1, 1, 0.1) 192px
    ),
    repeating-linear-gradient(
      225deg,
      rgba(1, 1, 1, 0.18) 0px,
      rgba(1, 1, 1, 0.18) 3px,
      rgba(0, 0, 0, 0.09) 3px,
      rgba(0, 0, 0, 0.09) 6px,
      rgba(0, 0, 0, 0.08) 6px,
      rgba(0, 0, 0, 0.08) 9px,
      rgba(1, 1, 1, 0.05) 9px,
      rgba(1, 1, 1, 0.05) 12px,
      rgba(0, 0, 0, 0.01) 12px,
      rgba(0, 0, 0, 0.01) 15px,
      rgba(1, 1, 1, 0.12) 15px,
      rgba(1, 1, 1, 0.12) 18px,
      rgba(0, 0, 0, 0.05) 18px,
      rgba(0, 0, 0, 0.05) 21px,
      rgba(1, 1, 1, 0.16) 21px,
      rgba(1, 1, 1, 0.16) 24px,
      rgba(1, 1, 1, 0.07) 24px,
      rgba(1, 1, 1, 0.07) 27px,
      rgba(1, 1, 1, 0.23) 27px,
      rgba(1, 1, 1, 0.23) 30px,
      rgba(0, 0, 0, 0.2) 30px,
      rgba(0, 0, 0, 0.2) 33px,
      rgba(0, 0, 0, 0.18) 33px,
      rgba(0, 0, 0, 0.18) 36px,
      rgba(1, 1, 1, 0.12) 36px,
      rgba(1, 1, 1, 0.12) 39px,
      rgba(1, 1, 1, 0.13) 39px,
      rgba(1, 1, 1, 0.13) 42px,
      rgba(1, 1, 1, 0.2) 42px,
      rgba(1, 1, 1, 0.2) 45px,
      rgba(1, 1, 1, 0.18) 45px,
      rgba(1, 1, 1, 0.18) 48px,
      rgba(0, 0, 0, 0.2) 48px,
      rgba(0, 0, 0, 0.2) 51px,
      rgba(1, 1, 1, 0) 51px,
      rgba(1, 1, 1, 0) 54px,
      rgba(0, 0, 0, 0.03) 54px,
      rgba(0, 0, 0, 0.03) 57px,
      rgba(1, 1, 1, 0.06) 57px,
      rgba(1, 1, 1, 0.06) 60px,
      rgba(1, 1, 1, 0) 60px,
      rgba(1, 1, 1, 0) 63px,
      rgba(0, 0, 0, 0.1) 63px,
      rgba(0, 0, 0, 0.1) 66px,
      rgba(1, 1, 1, 0.19) 66px,
      rgba(1, 1, 1, 0.19) 69px
    ),
    linear-gradient(180deg, rgb(2, 137, 137), rgb(9, 9, 9));
  padding: 8px;
  border-bottom: 3px solid rgba(15, 210, 224, 0.1);
  box-shadow: 15px 10px 8px turquoise;
}

.nav__logo {
  position: absolute;
  margin-left: auto;
  align-self: center;
  white-space: nowrap;
}

.nav__lowerLinks {
  margin-left: auto;
  margin-right: 16px;
}

.nav__link {
  font-size: 19.2px;
  padding: 0px 16px;
  text-decoration: none;
  color: whitesmoke;
  font-weight: bold;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.5s;
}

.nav__link--toLeft {
  position: fixed;
  justify-self: flex-start;
  left: 0;
}

.nav__link:hover {
  color: red;
  text-shadow: 0 0 3px rgb(255, 30, 0);
  border-top: 1px solid red;
  border-bottom: 1px solid red;
  border-radius: 8px;
  padding: 6.4px 16px;
}

.nav__mainLink {
  letter-spacing: 1.6px;
  font-size: 32px;
  margin: 8px;
  font-weight: bold;
  color: rgba(255, 254, 254, 0.938);
  font-weight: bold;
  text-shadow: 0px 0px 3.2px rgb(75, 252, 243), 0px 0px 3.2px rgb(75, 252, 243);
  text-decoration: none;
  transition: 0.5s;
}

.nav__mainLink:hover {
  color: #ff0000;
  text-shadow: 0px 0px 10px rgb(255, 255, 255, 0);
  border-left: 1px solid red;
  border-right: 1px solid red;
  border-radius: 12px;
  padding: 0 10px;
}

.organize {
  animation: text1 1.8s ease;
}
@keyframes text1 {
  0% {
    color: rgb(0, 0, 0);
    opacity: 0;
    text-shadow: 9.6px 0px 12.8px turquoise, -9.6px 0px 12.8px turquoise,
      0px 9.6px 12.8px turquoise, 0px -9.6px 12.8px turquoise;
    filter: hue-rotate(0deg);
  }
  20% {
    opacity: 0.8;
    filter: hue-rotate(0deg);
  }
  70% {
    opacity: 1;
    text-shadow: 4.8px 0px 12.8px turquoise, -4.8px 0px 12.8px turquoise,
      0px 4.8px 12.8px turquoise, 0px -4.8px 12.8px turquoise;
    filter: hue-rotate(180deg);
  }
  90% {
    opacity: 1;
    text-shadow: 3.2px 0px 22.4px turquoise, -3.2px 0px 22.4px turquoise,
      0px 3.2px 1.4em turquoise, 0px -3.2px 22.4px turquoise;
    filter: hue-rotate(180deg);
  }
  100% {
    opacity: 1;
    text-shadow: 3.2px 0px 3.2px turquoise;
    filter: hue-rotate(0deg);
  }
}

.toggle-button {
  position: absolute;
  top: 12px;
  right: 16px;
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
  background-color: rgb(11, 126, 126);
}
.color2 {
  background-color: rgb(34, 252, 252);
}
.color3 {
  background-color: rgb(248, 255, 255);
}

@media (max-width: 760px) {
  .toggle-button {
    display: flex;
  }

  .nav__link {
    font-size: 17px;
    display: flex;
    width: 100%;
    text-align: center;
    padding: 0px;
    justify-content: center;
    cursor: pointer;
  }

  .nav__link:hover {
    color: red;
  }

  .nav__logo {
    position: relative;
    margin-right: auto;
  }

  .organize, .nav__mainLink {
    font-size: 24px;
  }

  .nav__link:nth-child(1) {
    border-bottom: 0.3px solid rgba(0, 0, 0, 0);
  }

  .nav {
    flex-direction: column;
    justify-content: center;
  }

  .nav__lowerLinks {
    display: none;
    width: 100%;
    flex-direction: column;
  }

  .nav__lowerLinks.active {
    display: flex;
    position: relative;
  }
  .nav__link--toLeft {
    position: relative;
  }
}
</style>
