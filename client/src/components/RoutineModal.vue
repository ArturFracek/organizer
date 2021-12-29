<template>
  <div class="routine__modalContainer">
    <button
      type="button"
      class="routine__button routine__showModalButton"
      :class="{ routine__showModalButtonActive: localRoutine.is_active }"
      @click="showModal = true"
      data-test="routineShowModal"
    >
      {{ routineObject.title }}
    </button>
    <transition name="fade" appear>
      <div
        class="routine__modalOverlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="routine__modal" v-if="showModal">
        <div class="routine__modal__type">Routine</div>
        <input
          class="routine__title"
          v-model="localRoutine.title"
          data-test="routineModalTitle"
        />
        <div class="routine__createdAt">Created at: <br />{{ date }}</div>
        <div class="routine__modalUpperSection">
          <textArea v-model="localRoutine.description" />
          <Slider v-model="localRoutine.priority" />
        </div>
        <div class="routine__activitiesOccurences">
          <ActivityOccurences v-model="localRoutine.activitiesOccurences" />
        </div>
        <div class="routine__bottomSection">
          <button
            @click="activation"
            class="routine_button routine__button--activation"
            :class="{ routine__isActive: localRoutine.is_active }"
            data-test="activateRoutineButton"
          >
            <span v-if="!localRoutine.is_active">Activate this Routine</span>
            <span v-if="localRoutine.is_active">Active!</span>
          </button>
          <div class="routine__bottomContainer">
            <div class="routine__buttonsContainer">
              <input
                type="submit"
                class="routine__button routine__button--save"
                @click="saveRoutine"
                value="Save"
                data-test="routineSave"
              />
              <input
                type="button"
                class="routine__button routine__button--save"
                @click="showModal = false"
                value="Go back"
                data-test="routineGoBack"
              />
            </div>
            <button
              class="routine__button__delete bi bi-trash"
              type="button"
              value="Delete"
              @click="deleteRoutine(routineObject._id)"
              data-test="routineDelete"
            ></button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import textArea from "@/components/textArea.vue";
import ActivityOccurences from "@/components/ActivityOccurences.vue";

export default {
  name: "RoutineModal",
  data() {
    return {
      showModal: false,
      localRoutine: { activitiesOccurences: [], ...this.routineObject },
      priority: 5,
      is_active: false,
      date: `${this.routineObject.createdAt.getDate()}/${this.routineObject.createdAt.getMonth()}/${this.routineObject.createdAt.getFullYear()}`,
    };
  },
  components: {
    Slider,
    textArea,
    ActivityOccurences,
  },
  props: {
    routineObject: {
      type: Object,
      required: false,
    },
  },
  watch: {
    routineObject() {
      this.localRoutine = { activitiesOccurences: [], ...this.routineObject };
    },
  },
  methods: {
    deleteRoutine(id) {
      this.$emit("deleteRoutine", id);
    },
    saveRoutine() {
      this.$emit("savingRoutine", {
        ...this.localRoutine,
      });
      this.showModal = false;
    },
    activation() {
      return this.localRoutine.is_active === false
        ? (this.localRoutine.is_active = true)
        : (this.localRoutine.is_active = false);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.routine__modalContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

.routineModalButton:hover {
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.6);
}

.routine__activitiesOccurences {
  display: flex;
  flex-flow: column;
  background-color: transparent;
  width: 97%;
  height: 100%;
  border-radius: 60px;
  border-bottom: 2px dotted turquoise;
  border-top: 2px dotted turquoise;
}

.routine__bottomContainer {
  width: 95%;
  height: 10%;
  margin-left: 3%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 24px;
  margin-bottom: 8px;
  box-sizing: border-box;
}

.routine__bottomSection {
  display: flex;
  flex-flow: column;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  height: auto;
}

.routine__buttonsContainer {
  position: relative;
  margin-left: 5%;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  right: 32px;
}

.routine__showModalButton {
  font-weight: bold;
  text-align: center;
  width: 100%;
  height: 100%;
  color: rgba(253, 253, 250, 0.945);
  text-shadow: 0 0 2px white;
  padding: 8px;
  background: none;
  outline: none;
  border: 2px solid rgb(217, 252, 255);
  border-radius: 7px;
  background: transparent;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  transition: 0.1s ease-out;
}
.routine__showModalButtonActive {
  color: rgb(125, 255, 216);
  font-weight: bold;
  text-shadow: 2px 0 30px rgb(15, 0, 228);
  border: 2px solid rgb(53, 255, 221);
  box-shadow: 0 5px 20px rgba(127, 255, 212, 0.472);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(41, 2, 168));
  transition: 0.2s ease;
}

.routine__button--activation {
  text-align: center;
  width: 50%;
  height: 40px;
  border-radius: 2px;
  color: rgba(255, 255, 255, 0.945);
  font-weight: bold;
  text-shadow: 0 0 16px rgb(255, 255, 255);
  padding: 8px;
  background: none;
  outline: none;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  background: transparent;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(248, 248, 248));
  transition: 0.5s ease-out;
}

.routine__isActive {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: rgb(69, 241, 204);
  text-shadow: 3px 0 5px rgb(67, 253, 213);
  border: 2px solid rgb(26, 255, 186);
  animation: text1 1.2s;
}

