<template>
  <div class="timePicker__mainContainer">
    <i class="bi bi-clock-history"></i>
    <VuePicker
      @input="emitTime"
      format="HH:mm"
      :minute-interval="15"
      :hour-range="[
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        0,
        1,
        2,
      ]"
      :blur-delay="450"
      :value="value"
      append-to-body
      hide-disabled-hours
      advanced-keyboard
      auto-scroll
      drop-direction="down"
      data-test="timerPicker"
    >
    </VuePicker>
  </div>
</template>

<script scoped>
import VuePicker from "vue2-timepicker/src/vue-timepicker.vue";
import "vue2-timepicker/dist/VueTimepicker.css";

export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  components: {
    VuePicker,
  },
  methods: {
    emitTime(Time) {
      this.$emit("input", Time);
    },
  },
};
</script>

<style>
.timePicker__mainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 35.2px;
  margin: 3.2px 16px;
  color: rgb(255, 255, 255);
  border-style: dotted;
  border-width: 2px;
  border-image: linear-gradient(to top, rgb(73, 251, 183), rgb(248, 169, 169)) 1;
  border-image-repeat: stretch;
  align-items: center;
  box-shadow: 0px 5px 10px rgb(121, 244, 255, 0.3);
  transition: 0.6s;
}

ul {
  background: rgb(0, 0, 0);
  transition: 0.6s;
}

input {
  color: rgb(84, 245, 178);
  text-shadow: 0px 0px 2px rgb(0, 255, 157);
  text-align: center;
  transition: 0.3s;
  background-color: transparent;
}

input:hover {
  color: red;
  text-shadow: 0 0 0px red;
}

.time-picker {
  margin-right: 10%;
  width: 160px;
  transition: 0.6s;
}

li {
  font-size: 17.6px;
  font-weight: 500;
  color: rgb(84, 245, 178) !important;
  transition: 0.6s;
}
li:hover {
  color: red !important;
}

.bi-clock-history {
  color: rgb(19, 214, 198);
  position: relative;
  left: 15%;
  text-shadow: 0 0 0px turquoise;
  pointer-events: none;
}

.char {
  color: turquoise;
  font-weight: 800;
}

.char:hover {
  color: red;
}

@media (max-width: 760px) {
  .time-picker {
    width: 80px;
    margin: 1.6px;
    font-size: 12.8px;
  }
  .timePicker__mainContainer {
    width: 72px;
    margin: 1.6px;
  }
  .display-time {
    position: relative;
    width: 80px !important;
    right: 8px;
  }
  .char {
    position: relative;
    right: 12.8px;
  }
  .bi-clock-history {
    position: relative;
    left: 17.6px;
  }
}
</style>
