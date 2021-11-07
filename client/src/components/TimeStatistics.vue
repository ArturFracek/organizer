<template>
  <div class="TimeStatistics__container">
    <div class="TimeStatistics__container__title">Time Statistics</div>
    <div v-if="activeRoutine" class="TimeStatistics__activitiesContainer">
      <button
        class="TimeStatistics__activityTimerButton"
        v-for="(occurence, index) in activeRoutine.activitiesOccurences"
        :key="index"
      >
        {{ getActivityNameById(occurence) }}
        <div class="TimeStatistics__activityDuration">
          {{ hourTimeFormat(getActivityDurationById(occurence)) || 0 }}
        </div>
      </button>
    </div>
    <button class="test" @click="test"></button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";

export default {
  mounted() {
    this.fetchRoutines(), this.fetchActivities();
  },
  computed: {
    ...mapGetters({
      activities: "activities/activities",
      activeRoutine: "routines/activeRoutine",
      timerDiff: "timer/timerDiff",
    }),
  },
  methods: {
    ...mapActions({
      fetchAllActivities: "activities/fetchAllActivities",
      fetchAllRoutines: "routines/fetchAllRoutines",
    }),
    async fetchRoutines() {
      await this.fetchAllRoutines();
    },
    async fetchActivities() {
      await this.fetchAllActivities();
    },
    getActivityNameById(occurence) {
      const activity = this.activities.find(
        (a) => a._id === occurence.activityId
      );
      return activity ? activity.title : "";
    },
    getActivityDurationById(occurence) {
      const activity = this.activities.find(
        (a) => a._id === occurence.activityId
      );
      return activity ? activity.duration : "";
    },
    hourTimeFormat(seconds) {
      const diff = moment.duration(seconds, "seconds");
      const diffHours = Math.floor(diff.asHours());
      const diffHoursFormatted = diffHours < 10 ? `0${diffHours}` : diffHours;
      const mmss = moment.utc(diff.as("milliseconds")).format("mm:ss");
      return `${diffHoursFormatted}:${mmss}`;
    },
    test() {
      console.log();
    },
  },
};
</script>

<style scoped>
.TimeStatistics__container {
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 30%;
  max-height: 60%;
  width: 80%;
  position: relative;
  padding: 0.3rem 2rem;
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(
      to bottom,
      rgb(164, 253, 249),
      rgb(250, 127, 127)
    )
    1;
  border-image-repeat: stretch;
  backdrop-filter: drop-shadow(4px 4px 6px rgb(207, 17, 17)) hue-rotate(180deg)
    opacity(80%);
  margin-bottom: 2rem;
}

.TimeStatistics__container__title {
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  letter-spacing: 1px;
  text-shadow: 0 0 10px rgb(255, 255, 255);
  cursor: unset;
}
.TimeStatistics__activitiesContainer {
  width: 100%;
  height: 90%;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  align-content: space-around;
}

.TimeStatistics__activityTimerButton {
  display: flex;
  margin: 3px;
  font-weight: 500;
  color: turquoise;
}
.TimeStatistics__activityDuration {
  margin-left: 10px;
}
</style>
