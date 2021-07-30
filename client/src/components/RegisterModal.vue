<template>
      <div class="registration_container">
          <div class="title_register">Register</div>
          <div class="form_container">
            <div class="form_body">
                <form @submit.prevent="registerUser">
                     <div class="form_group">
                    <input
                      id="email"
                      type="text"
                      placeholder=" "
                      name="username"
                      v-model="email"
                      class="input">
                      <label for="email" class="form_label_email">Email</label>
                  </div>
                  <div class="form_group">
                    <input
                      id="name"
                      type="text"
                      placeholder=" "
                      name="Name"
                      v-model="name"
                      class="input">
                      <label for="name" class="form_label_name">Name</label>
                  </div>
                   <div class="form_group form_group_login">
                    <input
                      id="username"
                      type="text"
                      placeholder=" "
                      name="username"
                      v-model="username"
                      class="input">
                      <label for="username" class="form_label_login">Username</label>
                  </div>
                  <div class="form_group">
                    <input
                      id="password"
                      type="password"
                      placeholder=" "
                      name="password"
                      v-model="password"
                      class="input">
                      <label for="password" class="form_label_password2">Password</label>
                  </div>
                  <div class="form_group">
                    <input
                      id="confirm_password"
                      type="password"
                      placeholder=" "
                      name="confirm_password"
                      v-model="confirm_password"
                      class="input">
                      <label for="confirm_password" class="form_label_confirm_password">Confirm Password</label>
                  </div>
                  <div class="form_group form_group_btn">
                    <input type="submit" class="btn btn-primary" value="Register" placeholder=""/>
                  </div>
                  <div class="login_wrap">
                    <router-link to="/login" class="login_link">Arleady have an account ?</router-link>
                    <router-link to="/login" class="login_link_two">Sign in now</router-link>
                  </div>
                </form>
            </div>
        </div>
      </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
      return {
        name: "",
        password: "",
        username: "",
        confirm_password: "",
        email: ""
      }
    },
    methods:{
      ...mapActions(['register']),
      registerUser(){
        let user = {
          username: this.username,
          password: this.password,
          confirm_password: this.confirm_password,
          email: this.email,
          name: this.name
        };
        this.register(user).then(res => {
          if(res.data.succes) {
            this.$router.push("login");
          }
        });
      }
    }
}
</script>

<style scoped>

