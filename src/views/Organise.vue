<template>
  <div class="wrapper">
    <div class="upperContainer">
      <MyActivities />
      <MyRoutines />
    </div>

    <daysOfTheWeek />
  </div>
</template>

<script>
import daysOfTheWeek from "@/components/daysOfTheWeek.vue";
import MyActivities from "@/views/MyActivities.vue";
import MyRoutines from "@/views/MyRoutines.vue";

export default {
  name: "Organise",
  components: {
    MyActivities,
    MyRoutines,
    daysOfTheWeek,
  },
};
</script>

<style scoped>
.week_days {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: auto;
}

.upperContainer {
  display: flex;
}

.organise_element {
  font-size: 2.2em;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
</style>
