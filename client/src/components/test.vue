<template>
  <div>
    <button @click="test">test</button>
    <div v-for="(weekday, index) in weekdays" :key="index">{{ weekday }}</div>
  </div>
</template>

<script>
import moment, { weekdays } from "moment";

moment.updateLocale("en", {
  week: {
    dow: 1,
  },
});
export default {
  computed: {
    weekdays: () => [
      ...moment.weekdays(true).map((day, index) => {
        return { title: day, dayNumber: index + 1 };
      }),
    ],
  },
  methods: {
    test() {
      console.log(weekdays);
    },
  },
};
</script>

<style></style>
