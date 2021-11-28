<template>
  <div class="activity__modalContainer">
    <button
      type="button"
      class="activity__button activity__showModalButton"
      @click="showModal = true"
      data-test="activityShowModal"
    >
      {{ activityObject.title }}
    </button>
    <transition name="fade" appear>
      <div
        class="activity__modalOverlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="activity__modal" v-if="showModal" data-test="activityModal">
        <div class="activity__modal__type">Activity</div>
        <input
          class="activity__modal__title"
          v-model="localActivity.title"
          data-test="activityModalTitle"
        />
        <div class="activity__createdAt">Created at: <br />{{ date }}</div>
        <textArea v-model="localActivity.description" />
        <Slider v-model="localActivity.priority" />
        <div class="activity__bottomContainer">
          <div class="activity__buttonsContainer">
            <input
              type="submit"
              class="activity__button activity__button--save"
              @click="updateActivity"
              value="Save"
              data-test="activitySave"
            />
            <input
              type="submit"
              class="activity__button activity__button--save"
              value="Go back"
              @click="showModal = false"
              data-test="activityGoBack"
            />
          </div>
          <button
            class="activity__button activity__button--delete bi bi-trash"
            type="button"
            value="Delete"
            @click="deleteActivity(activityObject._id)"
            data-test="activityDelete"
          ></button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import textArea from "@/components/textArea.vue";

export default {
  name: "ActivityModal",
  data() {
    return {
      showModal: false,
      localActivity: { ...this.activityObject },
      description: "",
      priority: 5,
      date: `${this.activityObject.createdAt.getDate()}/${this.activityObject.createdAt.getMonth()}/${this.activityObject.createdAt.getFullYear()}`,
    };
  },
  components: {
    Slider,
    textArea,
  },
  props: {
    activityObject: {
      type: Object,
      required: false,
    },
  },
  methods: {
    deleteActivity(id) {
      this.$emit("deleteActivity", id);
    },
    updateActivity() {
      this.$emit("updateActivity", {
        ...this.localActivity,
      });
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.activity__modalContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.activity__showModalButton {
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  color: rgba(253, 253, 250, 0.945);
  font-weight: 500;
  text-shadow: 0 0 2px rgb(235, 250, 251);
  padding: 0.5rem;
  background: none;
  border-top: 2px solid rgb(255, 255, 255);
  border-bottom: 2px solid rgb(255, 255, 255);
  border-radius: 6px;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  transition: 0.2s ease;
}

.activity__bottomContainer {
  width: 95%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.activity__buttonsContainer {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-left: 5%;
}

.activity__button--save {
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

.activity__showModalButton:focus {
  color: turquoise;
}

.activity__button--save:hover {
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.6);
}

.activity__modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(31, 1, 59, 0.5);
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
  .activity__modal {
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
    background: transparent;
    box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
    backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(17, 185, 207));
    padding: 0;
  }
}

@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .activity__modal {
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
    outline: none;
    border: 2px solid rgb(35, 166, 170);
    border-radius: 0.5rem;
    background: rgba(1, 0, 34, 0.76);
    box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
    backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(17, 185, 207));
    padding: 0;
  }
}

.activity__modal__type {
  color: white;
  position: absolute;
  top: 0.2rem;
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

.activity__createdAt {
  color: white;
  position: fixed;
  top: 0.2rem;
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

.activity__button--delete {
  text-justify: auto;
  text-align: center;
  font-weight: bold;
  color: rgba(253, 253, 250, 0.945);
  font-size: 2rem;
  text-shadow: 0 0 1rem white;
  background: none;
  outline: none;
  transition: 0.2s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.activity__button--save:hover,
.activity__showModalButton:hover {
  color: red;
  border: 2px solid red;
  text-shadow: 0 0 6px red;
  box-shadow: 0 0 5px red;
}

.activity__button--delete:hover {
  color: red;
  text-shadow: 0 0 10px red;
}

.activity__modal__title {
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: none;
  margin-bottom: 0.5rem;
  width: 70%;
  text-align: center;
  padding: 0 0.7rem;
  border-radius: 8px;
}

.activity__modal__title:focus {
  outline: none;
}
@media (max-width: 760px) {
  .activity__showModalButton {
    font-weight: 500;
    padding: 0.2rem;
    text-shadow: none;
  }
  .activity__modal {
    width: 100%;
    height: 70%;
  }
  .activity__button--save {
    width: 6rem;
  }
}
</style>
