<template>
  <div class="routinesWrapper">
    <h1 class="title">{{ title }}</h1>
    <div class="addRoutines">
      <input
        class="input"
        type="text"
        placeholder="Add new routine"
        v-model="routineObjectName"
        @keyup.enter="addRoutines"
      />
      <button class="button" @click="addRoutines">Add</button>
    </div>
    <div class="routines">
      <div v-for="routine in routines" :key="routine.id" class="routineHolder">
        <RoutineModal :routineObject="routine" />
      </div>
    </div>
  </div>
</template>

<script>
import RoutineModal from "@/components/RoutineModal.vue";

export default {
  name: "MyRoutines",
  data() {
    return {
      title: "Routines",
      routineObjectName: "",
      routineObject: {},
      newPriority: "1",
      routines: [
        { title: "Holidays", id: 1 },
        { title: "January- Work focus", id: 2 },
      ],
    };
  },
  components: {
    RoutineModal,
  },
  methods: {
    addRoutines() {
      this.routines.push({
        title: this.routineObjectName,
        priority: this.newPriority,
        id: Math.random(),
      });
      this.routineObjectName = "";
    },
  },
};
</script>

<style scoped>
.routinesWrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
  max-height: 60%;
  width: 50%;
  background-color: khaki;
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

.addRoutines {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 0;
}

.button {
  width: 214px;
  padding: 0;
  margin: 0;
  text-align: center;
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

.routines {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 10px;
}

.routineHolder {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px 7px;
}
</style>
