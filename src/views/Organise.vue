<template>
  <div class="wrapper">
    <div class="grid_wrapper">
      <dayOfTheWeek />
    </div>
  </div>
</template>

<script>
import dayOfTheWeek from "@/components/dayOfTheWeek.vue";

export default {
  name: "Organise",
  components: {
    dayOfTheWeek,
  }
}
</script>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100vw;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>


