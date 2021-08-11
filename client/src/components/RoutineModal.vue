<template>
  <div class="routineModalWrapper">
    <button type="button" class="btn" @click="showModal = true">
      {{ routineObject.title }}
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
        <h1>{{ routineObject.title }}</h1>
        <textArea />
        <Slider></Slider>
        <div class="bottomContainer">
          <div class="lower_mid_section">
            <input 
              type='submit' 
              class="btn_save" 
              value="Save" 
              placeholder=""/>
            <button
              type="button"
              class="btn_save"
              @click="showModal = false"
            >
              Go back
            </button>
          </div>
          <button 
            class="btn_delete"
            type="button"
            value="Delete"
            aria-placeholder=""
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
  },
};
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

.routineModalButton:hover {
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

.lower_mid_section {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.btn {
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  color: rgba(253, 253, 250, 0.945);
  font-weight: bold;
  text-shadow: 0 0 1rem white;
  padding: 0.7rem;
  background: none;
  outline: none;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(248, 248, 248));
  transition: 0.1s ease-out;
}

.modalButtonClose:hover {
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.6);
}

.modalOverlay {
  position: fixed;
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
  padding: 0.7rem;
  background: none;
  outline: none;
  border: 2px solid rgb(35, 166, 170);
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(17, 185, 207));
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

input:hover, .btn_save:hover, .btn_delete:hover  {
  border-color: rgb(216, 25, 25);
  color: rgb(216, 25, 25);
}
input:hover ~ .btn {
  color: rgb(216, 25, 25);
}

.btn_save {
  height: 3rem;
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
  white-space: nowrap;
}

.btn_delete {
  position: relative;
  top: 50%;
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
}

</style>
