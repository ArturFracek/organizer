<template>
  <div class="routineModalWrapper">
    <button type="button" class="routineModalButton" @click="showModal = true">{{ routineObject.title }}</button>
    <transition name="fade" appear>
      <div class="modalOverlay" v-if="showModal" @click="showModal = false"></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <h1>{{ routineObject.title }}</h1>
        <textArea />
        <Slider></Slider>
        <div class="bottomContainer">
        <button type="button" class="saveButton">save</button>
        <button type="button" class="modalButtonClose" @click="showModal = false">go back</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import textArea from "@/components/textArea.vue";

export default {
  name: "RoutineModal",
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    Slider,
    textArea,
  },
  props: {
    routineObject: {
      type: Object,
      required: false,
    },
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.routineModalWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.routineModalButton {
  border: none;
  background: none;
  cursor: pointer;

  padding: 10px 10px;
  background-image: linear-gradient(to right, #CC2E5D, #FF5858);
  border-radius: 8px;

  color: #fff;
  font-size: 18px;
  font-weight: 700;

  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;

}

.routineModalButton:Hover {
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.6);
}

.bottomContainer {
  width: 100%;
  display: flex;
  justify-content: center
}

.modalButtonClose {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  width: 30%;
  height: 5%;
  margin: 10px;

  margin-top: 15px;
  padding: 10px 10px;
  background-image: linear-gradient(to right, #8f8f8f, #d6d6d6);
  border-radius: 10px;

  color: #fff;
  font-size: 14px;
  font-weight: 700;

  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}

.modalButtonClose:Hover {
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.6);
}

.saveButton {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  width: 30%;
  height: 5%;
  margin: 10px;

  margin-top: 15px;
  padding: 10px 10px;
  background-image: linear-gradient(to right, #8f8f8f, #d6d6d6);
  border-radius: 10px;

  color: #fff;
  font-size: 14px;
  font-weight: 700;

  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}

.saveButton:Hover {
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.6);
}


.modalOverlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.4);
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(100, 100, 100);
  z-index: 99;

  width: 100%;
  max-width: 60%;
  height: 100%;
  max-height: 40%;
  border-radius: 16px;

  padding: 25px;

  clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
}

h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 15px;
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
</style>
