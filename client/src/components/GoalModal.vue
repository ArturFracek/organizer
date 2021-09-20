<template>
  <div class="modalWrapper">
    <button type="button" class="btn" @click="showModal = true">
      {{ goalObject.title }}
    </button>
    <transition name="fade" appear>
      <div
        class="modalOverlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <h1>{{ goalObject.title }}</h1>
         <div class="createdAt">{{ date }}</div>
        <textArea v-model="localGoal.description" />
        <Slider v-model="localGoal.priority" />
        <div class="bottomContainer">
          <div class="lower_mid_container">
            <input
              type="submit"
              class="btn_save"
              value="Save"
              @click="updateGoal"
            />
            <input
              type="submit"
              class="btn_save"
              value="Go back"
              @click="showModal = false"
            />
          </div>
          <button
            class="btn_delete"
            type="button"
            aria-placeholder=""
            @click="deleteGoal(goalObject._id)"
          >
            Delete
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import textArea from "@/components/textArea.vue";

export default {
  name: "GoalModal",
  data() {
    return {
      showModal: false,
      localGoal: { ...this.goalObject },
      priority: 5,
      date: `${this.goalObject.createdAt.getDate()}/${this.goalObject.createdAt.getMonth()}/${this.goalObject.createdAt.getFullYear()}`,
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
  methods: {
    updateGoal() {
      this.$emit("updateGoal", { ...this.localGoal });
    },
    deleteGoal(id) {
      this.$emit("deleteGoal", id);
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.modalWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.btn {
  text-align: start;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  color: rgba(253, 253, 250, 0.945);
  font-weight: bold;
  text-shadow: 0 0 1rem white;
  padding: 0.7rem;
  background: none;
  outline: none;
  background: transparent;
  backdrop-filter: drop-shadow(4px 4px 10px rgba(248, 248, 248, 0));
  transition: 0.2s ease-in;
}

.modalButton:hover {
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.6);
}

.bottomContainer {
  width: 85%;
  height: 10%;
  margin-left: 5%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.lower_mid_container {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.btn_save {
  height: 100%;
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
  background: transparent;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(248, 248, 248));
  transition: 0.2s ease-out;
  margin: 0 1.2rem;
}

.btn:focus {
  color: turquoise;
}

.saveButton:hover {
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.6);
}

.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  backdrop-filter: hue-rotate(180deg) opacity(80%) brightness(90%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
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
  box-shadow: 0 0 0 0.5rem rgba(8, 214, 250, 0.1);
  backdrop-filter: blur(15px) drop-shadow(10px 10px 10px rgb(17, 185, 207));
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

.createdAt {
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

.btn_delete {
  height: 3rem;
  width: 5%;
  text-justify: auto;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
  color: rgba(253, 253, 250, 0.945);
  font-size: 1rem;
  text-shadow: 0 0 1rem white;
  background: none;
  outline: none;
  border: 1px rgb(255, 255, 255);
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(248, 248, 248));
  transition: 0.2s ease-out;
}
</style>
