<template>
  <div class="modalWrapper">
    <button class="modalButton" @click="showModal = true">{{ newActivity }}</button>
    <transition name="fade" appear>
      <div class="modalOverlay" v-if="showModal" @click="showModal = false"></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <h1>Define your Activity</h1>
        <input type="text" placeholder="Activity name">
        <Slider></Slider>
        <button class="modalButton" @click="showModal = false">Close Modal</button>
      </div>
    </transition>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";

export default {
  name: "ActivityModal",
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    Slider,
  },
  props: [
    "newActivity",
  ]
}
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
}

.modalButton {
  border: none;
  background: none;
  cursor: pointer;

  margin-top: 15px;
  padding: 15px 25px;
  background-image: linear-gradient(to right, #CC2E5D, #FF5858);
  border-radius: 10px;

  color: #fff;
  font-size: 18px;
  font-weight: 700;

  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;

}

.modalButton:Hover {
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  background-color: #FFF;
  border-radius: 16px;

  padding: 25px;

}

.h1 { 
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
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
