<template>
  <div class="TimeStatistics__container">
    <div class="TimeStatistics__container__title">Time Statistics</div>
    <div v-if="activeRoutine" class="TimeStatistics__activitiesContainer">
      <button
        v-for="(occurence, index) in activeRoutine.activitiesOccurences"
        :key="index"
      >
        {{ getActivityNameById(occurence) }} {{ getActivityDurationById(occurence) || 0 }}
      </button>
    </div>
    <button class="test" @click="test"></button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  async mounted() {
    this.fetchRoutines(), this.fetchActivities();
  },
  computed: {
    ...mapGetters({
      activities: "activities/activities",
      activeRoutine: "routines/activeRoutine",
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
      const activity = this.activities.find((a) => a._id === occurence.activityId);
      return activity ? activity.duration : "";
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
  justify-content: flex-start;
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
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
  overflow-y: scroll;
}

.TimeStatistics__container__title {
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  letter-spacing: 1px;
  text-shadow: 0 0 10px rgb(255, 255, 255);
  cursor: unset;
}
.TimeStatistics__activitiesContainer {
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
}
.test {
  background-color: red;
  width: 20px;
  height: 10px;
}
</style>
