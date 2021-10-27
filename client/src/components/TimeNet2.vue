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

            <tr
              class="net__minutes"
              v-for="(minuteDisplay, minuteIndex) in minutesDisplay"
              :key="minuteIndex"
            >
              {{
                minuteDisplay.toString()
              }}
            </tr>
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
              :class="{
                net__minutesRow: true,
                'net__minutesRow--exist': getActivityOccurance(
                  dayIndex,
                  hour,
                  tenMinutes
                ),
              }"
            >
              {{
                getActivityName(
                  getActivityOccurance(dayIndex, hour, tenMinutes)
                )
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
import { minutesDisplay } from "../constants/index";

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
    minutesDisplay: () => minutesDisplay,
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
  display: flex;
  flex-flow: column;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  text-shadow: 2px 2px 10px rgb(255, 255, 255);
  border-bottom: 1px dashed turquoise;
  white-space: nowrap;
  min-width: 20px;
}
.net__minutes {
  position: relative;
  top: -1px;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  font-size: 11px;
  margin-right: 5px;
  font-weight: 500;
  opacity: 0.6;
}

.net__hourInDay {
  text-align: center;
  border: 0.1px solid turquoise;
  border-radius: 0.4rem;
  height: 1rem;
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
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 16px;
  color: rgb(112, 255, 207);
  text-shadow: 2px 2px 2px rgb(0, 4, 255);
  font-size: 0.7rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  border-bottom: 0.5px dotted rgba(87, 246, 185, 0.2);
}

.net__minutesRow--exist {
  color: white;
  border-top: 2px solid red;
  border-right: 2px solid red;
  border-left: 2px solid red;
}

.net__minutesRow--exist ~ .net__minutesRow--exist {
  font-size: 0;
  border-top: none;
  border-right: 2px solid red;
  border-left: 2px solid red;
}
</style>
