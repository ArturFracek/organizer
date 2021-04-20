<template>
<div class="wrapper">
  <h1 class="title">{{ title }}</h1>
  <div class="addActivities">
    <div class="instruction">Add activity name, and after " , " write priority number from 1 to 5.</div>
    <input class="input" type="text" placeholder="Add activity" v-model="newActivity" @keyup.enter="addActivities">
    <button class="button" @click="addActivities">Add</button>
  </div>
  <div class="activities">
    <div v-for="activity in activities" :key="activity.id" class="activityTile">
     <router-link :to="{ name: 'newActivity', params: { activity: activity.id } }" class="insideTile">{{ activity.title }}</router-link>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      title: "My Activities",
      newActivity: "",
      newPriority: "1",
      activities: [
        { title: "Bieganie", priority: 3/5, id: 1},
        { title: "Strzelanie", priority: 2/5, id: 2},
      ]
    };
  },
  methods: {
    addActivities() {
      this.activities.push({ title: this.newActivity, priority: this.newPriority, id: Math.random() })
      this.newActivity=""
    },
    activity() {
      return this.activities.find(
        (activity) => activity.title === this.activity
      );
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-flow: column;
}
.activityTile {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(31, 31, 66);
  width: 9em;
  height: 7em;
  color: white;
  font-weight: bold;
  margin: 10px;
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
  max-height: 90%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
