<template>
<div class="wrapper">
  <ActivityModal />
  <h1 class="title">{{ title }}</h1>
  <div class="addActivities">
    <div class="instruction">Add activity name, and after " , " write priority number from 1 to 5.</div>
    <input class="input" type="text" placeholder="Add activity" v-model="activityObjectName" @keyup.enter="addActivities">
    <button class="button" @click="addActivities">Add</button>
  </div>
  <div class="activities">
    <div v-for="activity in activities" :key="activity.id" class="activityHolder">
      <ActivityModal :activityObject="activity" />
    </div>
  </div>
</div>
</template>

<script>
import ActivityModal from "@/components/ActivityModal.vue"

export default {
  name: "MyActivities",
  data() {
    return {
      title: "My Activities",
      activityObject: {},
      activityObjectName: "",
      newPriority: "1",
      activities: [
        { title: "Bieganie", priority: 3/5, id: 1},
        { title: "Strzelanie", priority: 2/5, id: 2},
      ]
    };
  },
  components: {
    ActivityModal,
  },
  methods: {
    addActivities() {
      this.activities.push({ title: this.activityObjectName, priority: this.newPriority, id: Math.random() })
      this.activityObjectName= "";
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
  max-height: 60%;
  width: 50vw;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.instruction {
  display: flex;
  justify-self: center;
  align-items: center;
  margin: 10px;
  font-size: 1.4em;
}

.addActivities {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0 6em;
}

.input {
  display: flex;
  justify-content: center;
  width: 210px;
  padding: 0;
  margin: 0;
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
  align-items: flex-start;
  flex-wrap: wrap;
}

.activityHolder {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
}
</style>
