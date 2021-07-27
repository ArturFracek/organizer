<template>
  <div class="login_container">
      <div class="title">Login to your's Organizer</div>
      <div class="row"></div>
      <div class="form_container">
          <div class="form_body">
              <form @submit.prevent="loginUser">
                <div class="form_group">
                  <input
                    id="username"
                    type="text"
                    placeholder=" "
                    name="username"
                    v-model="username"
                    class="input"
                  >
                  <label for="username" class="form_label_login">Username</label>
                </div>
                <div class="form_group">
                  <input
                    id="password"
                    type="password"
                    placeholder=" "
                    name="password"
                    v-model="password"
                    class="input"
                  >
                  <label for="password" class="form_label_password">Password</label>
                </div>
                <div class="form_group">
                <input type='submit' class="btn btn_primary" value="Login" placeholder=""/>
                </div>
                <div class="registration_wrap">
                  <router-link to="/register" class="registration_link">Need an Account ?</router-link>
                  <router-link to="/register" class="registration_link_two">Register now</router-link>
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
  data(){
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    ...mapActions(['login']),
   loginUser(){
     let user = {
       username: this.username,
       password: this.password,
     };
     this.login(user)
     .then(res => {
       if(res.data.success){
         this.$router.push('/profile')
       }
     }).catch(err=>{
       console.log(err)
     });
   } 
  }
}
</script>

<style>

.login_container {
  background-color: rgb(55, 21, 87);
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
}

.form_container {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.form_body {
  position: relative;
  width: 20rem;
  margin-bottom: auto;
  margin-top: 2rem;
}

.form_group {
  width: 100%;
  padding: 0.9rem 0;
}

form {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.form_label_login {
  position: absolute;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
    left: 200ms ease-in;
    font-size: 200ms ease-in;
  top: 1.75rem;
  left: 2rem;
  background-color: rgb(55, 21, 87);
  font-weight: bold;
}

.form_label_password {
  position: absolute;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
    left: 200ms ease-in;
    font-size: 200ms ease-in;
  top: 6.5rem;
  left: 2rem;
  background-color: rgb(55, 21, 87);
  font-weight: bold;
}

input {
  width: 100%;
  height: 100%;
  border-radius: 2px;
  color: white;
  padding: 0.7rem;
  background: none;
  outline: none;
  border: 2px solid rgb(250, 242, 242);
  border-radius: 0.5rem;
}

input:hover {
  border-color: rgb(216, 25, 25);
  color: rgb(216, 25, 25);
}

input:hover ~ .form_label_login {
  color: rgb(216, 25, 25);
}
input:hover ~ .form_label_password {
  color: rgb(216, 25, 25);
}
input:hover ~ .btn {
  color: rgb(216, 25, 25);
}




input:focus {
  border-color: turquoise;
  background-color: none;
}

input:focus ~ .form_label_login, input:focus ~ .form_label_password {
  color: turquoise;
}

input:focus ~ .form_label_login,
input:not(:placeholder-shown).input:not(:focus)
~ .form_label_login {
  top: 0.3rem;
}

input:focus ~ .form_label_password,
input:not(:placeholder-shown).input:not(:focus)
 ~ .form_label_password {
  top: 5rem;
}


.title {
  color: rgb(230, 230, 230);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-weight: bold;
  font-size: 1.8rem;
  color: rgb(251, 255, 254);
  margin-top: 12rem;
  animation: text1 2s ease;
  text-shadow: 0.2rem 0px 0.2rem turquoise;
}

@keyframes text1 {
  0%{
    color: rgb(55, 21, 87);
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
    0.2rem 0rem  1.2rem turquoise,
      -0.2rem 0rem 1.2rem turquoise,
       0rem 0.2rem 1.2em turquoise,
       0rem -0.2rem 1.2rem turquoise;
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

.registration_wrap {
  height: 2rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;

}

.registration_link {
  text-decoration: none;
  color: whitesmoke;
  font-weight: bold;
  text-shadow: 1px 1px 10px whitesmoke;
  opacity: 1;
  animation: shown 1s;
}

.registration_link_two:focus {
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

.registration_link_two {
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

.registration_wrap:hover  .registration_link {
  display: none;
  opacity: 0;
}
.registration_wrap:hover .registration_link_two {
  display: flex;
  opacity: 1;
}


</style>