.registration_container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.registration_container {
  background: 
    repeating-linear-gradient(270deg, rgba(0, 0, 0, 0.11) 0px, rgba(0, 0, 0, 0.11) 12px, rgba(1, 1, 1, 0.16) 12px, rgba(1, 1, 1, 0.16) 24px, rgba(0, 0, 0, 0.14) 24px, rgba(0, 0, 0, 0.14) 36px, rgba(0, 0, 0, 0.23) 36px, rgba(0, 0, 0, 0.23) 48px, rgba(0, 0, 0, 0.12) 48px, rgba(0, 0, 0, 0.12) 60px, rgba(1, 1, 1, 0.07) 60px, rgba(1, 1, 1, 0.07) 72px, rgba(0, 0, 0, 0.21) 72px, rgba(0, 0, 0, 0.21) 84px, rgba(0, 0, 0, 0.24) 84px, rgba(0, 0, 0, 0.24) 96px, rgba(1, 1, 1, 0.23) 96px, rgba(1, 1, 1, 0.23) 108px, rgba(1, 1, 1, 0.07) 108px, rgba(1, 1, 1, 0.07) 120px, rgba(0, 0, 0, 0.01) 120px, rgba(0, 0, 0, 0.01) 132px, rgba(1, 1, 1, 0.22) 132px, rgba(1, 1, 1, 0.22) 144px, rgba(1, 1, 1, 0.24) 144px, rgba(1, 1, 1, 0.24) 156px, rgba(0, 0, 0, 0) 156px, rgba(0, 0, 0, 0) 168px, rgba(0, 0, 0, 0.12) 168px, rgba(0, 0, 0, 0.12) 180px), repeating-linear-gradient(360deg, rgba(1, 1, 1, 0.01) 0px, rgba(1, 1, 1, 0.01) 12px, rgba(1, 1, 1, 0.15) 12px, rgba(1, 1, 1, 0.15) 24px, rgba(0, 0, 0, 0.09) 24px, rgba(0, 0, 0, 0.09) 36px, rgba(0, 0, 0, 0.02) 36px, rgba(0, 0, 0, 0.02) 48px, rgba(0, 0, 0, 0.1) 48px, rgba(0, 0, 0, 0.1) 60px, rgba(1, 1, 1, 0.07) 60px, rgba(1, 1, 1, 0.07) 72px, rgba(1, 1, 1, 0.15) 72px, rgba(1, 1, 1, 0.15) 84px, rgba(0, 0, 0, 0.18) 84px, rgba(0, 0, 0, 0.18) 96px, rgba(1, 1, 1, 0.15) 96px, rgba(1, 1, 1, 0.15) 108px, rgba(1, 1, 1, 0.09) 108px, rgba(1, 1, 1, 0.09) 120px, rgba(1, 1, 1, 0.07) 120px, rgba(1, 1, 1, 0.07) 132px, rgba(1, 1, 1, 0.05) 132px, rgba(1, 1, 1, 0.05) 144px, rgba(0, 0, 0, 0.1) 144px, rgba(0, 0, 0, 0.1) 156px, rgba(1, 1, 1, 0.18) 156px, rgba(1, 1, 1, 0.18) 168px), repeating-linear-gradient(315deg, rgba(0, 0, 0, 0.24) 0px, rgba(0, 0, 0, 0.24) 16px, rgba(1, 1, 1, 0.06) 16px, rgba(1, 1, 1, 0.06) 32px, rgba(0, 0, 0, 0.16) 32px, rgba(0, 0, 0, 0.16) 48px, rgba(1, 1, 1, 0) 48px, rgba(1, 1, 1, 0) 64px, rgba(1, 1, 1, 0.12) 64px, rgba(1, 1, 1, 0.12) 80px, rgba(1, 1, 1, 0.22) 80px, rgba(1, 1, 1, 0.22) 96px, rgba(0, 0, 0, 0.24) 96px, rgba(0, 0, 0, 0.24) 112px, rgba(0, 0, 0, 0.25) 112px, rgba(0, 0, 0, 0.25) 128px, rgba(1, 1, 1, 0.12) 128px, rgba(1, 1, 1, 0.12) 144px, rgba(0, 0, 0, 0.18) 144px, rgba(0, 0, 0, 0.18) 160px, rgba(1, 1, 1, 0.03) 160px, rgba(1, 1, 1, 0.03) 176px, rgba(1, 1, 1, 0.1) 176px, rgba(1, 1, 1, 0.1) 192px), repeating-linear-gradient(405deg, rgba(1, 1, 1, 0.18) 0px, rgba(1, 1, 1, 0.18) 3px, rgba(0, 0, 0, 0.09) 3px, rgba(0, 0, 0, 0.09) 6px, rgba(0, 0, 0, 0.08) 6px, rgba(0, 0, 0, 0.08) 9px, rgba(1, 1, 1, 0.05) 9px, rgba(1, 1, 1, 0.05) 12px, rgba(0, 0, 0, 0.01) 12px, rgba(0, 0, 0, 0.01) 15px, rgba(1, 1, 1, 0.12) 15px, rgba(1, 1, 1, 0.12) 18px, rgba(0, 0, 0, 0.05) 18px, rgba(0, 0, 0, 0.05) 21px, rgba(1, 1, 1, 0.16) 21px, rgba(1, 1, 1, 0.16) 24px, rgba(1, 1, 1, 0.07) 24px, rgba(1, 1, 1, 0.07) 27px, rgba(1, 1, 1, 0.23) 27px, rgba(1, 1, 1, 0.23) 30px, rgba(0, 0, 0, 0.2) 30px, rgba(0, 0, 0, 0.2) 33px, rgba(0, 0, 0, 0.18) 33px, rgba(0, 0, 0, 0.18) 36px, rgba(1, 1, 1, 0.12) 36px, rgba(1, 1, 1, 0.12) 39px, rgba(1, 1, 1, 0.13) 39px, rgba(1, 1, 1, 0.13) 42px, rgba(1, 1, 1, 0.2) 42px, rgba(1, 1, 1, 0.2) 45px, rgba(1, 1, 1, 0.18) 45px, rgba(1, 1, 1, 0.18) 48px, rgba(0, 0, 0, 0.2) 48px, rgba(0, 0, 0, 0.2) 51px, rgba(1, 1, 1, 0) 51px, rgba(1, 1, 1, 0) 54px, rgba(0, 0, 0, 0.03) 54px, rgba(0, 0, 0, 0.03) 57px, rgba(1, 1, 1, 0.06) 57px, rgba(1, 1, 1, 0.06) 60px, rgba(1, 1, 1, 0) 60px, rgba(1, 1, 1, 0) 63px, rgba(0, 0, 0, 0.1) 63px, rgba(0, 0, 0, 0.1) 66px, rgba(1, 1, 1, 0.19) 66px, rgba(1, 1, 1, 0.19) 69px), linear-gradient(360deg, rgb(33,250,250), rgb(4,0,5));
}