@keyframes text1 {
  0% {
    font-size: 16px;
    color: rgb(0, 0, 0);
    opacity: 0;
    text-shadow: 9.6px 0px 12.8px turquoise, -9.6px 0px 12.8px turquoise,
      0px 9.6px 12.8px turquoise, 0px -9.6px 12.8px turquoise;
    filter: hue-rotate(0deg);
  }
  20% {
    opacity: 0.8;
    filter: hue-rotate(0deg);
  }
  70% {
    opacity: 1;
    text-shadow: 4.8px 0px 12.8px turquoise, -4.8px 0px 12.8px turquoise,
      0px 4.8px 12.8px turquoise, 0px -4.8px 12.8px turquoise;
    filter: hue-rotate(180deg);
  }
  80% {
    font-size: 36.8px;
    opacity: 1;
    text-shadow: 3.2px 0px 22.4px turquoise, -3.2px 0px 22.4px turquoise,
      0px 3.2px 1.4em turquoise, 0px -3.2px 22.4px turquoise;
    filter: hue-rotate(180deg);
  }
  100% {
    opacity: 1;
    text-shadow: 3.2px 0px 3.2px turquoise;
    filter: hue-rotate(0deg);
  }
}

.routine__modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(5, 4, 42, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .routine__modal {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(100, 100, 100);
    z-index: 99;
    text-align: center;
    width: 80%;
    height: 80%;
    border-radius: 2px;
    color: rgb(0, 0, 0);
    padding: 11.2px;
    background: none;
    outline: none;
    border: 2px solid rgb(35, 166, 170);
    border-radius: 8px;
    background: transparent;
    box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
    backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(17, 185, 207));
  }
}

@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .routine__modal {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(100, 100, 100);
    z-index: 99;
    text-align: center;
    width: 80%;
    height: 80%;
    border-radius: 2px;
    color: rgb(0, 0, 0);
    padding: 11.2px;
    outline: none;
    border: 2px solid rgb(35, 166, 170);
    border-radius: 8px;
    background-color: rgba(6, 0, 34, 0.678);
    box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
    backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(17, 185, 207));
  }
}

.routine__modal__type {
  color: white;
  position: absolute;
  top: 0;
  left: 16px;
  text-shadow: 0 0 3px white;
  font-size: 19.2px;
}

h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 15px;
  text-shadow: 0 0 16px white;
}

.routine__createdAt {
  color: white;
  position: fixed;
  top: 0px;
  right: 16px;
  text-shadow: 0 0 3px white;
  font-size: 16px;
}

.modalElement {
  margin: 10px;
}

.routine__modalUpperSection {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 20%;
}

.p {
  display: flex;
  flex-wrap: wrap;
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transfrom 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(300%);
}

input:hover,
.routine__button--save:hover,
.routine__button__delete:hover {
  border-color: rgb(216, 25, 25);
  color: rgb(216, 25, 25);
}
input:hover ~ .routine__showModalButton {
  color: rgb(216, 25, 25);
}
.routine__button--activation:hover {
  text-shadow: 0 0 10px rgb(156, 243, 255);
  box-shadow: 0 0 20px rgb(106, 248, 253);
}

.routine__button--save {
  height: 40px;
  width: 20%;
  text-justify: auto;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
  color: rgba(253, 253, 250, 0.945);
  font-weight: bold;
  text-shadow: 0 0 16px white;
  background: none;
  outline: none;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 8px;
  background: transparent;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(248, 248, 248));
  transition: 0.2s ease-out;
  margin: 0 19.2px;
  white-space: nowrap;
}

.routine__button__delete {
  position: relative;
  right: 0px;
  top: 0%;
  border-radius: 2px;
  color: rgba(253, 253, 250, 0.945);
  font-size: 32px;
  background: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.routine__showModalButton:hover {
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.6);
}
.routine__button--save:hover {
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.6);
}

.routine__button:hover {
  color: red;
  border: 2px solid red;
  text-shadow: 0 0 15px rgba(255, 0, 0, 0.335);
  box-shadow: 0 0 5px red;
  backdrop-filter: drop-shadow(0 0 10px red);
}

.routine__title {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-weight: 700;
  text-shadow: none;
  margin-bottom: 8px;
  width: 70%;
  text-align: center;
  padding: 0 11.2px;
  border-radius: 8px;
  border-style: none;
}

.routine__title:focus {
  outline: none;
}

@media (max-width: 760px) {
  .routine__showModalButton {
    font-weight: 600;
    padding: 3.2px;
    backdrop-filter: none;
  }
  .routine__modal {
    width: 100%;
    height: 100%;
  }
  .routine__bottomSection {
    margin-top: auto;
  }
  .routine__activitiesOccurences {
    height: 60%;
    padding-top: 0;
  }
  .routine__button--save {
    width: 96px;
    position: relative;
    right: -33.6px;
  }
  .routine__bottomContainer {
    margin-left: auto;
  }
  .routine__title {
    font-size: 16px;
  }
  .routine__createdAt {
    font-size: 12.8px;
  }
  .routine__modal__type {
    font-size: 14.4px;
  }
  .routine__button__delete {
    right: 0px;
    top: -3.2px;
  }
  .routine__isActive {
    height: 25px;
    width: 100%;
    font-size: 20px;
  }
  .routine__button--activation {
    height: 25px;
    width: 100%;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .routine__button {
    height: 70%;
    width: 120px;
    border: 1px solid;
  }
  .routine__button__delete {
    left: -8px;
    top: 0px;
    position: relative;
  }
  .routine__modal__type {
    font-size: 16px;
    top: 8px;
  }
}
</style>
