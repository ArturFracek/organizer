<template>
  <div class="routine__routineContainer">
    <button
      type="button"
      class="goal__showModalButton"
      @click="showModal = true"
    >
      {{ goalObject.title }}
    </button>
    <transition name="fade" appear>
      <div
        class="goal__modalOverlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="goal__modal" v-if="showModal">
        <div class="goal__modal__type">Goal</div>
        <h1>{{ goalObject.title }}</h1>
        <div class="goal__createdAt">Created at: <br>{{ date }}</div>
        <i class="bi bi-calendar2-plus"></i>

     <v-menu>
       <v-textfield></v-textfield>
     </v-menu>

        <textArea v-model="localGoal.description" />
        <Slider v-model="localGoal.priority" />
        <div class="goal__bottomContainer">
          <div class="goal__buttonsContainer">
            <input
              type="submit"
              class="goal__button goal__button--save"
              value="Save"
              @click="updateGoal"
            />
            <input
              type="submit"
              class="goal__button goal__button--save"
              value="Go back"
              @click="showModal = false"
            />
          </div>
          <button
            class="goal__button goal__button--delete bi bi-trash"
            type="button"
            aria-placeholder=""
            @click="deleteGoal(goalObject._id)"
          ></button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import textArea from "@/components/textArea.vue";
import moment from "moment"

export default {
  name: "GoalModal",
  data() {
    return {
      showModal: false,
      localGoal: { ...this.goalObject },
      priority: 5,
      date: `${this.goalObject.createdAt.getDate()}/${this.goalObject.createdAt.getMonth()}/${this.goalObject.createdAt.getFullYear()}`,
      deadline: new Date(),
    };
  },
  components: {
    Slider,
    textArea,
  },
  props: {
    goalObject: {
      type: Object,
      required: false,
    },
  },
  computed: {
    formatDate() {
      return this.deadline ? moment(this.deadline).format("Do MMMM YYYY"): ""
    }
  },
  methods: {
    updateGoal() {
      this.$emit("updateGoal", { ...this.localGoal });
      this.showModal = false;
    },
    deleteGoal(id) {
      this.$emit("deleteGoal", id);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.routine__routineContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.modalButton:hover {
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.6);
}

.goal__bottomContainer {
  width: 95%;
  height: 10%;
  margin-left: 0%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.goal__buttonsContainer {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-left: 5%;
}

.goal--btn:focus {
  color: turquoise;
}

.goal__modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  backdrop-filter: hue-rotate(180deg) opacity(80%) brightness(85%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.goal__modal {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50.6%;
  transform: translate(-50%, -50%);
  background-color: rgb(100, 100, 100);
  z-index: 99;
  text-align: center;
  width: 80%;
  height: 60%;
  border-radius: 2px;
  color: rgb(0, 0, 0);
  background: none;
  outline: none;
  border: 2px solid rgb(35, 166, 170);
  border-radius: 0.5rem;
  backdrop-filter: blur(8px);
}

.goal__modal__type {
  color: white;
  position: absolute;
  top: 4%;
  left: 1rem;
  text-shadow: 0 0 3px white;
  font-size: 1.3rem;
}

h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 15px;
  text-shadow: 0 0 1rem white;
}

.goal__createdAt {
  color: white;
  position: fixed;
  top: 1rem;
  right: 1rem;
  text-shadow: 0 0 3px white;
}

.modalElement {
  margin: 10px;
}

.p {
  display: flex;
  flex-wrap: wrap;
  color: #666;
  font-size: 18px;
  font-weight: 400;
}

.slide-enter-active,
.slide-leave-active {
  transition: transfrom 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(300%);
}

.goal__button--delete {
  right: -1rem;
  text-justify: auto;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
  color: rgba(253, 253, 250, 0.945);
  font-size: 2rem;
  background: none;
  outline: none;
  transition: 0.2s ease-out;
  display: flex;
  justify-content: center;
}

.goal__button--save {
  height: 80%;
  width: 20%;
  text-justify: auto;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
  color: rgba(253, 253, 250, 0.945);
  font-weight: bold;
  text-shadow: 0 0 1rem white;
  background: none;
  outline: none;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 0.5rem;
  backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(248, 248, 248));
  transition: 0.1s ease-out;
  margin: 0 1.2rem;
}

.goal__button {
  background: none;
  outline: none;
  color: white;
}

.goal__button--save:hover {
  color: red;
  border-color: red;
  text-shadow: 0 0 25px red;
  box-shadow: 0 5px 25px rgba(255, 19, 19, 0.685);
}
.goal__button--delete:hover {
  color: red;
  text-shadow: 0 5px 10px red;
}

.goal__showModalButton {
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  color: rgba(253, 253, 250, 0.945);
  font-weight: bold;
  text-shadow: 0 0 1rem white;
  padding: 0.6rem;
  background: none;
  outline: none;
  background: transparent;
  backdrop-filter: drop-shadow(4px 4px 10px rgba(248, 248, 248, 0));
  transition: 0.2s ease-in;
}

.goal__showModalButton:hover {
  color: rgb(255, 107, 107);
  border-right: 0.1px solid rgba(253, 94, 94, 0.692);
  border-left: 0.1px solid rgba(255, 115, 115, 0.726);
  border-radius: 12px;
}

</style>
