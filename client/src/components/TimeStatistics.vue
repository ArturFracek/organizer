<template>
  <div class="TimeStatistics__container">
    <div
      class="TimeStatistics__container__title"
      data-test="timeStatisticsTitle"
    >
      Time Statistics<i class="bi bi-clock-history"></i>
    </div>
    <div v-if="activeRoutine" class="TimeStatistics__activitiesContainer">
      <div
        class="TimeStatistics__statistic"
        v-for="(occurence, index) in getUniqueOccurences()"
        :key="index"
        data-test="activityTitleTimeStatistic"
      >
        {{ getActivityNameById(occurence) }} {{ "~" }}
        <div
          class="TimeStatistics__activityDuration"
          data-test="activityDuration"
        >
          {{ hourTimeFormat(getActivityDurationById(occurence)) || 0 }}
        </div>
      </div>
    </div>
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
    // getUniqueOccurencesIds() {
    //   const occurences = this.activeRoutine.activitiesOccurences;
    //   const uniqueOccurencesIds = [
    //     ...new Set(occurences.map((o) => o.activityId)),
    //   ];
    //   return uniqueOccurencesIds;
    // },
    getUniqueOccurences() {
      const occurences = this.activeRoutine.activitiesOccurences;
      const uniqueOccurences = [
        ...new Map(occurences.map((o) => [o.activityId, o])).values(),
      ];
      return uniqueOccurences;
    },
    hourTimeFormat(seconds) {
      const diff = moment.duration(seconds, "seconds");
      const diffHours = Math.floor(diff.asHours());
      const diffHoursFormatted = diffHours < 10 ? `0${diffHours}` : diffHours;
      const mmss = moment.utc(diff.as("milliseconds")).format("mm:ss");
      return `${diffHoursFormatted}:${mmss}`;
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
  padding: 4.8px 32px;
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
  margin-bottom: 32px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.TimeStatistics__container__title {
  font-size: 19.2px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  letter-spacing: 1px;
  text-shadow: 0 0 10px rgb(255, 255, 255);
  cursor: unset;
  justify-self: center;
}
i {
  position: relative;
  left: 9.6px;
  color: white;
  text-shadow: 0 0 4px white;
}
.TimeStatistics__activitiesContainer {
  width: 100%;
  height: 90%;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  align-content: space-around;
  padding-bottom: 6.4px;
  box-sizing: content-box;
  min-width: 640px;
}

.TimeStatistics__statistic {
  display: flex;
  margin: 2px;
  color: rgb(7, 223, 151);
  font-size: 16px;
  font-weight: bold;
  text-shadow: 2px 0 2px rgb(1, 8, 114);
}
.TimeStatistics__statistic:hover {
  font-weight: bold;
  color: rgb(81, 255, 255);
}

.TimeStatistics__activityDuration {
  margin-left: 10px;
}

@media (max-width: 765px) {
  .TimeStatistics__container {
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-bottom: 10px;
   height: 37%;
  }
  .TimeStatistics__activitiesContainer {
    display: flex;
    flex-flow: column;
    align-items: center;
    flex-wrap: nowrap;
  }
  .TimeStatistics__statistic {
    font-size: 14.4px;
  }
}
</style>
