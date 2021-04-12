<template>
  <div class="wrapper">
    <daysOfTheWeek />
  </div>
</template>

<script>
import daysOfTheWeek from "@/components/daysOfTheWeek.vue";

export default {
  name: "Organise",
  components: {
    daysOfTheWeek,
  },
};
</script>

<style scoped>
.wrapper {
  height: 80vh;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
