<template>
  <div class="login_container">
      <div class="title">Login to your's Organizer</div>
      <div class="row"></div>
      <div class="card form_container">
          <div class="form_header">
              <h4>Login</h4>
          </div>
          <div class="form_body">
              <form @submit.prevent="loginUser">
                <div class="form_group">
                  <label for="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    name="username"
                    v-model="username"
                    class="form_control">
                </div>
                <div class="form_group">
                  <label for="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    v-model="password"
                    class="form_control">
                </div>
                <input type='submit' class="btn btn_primary" value="Login"/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <router-link to="/register" class="form_link">Need an account</router-link>
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

.card {
  width: 60%;
  border-radius: 0;
}

.btn {
  border-radius: 0;
}

.form-control {
  border-radius: 0;
}
</style>