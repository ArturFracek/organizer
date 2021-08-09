<template>
  <div class="main_net_container">

  </div>

</template>

<script>

export default {
  name: "TimeNet",
}
</script>

<style scoped>
.main_net_container {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(24, 1fr);
  border: 1px solid turquoise;
}

</style>