<template>
    <div>
      <h2>Profile</h2>
      <div class="card" v-if="user">
        <li class="list-group-item">Email: {{ user.email }}</li>
        <li class="list-group-item">Username: {{ user.username }}</li>
        <li class="list-group-item">Name: {{ user.name }}</li>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(['user']),
  methods: mapActions(['getProfile']),
  created(){
    this.getProfile()
  }
}
</script>

<style>

</style>