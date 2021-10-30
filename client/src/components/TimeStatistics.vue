<template>
  <div class="TimeStatistics__container">
    <div class="TimeStatistics__container__title">Time Statistics</div>
    <div class="TimeStatistics__activitiesContainer">
      {{ getActivityName(activeRoutine) }}
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      activities: "activities/activities",
      activeRoutine: "routines/activeRoutine",
    }),
  },
  methods: {
    getActivityName(activeRoutine) {
      const activity = this.activities.find((a) => a._id === this.activeRoutine.activitiesOccurences.activityId);
      return activity ? activity.title : "";
    },
  },
};
</script>

<style>
.TimeStatistics__container {
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
  justify-content: center;
  margin-bottom: 2rem;
}

.TimeStatistics__container__title {
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  letter-spacing: 1px;
  text-shadow: 0 0 10px rgb(255, 255, 255);
  cursor: unset;
}
</style>
