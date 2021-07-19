<template>
    <div>
      <h2>Register</h2>
      <div class="row"></div>
      <div class="card mx-auto">
          <div class="card-header text-white bg-primary">
              <h4>Register</h4>
          </div>
          <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    name="username"
                    v-model="username"
                    class="form-control">
                </div>
                 <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    name="Name"
                    v-model="name"
                    class="form-control">
                </div>
                 <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    type="text"
                    placeholder="Email"
                    name="username"
                    v-model="email"
                    class="form-control">
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    v-model="passowrd"
                    class="form-control">
                </div>
                 <div class="form-group">
                  <label for="username">Confirm Password</label>
                  <input
                    id="confirm_password"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirm_password"
                    v-model="confirm_password"
                    class="form-control">
                </div>
                <button class="btn btn-primary">Register</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <router-link to="/login" class="card-link">Arleady have an account</router-link>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        name: "",
        password: "",
        username: "",
        confirm_password: "",
        email: ""
      }
    }
}
</script>

<style>

</style>