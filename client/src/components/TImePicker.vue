<template>
  <div class="timePicker__mainContainer">
    <VuePicker
      format="HH:mm"
      :minute-interval="5"
      :hour-range="[
        0,
        1,
        2,
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
      ]"
      :blur-delay="450"
      close-on-complete
      v-model="yourTimeValue"
      hide-disabled-hours
    >
    </VuePicker>
  </div>
</template>

<script scoped>
import VuePicker from "vue2-timepicker/src/vue-timepicker.vue";
import "vue2-timepicker/dist/VueTimepicker.css";

export default {
  data() {
    return {
      data: {
        HH: "08",
        H: "8",
        hh: "08",
        a: "am",
        A: "AM",
        h: "8",
        kk: "08",
        k: "8",
        m: "0",
        mm: "00",
        s: "",
        ss: "",
      },
      displayTime: "08:00",
    };
  },
  components: {
    VuePicker,
  },
};
</script>

<style >
.timePicker__mainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 2.2rem;
  margin: 0.5rem 1rem;
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 1px rgb(0, 255, 157);
  border-style: dotted;
  border-width: 2px;
  border-image: linear-gradient(to top, rgb(73, 251, 183), rgb(248, 169, 169)) 1;
  border-image-repeat: stretch;
  align-items: center;
  box-shadow: 0px 5px 10px rgb(121, 244, 255, 0.3);
}

ul {
  background: rgb(2, 12, 7);
}

input {
  color: rgb(84, 245, 178);
  text-shadow: 0px 0px 2px rgb(0, 255, 157);
  text-align: center;
}

.time-picker {
  border: none;
}

li {
  font-size: 1rem;
}

</style>
