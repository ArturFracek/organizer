log stands for login
<template>
  <div class="log__container">
    <div class="log__title">Login to your Organizer</div>
    <div class="log__lower_container">
      <div class="log__form">
        <form @submit.prevent="loginUser">
          <div class="log__form__item">
            <input
              id="username"
              type="text"
              placeholder=" "
              name="username"
              v-model="username"
              class="input"
            />
            <label for="username" class="form__label form__label--username">Username</label>
          </div>
          <div class="log__form__item">
            <input
              id="password"
              type="password"
              placeholder=" "
              name="password"
              v-model="password"
              class="input"
            />
            <label for="password" class="form__label form__label--password">Password</label>
          </div>
          <div class="log__form__item">
            <input
              type="submit"
              class="log__button log__button--primary"
              value="Login"
            />
          </div>
          <div class="log__registration__container">
            <router-link
              to="/register"
              class="log__registration__link log__registration__link--one"
              >Need an Account ?</router-link
            >
            <router-link
              to="/register"
              class="log__registration__link log__registration__link--two"
              >Register now</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import router from "../router";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        username: this.username,
        password: this.password,
      };
      this.login(user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push("/profile");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.log__container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.log__container {
  background: repeating-linear-gradient(
      270deg,
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
      360deg,
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
      315deg,
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
      405deg,
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
    linear-gradient(360deg, rgb(33, 250, 250), rgb(4, 0, 5));
}

.log__lower_container {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.log__form {
  position: relative;
  width: 20rem;
  margin-bottom: auto;
  margin-top: 2rem;
}

.log__form__item {
  width: 100%;
  padding: 1.4rem 0;
}

form {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.form__label {
  position: absolute;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
  left: 200ms ease-in;
  font-size: 200ms ease-in;
  background-color: none;
  font-weight: bold;
  left: 2rem;
}

.form__label--username {
  top: 2.2rem;
}

.form__label--password {
  top: 7.9rem;
}

input {
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  color: rgb(0, 0, 0);
  padding: 0.7rem;
  background: none;
  outline: none;
  border: 2px solid rgb(35, 166, 170);
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(17, 185, 207));
}

input[type="text"],
input[type="password"] {
  color: whitesmoke;
}

input:hover {
  border-color: rgb(216, 25, 25);
  color: rgb(216, 25, 25);
}
input:hover ~ .log__button {
  color: rgb(216, 25, 25);
}
input:hover ~ .form__label--username {
  color: rgb(216, 25, 25);
}
input:hover ~ .form__label--password {
  color: rgb(216, 25, 25);
}

input:focus,
textarea {
  color: turquoise;
  border-color: turquoise;
  background-color: none;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(15px) drop-shadow(4px 4px 10px rgb(7, 207, 233));
}

input:focus ~ .form__label--username,
input:focus ~ .form__label--password {
  color: turquoise;
  text-shadow: 0px 0px 0.1rem turquoise;
}

input:focus ~ .form__label--username,
input:not(:placeholder-shown).input:not(:focus) ~ .form__label--username {
  top: 0.1rem;
}

input:focus ~ .form__label--password,
input:not(:placeholder-shown).input:not(:focus) ~ .form__label--password {
  top: 5.95rem;
}

.log__title {
  color: rgb(230, 230, 230);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-weight: bold;
  font-size: 1.6rem;
  color: rgb(251, 255, 254);
  margin-top: 4rem;
  animation: text1 1.8s ease;
  text-shadow: 0.2rem 0px 0.2rem turquoise;
}

@keyframes text1 {
  0% {
    color: rgb(0, 0, 0);
    opacity: 0;
    text-shadow: 0.6rem 0rem 0.8rem turquoise, -0.6rem 0rem 0.8rem turquoise,
      0rem 0.6rem 0.8rem turquoise, 0rem -0.6rem 0.8rem turquoise;
    filter: hue-rotate(180deg);
  }
  20% {
    opacity: 0.8;
    filter: hue-rotate(0deg);
  }
  70% {
    opacity: 1;
    text-shadow: 0.3rem 0rem 0.8rem turquoise, -0.3rem 0rem 0.8rem turquoise,
      0rem 0.3rem 0.8rem turquoise, 0rem -0.3rem 0.8rem turquoise;
    filter: hue-rotate(0deg);
  }
  90% {
    opacity: 1;
    text-shadow: 0.2rem 0rem 1.4rem turquoise, -0.2rem 0rem 1.4rem turquoise,
      0rem 0.2rem 1.4em turquoise, 0rem -0.2rem 1.4rem turquoise;
    filter: hue-rotate(180deg);
  }
  100% {
    opacity: 1;
    text-shadow: 0.2rem 0px 0.2rem turquoise;
    filter: hue-rotate(0deg);
  }
}

.log__button {
  color: white;
  border-radius: 0;
  padding: 0.9rem 0;
  color: rgb(241, 255, 252);
  font-weight: bold;
}

.log__button:focus {
  color: turquoise;
}

.log__registration__container {
  height: 2rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.log__registration__link {
  text-decoration: none;
  color: whitesmoke;
  font-weight: bold;
  text-shadow: 1px 1px 10px whitesmoke;
  opacity: 1;
  animation: shown 1s;
}

.log__registration__link--two:focus {
  color: turquoise;
}

@keyframes shown {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.log__registration__link--one {
  display: flex;
  opacity: 1;
}

.log__registration__link--two {
  display: none;
  opacity: 0;
}

.log__registration__link {
  text-decoration: none;
  color: whitesmoke;
  font-weight: bold;
  text-shadow: 1px 1px 10px whitesmoke;
  animation: shown 1s;
}

@keyframes shown {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.log__registration__container:hover .log__registration__link--one {
  display: none;
  opacity: 0;
}
.log__registration__container:hover .log__registration__link--two {
  display: flex;
  opacity: 1;
}
</style>
