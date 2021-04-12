<template>
  <div class="grid">
      <div class="day_box">{{ WEEKDAYS[0] }}</div>
      <div class="day_box">{{ WEEKDAYS[1] }}</div>
      <div class="day_box">{{ WEEKDAYS[2] }}</div>
      <div class="day_box">{{ WEEKDAYS[3] }}</div>
      <div class="day_box friday">{{ WEEKDAYS[4] }}</div>
      <div class="day_box saturday">{{ WEEKDAYS[5] }}</div>
      <div class="day_box sunday">{{ WEEKDAYS[6] }}</div>
  </div>
</template>

<script>
import { WEEKDAYS } from "@/constants"

export default {
  name: "daysOfTheWeek",
  computed: {
    WEEKDAYS: () => WEEKDAYS,
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

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
}

.friday {
  width: auto;
  grid-column-start: 1;
  grid-column-end: 3;
}

.saturday {
  width: auto;
  grid-column-start: 1;
  grid-column-end: 3;
}

.sunday {
  width: auto;
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
