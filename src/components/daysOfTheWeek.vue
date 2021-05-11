<template>
  <div class="flex-box">
    <div class="day_box">{{ WEEKDAYS[0] }}</div>
    <div class="day_box">{{ WEEKDAYS[1] }}</div>
    <div class="day_box">{{ WEEKDAYS[2] }}</div>
    <div class="day_box">{{ WEEKDAYS[3] }}</div>
    <div class="day_box friday">{{ WEEKDAYS[4] }}</div>
    <div class="day_box saturday">{{ WEEKDAYS[5] }}</div>
    <div class="day_box sunday">{{ WEEKDAYS[6] }}</div>
  </div>
  <!-- <router-link class="day_box">{{ WEEKDAYS[0] }}</router-link>
    <router-link class="day_box">{{ WEEKDAYS[1] }}</router-link>
    <router-link class="day_box">{{ WEEKDAYS[2] }}</router-link>
    <router-link class="day_box">{{ WEEKDAYS[3] }}</router-link>
    <router-link class="day_box">{{ WEEKDAYS[4] }}</router-link>
    <router-link class="day_box">{{ WEEKDAYS[5] }}</router-link>
    <router-link class="day_box">{{ WEEKDAYS[6] }}</router-link> -->
</template>

<script>
import { WEEKDAYS } from "@/constants";

export default {
  name: "daysOfTheWeek",
  computed: {
    WEEKDAYS: () => WEEKDAYS,
  },
};
</script>

<style scoped>
.flex-box {
  max-height: 90%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}

.day_box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(31, 31, 66);
  width: 9em;
  height: 7em;
  color: white;
  font-weight: bold;
  margin: 10px;
}
</style>
