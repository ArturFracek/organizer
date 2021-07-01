<template>
  <div class="activitiesWrapper">
    <h1 class="title">{{ title }}</h1>
    <div class="addActivities">
      <input
        class="input"
        type="text"
        placeholder="Add activity"
        v-model="activityObjectName"
        @keyup.enter="addActivities"
      />
      <button class="button" @click="addActivities">Add</button>
    </div>
    <div class="activities">
      <div
        v-for="activity in activities"
        :key="activity.id"
        class="activityHolder"
      >
        <ActivityModal :activityObject="activity" />
      </div>
    </div>
  </div>
</template>

<script>
import ActivityModal from "@/components/ActivityModal.vue";

export default {
  name: "MyActivities",
  data() {
    return {
      title: "Activities",
      activityObject: {},
      activityObjectName: "",
      newPriority: "1",
      activities: [
        { title: "Planning", priority: 3 / 5, id: 1 },
        { title: "Sleeping", priority: 2 / 5, id: 2 },
      ],
    };
  },
  components: {
    ActivityModal,
  },
  methods: {
    addActivities() {
      this.activities.push({
        title: this.activityObjectName,
        priority: this.newPriority,
        id: Math.random(),
      });
      this.activityObjectName = "";
    },
  },
};
</script>

<style scoped>
.activitiesWrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
  max-height: 60%;
  width: 50%;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 0;
}

.instruction {
  display: flex;
  justify-self: center;
  align-items: center;
  font-size: 1.4em;
  text-align: center;
}

.addActivities {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 0;
}

.input {
  display: flex;
  justify-content: center;
  width: 210px;
  padding: 0;
  margin: 0;
  text-align: center;
  border: 2px black solid;
}

.button {
  width: 214px;
  padding: 0;
  margin: 0;
}

.activities {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 10px;
}

.activityHolder {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px 7px;
}
</style>
