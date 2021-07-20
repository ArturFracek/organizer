<template>
    <div>
      <h2>Profile</h2>
      <div class="row"></div>
      <div class="card mx-auto">
          <div class="card-header text-white bg-primary">
              <h4>Login</h4>
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
                  <label for="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    v-model="passowrd"
                    class="form-control">
                </div>
                <button class="btn btn-primary">Login</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <router-link to="/register" class="card-link">Need an account</router-link>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name: "profile"
}
</script>

<style>

</style>