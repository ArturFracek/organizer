<template>
  <div class="routines_container">
    {{ routines }}
    <div class="title">Routines</div>
    <div class="addRoutines">
      <input
        class="input"
        type="text"
        placeholder=" "
        v-model="title"
        @keyup.enter="createRoutine"
      />
      <label for="activity" class="form_label_add_routines">Add Routine</label>
      <button class="btn" @click="createRoutine">Add</button>
    </div>
    <div class="routines">
      <div
        class="routineHolder"
        v-for="(routine, index) in routines"
        v-bind:item="routine"
        v-bind:index="index"
        v-bind:key="routine._id"
        v-on:dblclick="deleteRoutine(routine._id)"
      >
        <RoutineModal
          :routineObject="routine"
          @deleteRoutine="deleteRoutine"
          @savingRoutine="saveRoutine"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RoutineModal from "@/components/RoutineModal.vue";
import RoutinesService from "@/Warehouse/RoutinesService";

export default {
  name: "MyRoutines",
  data() {
    return {
      title: "",
      routines: [],
      error: "Try again",
    };
  },
  components: {
    RoutineModal,
  },
  async created() {
    try {
      this.routines = await RoutinesService.getRoutines();
    } catch (err) {
      this.error = err.massage;
    }
  },
  methods: {
    async createRoutine() {
      await RoutinesService.insertRoutine({ title: this.title });
      this.routines = await RoutinesService.getRoutines();
    },
    async deleteRoutine(id) {
      await RoutinesService.deleteRoutine(id);
      this.routines = await RoutinesService.getRoutines();
    },
    async saveRoutine(routine) {
      await RoutinesService.updateRoutine(routine);
      this.routines = await RoutinesService.getRoutines();
    }
  },
};
</script>

<style scoped>
.routines_container {
  display: flex;
  flex-flow: column;
  align-items: center;
  max-height: 60%;
  width: 100%;
  position: relative;
  border: 2px solid rgb(35, 166, 170);
  border-radius: 0.5rem;
  padding: 0 1rem 1rem 1rem;
  margin: 1rem 0 1rem;
  box-shadow: 0 0 0.5rem rgb(132, 242, 250);
}

.title {
  position: relative;
  top: 0.5rem;
  align-self: flex-start;
  color: white;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 1.4rem;
  letter-spacing: 1px;
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
  margin: 2rem 0 2rem 0;
  position: absolute;
}

.button {
  width: 214px;
  padding: 0;
  margin: 0;
  text-align: center;
}

.routines {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 2.5rem;
}

.routineHolder {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px 7px;
}

.btn {
  border-radius: 0;
  color: rgb(88, 249, 255);
  text-shadow: 0 0 8px turquoise;
  font-weight: bold;
  position: relative;
  left: 12.5rem;
  top: -4.7rem;
  text-align: center;
  border-radius: 2px;
  padding: 0.7rem;
  background: none;
  outline: none;
  border: 2px solid rgb(35, 166, 170);
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0 25px 25px rgba(38, 221, 253, 0.1);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 2px rgb(17, 185, 207));
  display: none;
}

.input {
  margin-left: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  text-shadow: 0 0 1rem turquoise;
  padding: 0.7rem;
  background: none;
  outline: none;
  border: 2px solid rgb(35, 166, 170);
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(17, 185, 207));
}

input[type="text"],
input[type="password"] {
  color: whitesmoke;
}

input:hover {
  border-color: rgb(216, 25, 25);
  color: rgb(216, 25, 25);
}

input:hover ~ .form_label_add_routines {
  color: rgb(216, 25, 25);
}

input:focus,
textarea {
  color: turquoise;
  border-color: turquoise;
  background-color: none;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(15px) drop-shadow(4px 4px 10px rgb(7, 207, 233));
}

input:focus ~ .form_label_add_routines {
  color: turquoise;
  text-shadow: 0px 0px 0.1rem turquoise;
}

input:focus ~ .form_label_add_routines,
input:not(:placeholder-shown).input:not(:focus) ~ .form_label_add_routines {
  top: -4.4rem;
}

input:not(:placeholder-shown) ~ .btn {
  display: block;
}

.form_label_add_routines {
  position: relative;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
  left: 200ms ease-in;
  font-size: 200ms ease-in;
  top: -2.2rem;
  left: 0.2rem;
  background-color: none;
  font-weight: bold;
}
</style>
