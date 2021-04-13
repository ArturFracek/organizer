<template>
  <div class="wrapper">
    <div class="nav2">

    <router-link :to="{ name: 'MyRoutines' }" class="MyRoutines organise_element"
    >Routines</router-link>
     <router-link :to="{ name: 'MyActivities' }" class="MyActivities organise_element"
    >My Activities</router-link>
    </div>

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
.week_days {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: auto;
}

.nav2 {
  display: flex;
  justify-content:space-around;
  align-items: stretch;
  margin: 30px;
}

.organise_element {
  font-size: 2.2em;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
</style>