.form_container {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.form_body {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;
  height: 90%;
  position: relative;
  margin-bottom: auto;
  
}

.form_group {
  width: 20rem;
  padding: 1.4rem 1.4rem;
}

.form_group_login,
.form_group_btn {
  margin: 0 10rem;
}

.login_wrap {
  flex-basis: 40rem;
}

form {
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 40rem;
  flex-wrap: wrap;
}

.form_label_login {
  position: absolute;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
    left: 200ms ease-in;
    font-size: 200ms ease-in;
  top: 8.2rem;
  left: 17.3rem;
  background-color: none;
  font-weight: bold;
}

.form_label_name {
  position: absolute;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
    left: 200ms ease-in;
    font-size: 200ms ease-in;
  top: 2.3rem;
  left: 34rem;
  background-color: none;
  font-weight: bold;
}

.form_label_email {
  position: absolute;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
    left: 200ms ease-in;
    font-size: 200ms ease-in;
  top: 2.3rem;
  left: 3rem;
  background-color: none;
  font-weight: bold;
}

.form_label_password2 {
  position: absolute;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
    left: 200ms ease-in;
    font-size: 200ms ease-in;
  top: 14rem;
  left: 3rem;
  background-color: none;
  font-weight: bold;
}

.form_label_confirm_password {
  position: absolute;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
    left: 200ms ease-in;
    font-size: 200ms ease-in;
  top: 14rem;
  left: 28rem;
  background-color: none;
  font-weight: bold;
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

input[type=text], input[type=password] {
  color: whitesmoke;
}

input:hover {
  border-color: rgb(216, 25, 25);
  color: rgb(216, 25, 25);
}

input:hover ~ .form_label_login {
  color: rgb(216, 25, 25);
}
input:hover ~ .form_label_name {
  color: rgb(216, 25, 25);
}
input:hover ~ .form_label_email {
  color: rgb(216, 25, 25);
}
input:hover ~ .form_label_password2 {
  color: rgb(216, 25, 25);
}
input:hover ~ .form_label_confirm_password {
  color: rgb(216, 25, 25);
}
input:hover ~ .btn {
  color: rgb(216, 25, 25);
}

input:focus, textarea {
  color: turquoise;
  border-color: turquoise;
  background-color: none;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(15px) drop-shadow(4px 4px 10px rgb(7, 207, 233));
}

input:focus ~ .form_label_login,
input:focus ~ .form_label_name,
input:focus ~ .form_label_email,
input:focus ~ .form_label_password2,
input:focus ~ .form_label_confirm_password {
  color: turquoise;
  text-shadow: 0px 0px 0.2rem turquoise;
}

input:focus ~ .form_label_login,
input:not(:placeholder-shown).input:not(:focus)
~ .form_label_login {
  top: 6rem;
}

input:focus ~ .form_label_name,
input:not(:placeholder-shown).input:not(:focus)
 ~ .form_label_name {
  top: 0.1rem;
}

input:focus ~ .form_label_email,
input:not(:placeholder-shown).input:not(:focus)
 ~ .form_label_email {
  top: 0.1rem;
}

input:focus ~ .form_label_password2,
input:not(:placeholder-shown).input:not(:focus)
 ~ .form_label_password2 {
   top: 11.8rem;
}

input:focus ~ .form_label_confirm_password,
input:not(:placeholder-shown).input:not(:focus)
 ~ .form_label_confirm_password {
  top: 11.8rem;
}




.title_register {
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
  0%{
    color: rgb(0, 0, 0);
    opacity: 0;
    text-shadow: 
       0.6rem 0rem  0.8rem turquoise,
      -0.6rem 0rem 0.8rem turquoise,
       0rem 0.6rem 0.8rem turquoise,
       0rem -0.6rem 0.8rem turquoise;
  }
  20%{
    opacity: 0.8;
  }
  70%{
    opacity: 1;
    text-shadow:
    0.3rem 0rem  0.8rem turquoise,
      -0.3rem 0rem 0.8rem turquoise,
       0rem 0.3rem 0.8rem turquoise,
       0rem -0.3rem 0.8rem turquoise;
  }
  90% {
    opacity: 1;
    text-shadow: 
    0.2rem 0rem  1.4rem turquoise,
      -0.2rem 0rem 1.4rem turquoise,
       0rem 0.2rem 1.4em turquoise,
       0rem -0.2rem 1.4rem turquoise;
  }
  100%{
    opacity: 1;
    text-shadow: 0.2rem 0px 0.2rem turquoise;
  }
}

.btn {
  color: white;
  border-radius: 0;
  padding: 0.9rem 0;
  color: rgb(241, 255, 252);
  font-weight: bold;
}

.btn:focus {
  color: turquoise;
}

.login_wrap {
  height: 2rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;

}

.login_link {
  white-space: nowrap;
  text-decoration: none;
  color: whitesmoke;
  font-weight: bold;
  text-shadow: 1px 1px 10px whitesmoke;
  opacity: 1;
  animation: shown 1s;
}

.login_link_two:focus {
  color: turquoise;
}

@keyframes shown {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

.login_link_two {
  display: none;
  text-decoration: none;
  color: whitesmoke;
  font-weight: bold;
  text-shadow: 1px 1px 10px whitesmoke;
  opacity: 0;
  animation: shown 1s;
}

@keyframes shown {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

.login_wrap:hover  .login_link {
  display: none;
  opacity: 0;
}
.login_wrap:hover .login_link_two {
  display: flex;
  opacity: 1;
}

@media ( max-width: 660px ) {
form{
  flex-flow: column;
}

.form_group {
  padding: 1rem;
}

.login_wrap {
  flex-basis: 0;
}

.form_label_login {
  top: 12rem;
  left: 12.2rem;
}

.form_label_name {
  top: 6.9rem;
  left: 12.2rem;
}

.form_label_email {
  top: 1.8rem;
  left: 12.2rem;
}

.form_label_password2 {
  top: 17rem;
  left: 12.2rem;

}

.form_label_confirm_password {
  top: 22.2rem;
  left: 12.2rem;
}

input:focus ~ .form_label_login,
input:not(:placeholder-shown).input:not(:focus)
~ .form_label_login {
  top: 9.8rem;
}

input:focus ~ .form_label_name,
input:not(:placeholder-shown).input:not(:focus)
 ~ .form_label_name {
  top: 4.7rem;
}

input:focus ~ .form_label_email,
input:not(:placeholder-shown).input:not(:focus)
 ~ .form_label_email {
  top: -0.4rem;
}

input:focus ~ .form_label_password2,
input:not(:placeholder-shown).input:not(:focus)
 ~ .form_label_password2 {
   top: 14.8rem;
}

input:focus ~ .form_label_confirm_password,
input:not(:placeholder-shown).input:not(:focus)
 ~ .form_label_confirm_password {
  top: 19.9rem;
}

}

</style>