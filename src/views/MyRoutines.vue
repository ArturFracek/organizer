<template>
<div class="wrapper">
  <h1 class="title">{{ title }}</h1>
  <div class="addRoutines">
    <div class="instruction">Create your routines, chose days you want to organise</div>
    <input class="input" type="text" placeholder="Add new routine" v-model="newRoutine" @keyup.enter="addRoutines">
    <button class="button" @click="addRoutines">Add routine</button>
  </div>
  <div class="routines">
    <div v-for="routine in routines" :key="routine.id" class="routineTile">
     {{ routine.title }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: "My Routines",
      newRoutine: "",
      newPriority: "1",
      routines: [
        { title: "Programowanie mocno", priority: 3/5, id: 1},
        { title: "Focus na gitare", priority: 2/5, id: 2},
      ]
    };
  },
  methods: {
    addRoutines() {
      this.routines.push({ title: this.newRoutine, priority: this.newPriority, id: Math.random() })
      this.newRoutine=""
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-flow: column;
}
.routineTile {
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

.addRoutines {
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

.routines {
  max-height: 90%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>