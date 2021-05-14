<template>
  <div class="wrapper">
    <div class="upperContainer">
      <MyActivities />
      <MyRoutines />
    </div>
    <RoutineCalendar class="calendar"/>
  </div>
</template>

<script>
import MyActivities from "@/components/MyActivities.vue";
import MyRoutines from "@/components/MyRoutines.vue";
import RoutineCalendar from "@/components/RoutineCalendar.vue";

export default {
  name: "Organise",
  components: {
    MyActivities,
    MyRoutines,
    RoutineCalendar,
  },
};
</script>

<style scoped>

.wrapper {
  padding: 0 10%;
}
.upperContainer {
  display: flex;
  margin-bottom: 2vh;
}

.organise_element {
  font-size: 2.2em;
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.calendar {
}
</style>
