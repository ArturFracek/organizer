<template>
  <div class="goal__goalContainer">
    <button
      type="button"
      class="goal__showModalButton"
      @click="showModal = true"
      data-test="goalModalButton"
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
      <div class="goal__modal" v-if="showModal" data-test="goalModal">
        <div class="goal__modal__upperContainer">
          <div class="goal__modal__type">Goal</div>

          <div class="goal__createdAt">Created at: <br />{{ date }}</div>
          <div class="goal__deadline__container">
            <div class="goal__deadline goal__deadline--label">Deadline:</div>
            <DeadlineDatePicker
              class="goal__deadline"
              v-model="localGoal.deadline"
            />
          </div>
        </div>
        <h1 data-test="goalTitle">{{ goalObject.title }}</h1>

        <textArea v-model="localGoal.description" />
        <Slider v-model="localGoal.priority" />
        <div class="goal__bottomContainer">
          <div class="goal__buttonsContainer">
            <input
              type="submit"
              class="goal__button goal__button--save"
              value="Save"
              @click="updateGoal"
              data-test="goalSave"
            />
            <input
              type="submit"
              class="goal__button goal__button--save"
              value="Go back"
              @click="showModal = false"
              data-test="goalGoBack"
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
import moment from "moment";
import DeadlineDatePicker from "./DeadlineDatePicker.vue";

export default {
  name: "GoalModal",
  data() {
    return {
      showModal: false,
      localGoal: { ...this.goalObject },
      priority: 5,
      date: `${this.goalObject.createdAt.getDate()}/${this.goalObject.createdAt.getMonth()}/${this.goalObject.createdAt.getFullYear()}`,
      deadline: "deadline",
    };
  },
  components: {
    Slider,
    textArea,
    DeadlineDatePicker,
  },
  props: {
    goalObject: {
      type: Object,
      required: false,
    },
  },
  computed: {
    formatDate() {
      return this.deadline ? moment(this.deadline).format("Do MMMM YYYY") : "";
    },
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

.goal__goalContainer {
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
  height: 48px;
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

@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
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
    border-radius: 8px;
    backdrop-filter: blur(8px);
  }
}
@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .goal__modal {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50.6%;
    transform: translate(-50%, -50%);
    background-color: rgba(6, 0, 32, 0.658);
    z-index: 99;
    text-align: center;
    width: 80%;
    height: 60%;
    border-radius: 2px;
    color: rgb(0, 0, 0);
    outline: none;
    border: 2px solid rgb(35, 166, 170);
    border-radius: 8px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.goal__modal__type {
  color: rgba(211, 255, 253, 0.945);
  position: absolute;
  top: 4%;
  left: 16px;
  text-shadow: 0 0 3px rgba(211, 255, 253, 0.945);
  font-size: 20.8px;
}

h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(211, 255, 253, 0.945);
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 15px;
  text-shadow: 0 0 16px rgba(211, 255, 253, 0.945);
}
h1:hover {
  color: rgba(255, 0, 0, 0.712);
  cursor: pointer;
}

.goal__createdAt {
  color: rgba(211, 255, 253, 0.945);
  position: fixed;
  top: 4.8px;
  right: 16px;
  text-shadow: 0 0 3px rgba(211, 255, 253, 0.945);
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
  right: -16px;
  text-justify: auto;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
  color: rgba(211, 255, 253, 0.945);
  font-size: 32px;
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
  color: rgba(211, 255, 253, 0.945);
  font-weight: bold;
  text-shadow: 0 0 16px rgba(211, 255, 253, 0.945);
  background: none;
  outline: none;
  border: 2px solid rgba(211, 255, 253, 0.945);
  border-radius: 8px;
  backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(248, 248, 248));
  transition: 0.1s ease-out;
  margin: 0 19.2px;
}

.goal__button {
  background: none;
  outline: none;
  color: rgba(211, 255, 253, 0.945);
}

.goal__button--save:hover {
  color: red;
  border-color: red;
  text-shadow: 0 0 25px red;
  box-shadow: 0 5px 10px rgba(255, 19, 19, 0.685);
}
.goal__button--delete:hover {
  color: red;
  text-shadow: 0 5px 5px red;
}

.goal__showModalButton {
  text-align: center;
  width: auto;
  height: 100%;
  border-radius: 2px;
  color: rgb(239, 255, 254);
  font-weight: bold;
  text-shadow: 0 0 16px rgb(250, 255, 255);
  padding: 9.6px;
  background: none;
  outline: none;
  background: transparent;
  backdrop-filter: drop-shadow(4px 4px 10px rgba(248, 248, 248, 0));
  transition: 0.2s ease-in;
  z-index: 3;
}

.goal__showModalButton:hover {
  color: rgb(253, 51, 51);
  border-right: 2px solid rgba(233, 55, 55, 0.692);
  border-left: 2px solid rgba(248, 65, 65, 0.726);
  border-radius: 12px;
  text-shadow: 0 0 0.5px red;
}

.goal__datePicker {
  width: 112px;
  color: white;
  position: fixed;
  top: 16px;
  right: 160px;
  text-shadow: 0 0 3px white;
}

ul {
  background-color: transparent;
}
.goal__deadline__container {
  display: flex;
  flex-flow: column;
  align-items: center;
  position: fixed;
  top: 1.6px;
  right: 128px;
  width: 96px;
}
.datePicker__container {
  width: 112px;
}

.goal__deadline--label {
  top: 35.2px;
  font-size: 19.2px;
  color: rgb(84, 245, 178);
  text-shadow: 0px 0px 2px rgb(0, 255, 157);
  text-align: center;
  transition: 0.3s;
}

@media (max-width: 760px) {
  .goal__modal {
    width: 100%;
    height: 100%;
  }
  .goal__button {
    width: 80px;
  }
  h1 {
    font-size: 16px;
  }
  .goal__modal__type {
    font-size: 16px;
  }
  .goal__deadline--label {
    font-size: 16px;
  }
  .goal__deadline__container {
    right: 152px;
  }
  .vdp-datepicker * {
    position: absolute;
    bottom: 96px;
  }
  .goal__bottomContainer {
    margin-top: 5px;
    margin-bottom: 16px;
  }
  .slider__container {
    position: relative;
    right: -16px;
  }
  .textArea__container {
    position: relative;
    top: 0px;
  }
  h1 {
    position: relative;
    top: 80px;
  }
  .goal__buttonsContainer {
    position: relative;
    right: -7px;
  }
  .goal__button {
    height: 70%;
    width: 120px;
  }
  .goal__button--delete {
    left: -1%;
    top: 20%;
    position: relative;
  }
  .goal__deadline__container {
    right: 38%;
  }
  .goal__modal__type {
    top: 11px;
    font-size: 150%;
  }
  .goal__modal__upperContainer {
    border-bottom: 2px solid rgb(248, 250, 250);
  }
  .goal__modal__upperContainer {
    margin-top: 0;
    width: 100%;
    height: 10%;
  }
  h1 {
    top: 5px;
  }
}
</style>
