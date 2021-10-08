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
            {{ getActivityName(getActivityOccurance(dayIndex, hour)) }}
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="log">Log activities</button>
    <button @click="logActivityId">Log ID</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { hours } from "../constants/index";


const activitiesOccurences = [
  {
    activityId: "6149b161c188aa185a902b80",
    dayOfWeek: 0,
    startTime: 15,
    endTime: 19,
  },
  {
    activityId: 1,
    dayOfWeek: 4,
    startTime: 8,
    endTime: 9,
  },
  {
    activityId: 2,
    dayOfWeek: 6,
    startTime: 10,
    endTime: 11,
  },
];

export default {
  async mounted() {
    this.fetchAllActivities();
  },
  computed: {
    weekdays: () => moment.weekdays(),
    hours: () => hours,
    ...mapGetters({
      activities: "activities/activities",
    }),
  },
  methods: {
    ...mapActions({
      fetchAllActivities: "activities/fetchAllActivities",
    }),
    async fetchActivities() {
      await this.fetchAllActivities();
    },
    formatTime(timeNumber) {
      return moment(timeNumber, "H").format("h a");
    },
    getActivityOccurance(dayIndex, hour) {
      const act = activitiesOccurences.find(
        (a) =>
          a.startTime <= hour && a.endTime > hour && a.dayOfWeek === dayIndex
      );
      return act ? act.activityId : "";
      
    },
    getActivityName(activityId) {
      const activity = this.activities.find((a) => a._id === activityId);
      return activity ? activity.title : "";
    },
    log() {
      console.log(this.activities)
    },
    logActivityId(act) {
      console.log(this.activities[0]._id)
    }
  },
};
</script>

<style>
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
  text-shadow: 0 0 1rem rgb(219, 97, 97);
  justify-content: center;
  align-items: center;
  font-weight: bold;
  backdrop-filter: blur(10px) drop-shadow(4px 4px 20px rgb(10, 194, 207));
  border: 0.1px solid turquoise;
  border-radius: 0.4rem;
}

.net__hour {
  color: white;
  border-bottom: 1px dashed turquoise;
  white-space: nowrap;
  min-width: 20px;
}

.net__hourInDay {
  text-align: center;
  border: 0.1px solid turquoise;
  border-radius: 0.4rem;
  color: blueviolet;
  font-size: 16px;
  font-weight: bold;
}

.net__cell {
  padding: 0.3rem;
  margin: 0;
}

button {
  height: 2rem;
  width: 6rem;
  background: red;
}
</style>
