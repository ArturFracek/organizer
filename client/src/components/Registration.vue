reg stands for registration
<template>
  <div class="reg__container">
    <div class="reg__title">Register</div>
    <div class="reg__lower_container">
      <div class="reg__form">
        <form @submit.prevent="registerUser">
          <div class="reg__form__item">
            <input
              id="email"
              type="text"
              placeholder=" "
              name="username"
              v-model="email"
              class="input"
              data-test="registerUsername"
            />
            <label for="email" class="form__label form__label--email"
              >Email</label
            >
          </div>
          <div class="reg__form__item">
            <input
              id="name"
              type="text"
              placeholder=" "
              name="Name"
              v-model="name"
              class="input"
              data-test="registerName"
            />
            <label for="name" class="form__label form__label--name">Name</label>
          </div>
          <div class="reg__form__item reg__form_item--username">
            <input
              id="username"
              type="text"
              placeholder=" "
              name="username"
              v-model="username"
              class="input"
              data-test="registerUsername"
            />
            <label for="username" class="form__label form__label--username"
              >Username</label
            >
          </div>
          <div class="reg__form__item">
            <input
              id="password"
              type="password"
              placeholder=" "
              name="password"
              v-model="password"
              class="input"
              data-test="registerPassword"
            />
            <label for="password" class="form__label form__label--password"
              >Password</label
            >
          </div>
          <div class="reg__form__item">
            <input
              id="confirm_password"
              type="password"
              placeholder=" "
              name="confirm_password"
              v-model="confirm_password"
              class="input"
              data-test="registerPasswordConfirm"
            />
            <label
              for="confirm_password"
              class="form__label form__label--confirmPassword"
              >Confirm Password</label
            >
          </div>
          <div class="reg__form__item reg__form__button">
            <input
              type="submit"
              class="reg__button reg__button--primary"
              value="Register"
              data-test="registerRegister"
            />
          </div>
          <div class="reg__login__container">
            <router-link
              to="/login"
              class="reg__login__link reg__login__link--one"
              data-test="registerToLogin"
              >Arleady have an account ?</router-link
            >
            <router-link
              to="/login"
              class="reg__login__link reg__login__link--two"
              data-test="registerToLoginHovered"
              >Sign in now</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      password: "",
      username: "",
      confirm_password: "",
      email: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name,
      };
      this.register(user).then((res) => {
        if (res.data.success) {
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>

<style scoped>
.reg__container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.reg__container {
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
* {
  box-sizing: inherit;
}

.reg__lower_container {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.reg__form {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;
  height: 90%;
  position: relative;
  margin-bottom: auto;
}

.reg__form__item {
  width: 320px;
  padding: 22.4px 22.4px;
}

.reg__form_item--username,
.reg__form__button {
  margin: 0 160px;
}

.reg__login__container {
  flex-basis: 640px;
}

form {
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 640px;
  flex-wrap: wrap;
}

.form__label {
  background-color: none;
  font-weight: bold;
  position: absolute;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
  left: 200ms ease-in;
  font-size: 200ms ease-in;
}

.form__label--username {
  top: 131.2px;
  left: 276.8px;
}

.form__label--name {
  top: 36.8px;
  left: 544px;
}

.form__label--email {
  top: 36.8px;
  left: 48px;
}

.form__label--password {
  top: 224px;
  left: 48px;
}

.form__label--confirmPassword {
  top: 224px;
  left: 448px;
}

input {
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  color: rgb(0, 0, 0);
  padding: 11.2px;
  background: none;
  outline: none;
  border: 2px solid rgb(35, 166, 170);
  border-radius: 8px;
  background: transparent;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(17, 185, 207));
}

input[type="text"],
input[type="password"] {
  color: whitesmoke;
  font-weight: bold;
}

input:hover {
  border-color: rgb(216, 25, 25);
  color: rgb(216, 25, 25);
}

input:hover ~ .form__label--username {
  color: rgb(216, 25, 25);
}
input:hover ~ .form__label--name {
  color: rgb(216, 25, 25);
}
input:hover ~ .form__label--email {
  color: rgb(216, 25, 25);
}
input:hover ~ .form__label--password {
  color: rgb(216, 25, 25);
}
input:hover ~ .form__label--confirmPassword {
  color: rgb(216, 25, 25);
}
input:hover ~ .reg__button {
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
input:focus ~ .form__label--name,
input:focus ~ .form__label--email,
input:focus ~ .form__label--password,
input:focus ~ .form__label--confirmPassword {
  color: turquoise;
  text-shadow: 0px 0px 3.2px turquoise;
}

input:focus ~ .form__label--username,
input:not(:placeholder-shown).input:not(:focus) ~ .form__label--username {
  top: 96px;
}

input:focus ~ .form__label--name,
input:not(:placeholder-shown).input:not(:focus) ~ .form__label--name {
  top: 0px;
}

input:focus ~ .form__label--email,
input:not(:placeholder-shown).input:not(:focus) ~ .form__label--email {
  top: 0px;
}

input:focus ~ .form__label--password,
input:not(:placeholder-shown).input:not(:focus) ~ .form__label--password {
  top: 188.8px;
}

input:focus ~ .form__label--confirmPassword,
input:not(:placeholder-shown).input:not(:focus)
  ~ .form__label--confirmPassword {
  top: 188.8px;
}

.reg__title {
  color: rgb(230, 230, 230);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  font-weight: bold;
  font-size: 25.6px;
  color: rgb(251, 255, 254);
  margin-top: 64px;
  animation: text1 1.8s ease;
  text-shadow: 3.2px 0px 3.2px rgb(224, 88, 64);
  pointer-events: none;
}

@keyframes text1 {
  0% {
    color: rgb(0, 0, 0);
    opacity: 0;
    text-shadow: 9.6px 0px 12.8px turquoise, -9.6px 0px 12.8px turquoise,
      0px 9.6px 12.8px turquoise, 0px -9.6px 12.8px turquoise;
    filter: hue-rotate(180deg);
  }
  20% {
    opacity: 0.8;
    filter: hue-rotate(0deg);
  }
  70% {
    opacity: 1;
    text-shadow: 4.8px 0px 12.8px turquoise, -4.8px 0px 12.8px turquoise,
      0px 4.8px 12.8px turquoise, 0px -4.8px 12.8px turquoise;
    filter: hue-rotate(0deg);
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

.reg__button {
  color: white;
  border-radius: 0;
  padding: 14.4px 0;
  color: rgb(241, 255, 252);
  font-weight: bold;
}

.reg__button:focus {
  color: turquoise;
}

.reg__login__container {
  height: 32px;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reg__login__link {
  white-space: nowrap;
  text-decoration: none;
  color: whitesmoke;
  font-weight: bold;
  text-shadow: 1px 1px 10px whitesmoke;
  opacity: 1;
  animation: shown 1s;
}

.reg__login__link__two:focus {
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

.reg__login__link--two {
  display: none;
  opacity: 0;
}

.reg__login__link--one {
  display: flex;
  opacity: 1;
}

.reg__login__link {
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

.reg__login__container:hover .reg__login__link--one {
  display: none;
  opacity: 0;
}
.reg__login__container:hover .reg__login__link--two {
  display: flex;
  opacity: 1;
}

@media (max-width: 660px) {
  .reg__container {
    overflow-y: scroll;
    position: fixed;
  }
  * {
    height: 50%;
  }

  .reg__title {
    margin-top: 20px;
    height: 10%;
  }
  form {
    flex-flow: column;
  }

  .reg__form__item {
    padding: 13px;
  }

  .reg__login__container {
    flex-basis: 0;
  }

  .form__label--username {
    top: 180px;
    left: 195.2px;
    height: 40px;
  }

  .form__label--name {
    top: 104.4px;
    left: 195.2px;
    height: 40px;
  }

  .form__label--email {
    top: 28.8px;
    left: 195.2px;
    height: 40px;
  }

  .form__label--password {
    top: 257px;
    left: 195.2px;
    height: 40px;
  }

  .form__label--confirmPassword {
    top: 333.2px;
    left: 195.2px;
    height: 40px;
  }

  input:focus ~ .form__label--username,
  input:not(:placeholder-shown).input:not(:focus) ~ .form__label--username {
    top: 144.8px;
  }

  input:focus ~ .form__label--name,
  input:not(:placeholder-shown).input:not(:focus) ~ .form__label--name {
    top: 68.2px;
  }

  input:focus ~ .form__label--email,
  input:not(:placeholder-shown).input:not(:focus) ~ .form__label--email {
    top: -8.4px;
  }

  input:focus ~ .form__label--password,
  input:not(:placeholder-shown).input:not(:focus) ~ .form__label--password {
    top: 220.8px;
  }

  input:focus ~ .form__label--confirmPassword,
  input:not(:placeholder-shown).input:not(:focus)
    ~ .form__label--confirmPassword {
    top: 298.4px;
  }
  .reg__login__link {
    height: 50px;
    align-items: center;
  }
}
</style>
