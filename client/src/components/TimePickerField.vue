<template>
  <div class="timePicker__mainContainer">
    <i class="bi bi-clock-history"></i>
    <VuePicker
    @input="emitStartingTime"
      format="HH:mm"
      :minute-interval="5"
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
      close-on-complete
      v-model="displayTime"
      hide-disabled-hours
      advanced-keyboard
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
        timeRange: [
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
        ],
         displayTime: "08:00",
    };
  },
  
  components: {
    VuePicker,
  },
  computed: {

  },
  methods: {
    emitStartingTime(element) {
      this.$emit("input", this.displayTime)
      console.log(this.displayTime)
    }
  }
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
  background: rgb(2, 3, 27);
}

input {
  color: rgb(84, 245, 178);
  text-shadow: 0px 0px 2px rgb(0, 255, 157);
  text-align: center;
}

.time-picker {
  margin-right: 10%;
}

li {
  font-size: 1rem;
}

.bi-clock-history {
  color: rgb(19, 214, 198);
  position: relative;
  left: 15%;
  text-shadow: 0 0 0px turquoise;
  pointer-events: none;
}

</style>
