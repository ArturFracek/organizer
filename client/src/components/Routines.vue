<template>
  <div class="routines__mainContainer">
    <div class="routines__title">Routines</div>
    <div class="routines__addingRoutinesContainer">
      <input
        class="input routines__addRoutineInput"
        type="text"
        placeholder=" "
        v-model="title"
        @keyup.enter="addRoutine"
        data-test="routinesInputAdd"
      />
      <label
        class="routines__form__label__addRoutines"
        data-test="RoutinesLabel"
        >Add Routine</label
      >
      <button
        class="addRoutine__button"
        @click="addRoutine"
        data-test="routinesButtonAdd"
      >
        Add
      </button>
    </div>
    <div class="routines__objectsHolder" data-test="routinesHolder">
      <div
        class="routine__routineHolder"
        v-for="(routine, index) in routines"
        :item="routine"
        :index="index"
        :key="routine._id"
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
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      title: this.value,
      error: "Something went wrong, try again",
    };
  },
  components: {
    RoutineModal,
  },
  async mounted() {
    this.fetchRoutines();
  },
  computed: {
    ...mapGetters({
      routines: "routines/routines",
    }),
  },
  methods: {
    ...mapActions({
      fetchAllRoutines: "routines/fetchAllRoutines",
      updateRoutine: "routines/updateRoutine",
      removeRoutine: "routines/deleteRoutine",
      createRoutine: "routines/createRoutine",
    }),
    async fetchRoutines() {
      await this.fetchAllRoutines();
    },
    async addRoutine() {
      await this.createRoutine({ title: this.title });
      this.title = "";
    },
    async deleteRoutine(id) {
      await this.removeRoutine({ id });
    },
    async saveRoutine(routine) {
      await this.updateRoutine(routine);
    },
  },
};
</script>

<style scoped>
.routines__mainContainer {
  display: flex;
  flex-flow: column;
  align-items: center;
  max-height: 60%;
  width: 100%;
  position: relative;
  border-top: 2px solid rgb(35, 166, 170);
  border-left: 2px solid rgb(35, 166, 170);
  border-right: 2px solid rgb(35, 166, 170);
  border-radius: 8px;
  padding: 0 16px 16px 16px;
  margin: 16px 0 16px;
}

input, button {
  font: inherit;
  font-size: 17.6px;
  border-style: none;
}

.routines__title {
  position: relative;
  top: 8px;
  align-self: flex-start;
  color: white;
  margin-bottom: 32px;
  font-weight: bold;
  font-size: 22.4px;
  letter-spacing: 1px;
}

.routines__addingRoutinesContainer {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 32px 0 32px 0;
  position: absolute;
}

.routines__objectsHolder {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 40px;
}

.routine__routineHolder {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px 7px;
}

.addRoutine__button {
  border-radius: 0;
  color: rgb(88, 249, 255);
  text-shadow: 0 0 8px turquoise;
  font-weight: bold;
  position: relative;
  left: 216px;
  top: -75.2px;
  text-align: center;
  padding: 11.2px;
  background: none;
  outline: none;
  border-top: 2px solid rgb(35, 166, 170);
  border-bottom: 2px solid rgb(35, 166, 170);
  border-radius: 8px;
  background: transparent;
  box-shadow: 0 25px 25px rgba(38, 221, 253, 0.1);
  display: none;
  width: 19%;
  height: 100%;
  transition: ease-in-out 0.7s;
}

button:hover {
  color: red;
  border: 2px solid red;
  text-shadow: 0 0 10px red;
}

.input {
  margin-left: 0;
  text-align: center;
  width: 100% !important;
  height: 100%;
  border-radius: 2px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  text-shadow: 0 0 16px turquoise;
  padding: 11.2px;
  background: none;
  outline: none;
  border-top: 2px solid rgb(35, 166, 170);
  border-bottom: 2px solid rgb(35, 166, 170);
  border-radius: 8px;
  background: transparent;
  transition: 0.4s ease;
}

input[type="text"],
input[type="password"] {
  color: whitesmoke;
}

input:hover {
  border-color: rgb(216, 25, 25);
  color: rgb(216, 25, 25);
}

input:hover ~ .routines__form__label__addRoutines {
  color: rgb(216, 25, 25);
}

input:focus,
textarea {
  border-left: 2px solid rgb(35, 166, 170);
  border-right: 2px solid rgb(35, 166, 170);
  color: turquoise;
  border-color: turquoise;
  background-color: none;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(15px) drop-shadow(4px 4px 10px rgb(7, 207, 233));
}

input:focus ~ .routines__form__label__addRoutines {
  color: turquoise;
  text-shadow: 0px 0px 1.6px turquoise;
}

input:focus ~ .routines__form__label__addRoutines,
input:not(:placeholder-shown).input:not(:focus)
  ~ .routines__form__label__addRoutines {
  top: -75px;
}

input:not(:placeholder-shown) ~ .addRoutine__button {
  display: block;
}

.routines__form__label__addRoutines {
  position: relative;
  color: whitesmoke;
  display: flex;
  transition: top 200ms ease-in;
  left: 200ms ease-in;
  font-size: 200ms ease-in;
  top: -35.2px;
  left: 3.2px;
  background-color: none;
  font-weight: bold;
  pointer-events: none;
}

@media (max-width: 765px) {
  .routines__title {
    top: 0;
    font-size: 17.6px;
  }
  .input {
    height: 32px;
    width: 224px;
  }
  .routines__form__label__addRoutines {
    top: -27.2px;
  }
  .routines__objectsHolder {
    margin-top: 8px;
  }
  .addRoutine__button {
    left: 139.2px;
    height: 32px;
    top: -64px;
    width: 64px;
    text-align: start;
    border: none;
    backdrop-filter: none;
  }
  input:focus ~ .routines__form__label__addRoutines,
  input:not(:placeholder-shown).input:not(:focus)
    ~ .routines__form__label__addRoutines {
    top: -56px;
  }
}
</style>
