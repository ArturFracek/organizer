<template>
  <div class="net__container">
    <table class="net__table">
      <thead>
        <tr>
          <th class="net__emptyCell"><div class="net__emptyDiv"></div></th>
          <th
            v-for="(day, dayIndex) in weekdays"
            :key="dayIndex"
            :class="[
              'net__cell',
              'net__dayHeader',
              `net__dayHeader-${dayIndex}`,
            ]"
          >
            {{ day }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(hour, hourIndex) in hours"
          :key="hourIndex"
          :class="['net__hourRow', `net__hourRow-${hourIndex}`]"
        >
          <td class="net__hour">
            {{ formatTime(hour) }}
          </td>
          <td
            v-for="(day, dayIndex) in weekdays"
            :key="dayIndex"
            :class="[
              'net__cell',
              'net__hourInDay',
              `net__day-${dayIndex}`,
              `net__day-${dayIndex}-${hour}`,
            ]"
          >
            <div
              v-for="(tenMinutes, minutesIndex) in minutes"
              :key="minutesIndex"
              :class="['net__minutesRow', `net__minutesRow-${hourIndex}`]"
            >
              {{
                getActivityName(
                  getActivityOccurance(dayIndex, hour, tenMinutes)
                ) || '&nbsp;'
              }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="log">Log activities</button>
    <button @click="logActivityId">Log ID</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
import { hours } from "../constants/index";
import { time } from "../constants/index";
import { minutes } from "../constants/index";

moment.updateLocale("en", {
  week: {
    dow: 1,
  },
});

export default {
  computed: {
    weekdays: () => moment.weekdays(true),
    hours: () => hours,
    minutes: () => minutes,
    ...mapGetters({
      activities: "activities/activities",
      routine: "routines/activeRoutine",
    }),
  },
  methods: {
    formatTime(timeNumber) {
      return moment(timeNumber, "H").format("H a");
    },
    getActivityOccurance(dayIndex, hour, tenMinutes) {
      if (!this.routine) return "";
      const act = this.routine.activitiesOccurences.find(
        (a) =>
          moment(a.startTime, "HH:mm") <=
            moment({ hour: hour, minute: tenMinutes }) &&
          moment(a.endTime, "HH:mm") >
            moment({ hour: hour, minute: tenMinutes }) &&
          a.dayOfWeek === dayIndex
      );
      return act ? act.activityId : "";
    },
    getActivityName(activityId) {
      const activity = this.activities.find((a) => a._id === activityId);
      return activity ? activity.title : "";
    },
    log() {
      console.log(time);
    },
    logActivityId() {
      console.log(this.routine.activitiesOccurences);
    },
  },
};
</script>

<style>
.net__container {
  transition: 1s;
}
.net__table {
  width: 100%;
  table-layout: fixed;
  border-spacing: 0px;
}

.net__emptyCell {
  width: 3rem;
}

.net__dayHeader {
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 1px rgb(6, 10, 255);
  justify-content: center;
  align-items: center;
  font-weight: bold;
  backdrop-filter: blur(10px) drop-shadow(4px 4px 20px rgb(10, 194, 207));
  border: 0.1px solid turquoise;
  border-radius: 0.4rem;
}

.net__hour {
  color: white;
  font-size: 1rem;
  font-weight: 500;
  text-shadow: 2px 2px 10px rgb(255, 255, 255);
  border-bottom: 1px dashed turquoise;
  white-space: nowrap;
  min-width: 20px;
}

.net__hourInDay {
  text-align: center;
  border: 0.1px solid turquoise;
  border-radius: 0.4rem;
  color: rgb(112, 255, 207);
  text-shadow: 2px 2px 2px rgb(0, 4, 255);
  font-size: 0.9rem;
  font-weight: bold;
}

.net__cell {
  padding: 0rem;
  margin: 0;
  white-space: nowrap;
  height: 2rem;
}

button {
  height: 2rem;
  width: 6rem;
  background: red;
}

.net__minutesRow {
  height: 20px;
}
</style>
