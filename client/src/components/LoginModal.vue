<template>
  <div>
      <h2>Login</h2>
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
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {

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