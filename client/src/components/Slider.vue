<template>
  <div class="slider__container">
    <div
      data-test="sliderPriorityDiv"
      :value="value"
      class="slider__priority"
      :class="{
        'slider__priority--LowPriority': value < 6,
        'slider__priority--HighPriority': value > 5,
      }"
    >
      Priority
    </div>
    <input
      data-test="sliderPrioritySlider"
      :value="value"
      type="range"
      class="slider"
      min="-1"
      max="10"
      @input="input"
      :class="{ slider__highPriority: value > 6 }"
    />
    <div
      data-test="sliderPriorityValueNumber"
      class="rangeValue"
      :class="{ 'rangeValue-warning': value > 6 }"
    >
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: false,
      default: 5,
    },
  },
  methods: {
    input(el) {
      this.$emit("input", parseInt(el.target.value));
    },
  },
};
</script>

<style scoped>
.slider__container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  transform: rorate(-90deg) translate(-50%, -50%);
}

.slider__highPriority {
  filter: drop-shadow(0 0 10px rgb(82, 226, 251));
  animation: highPriorityShadow 1s;
}

@keyframes highPriorityShadow {
  0% {
    filter: drop-shadow(0 0 0 rgb(82, 226, 251));
  }
  100% {
    filter: drop-shadow(0 0 10px rgb(82, 226, 251));
  }
}

.slider__priority {
  position: absolute;
  transform: translateY(0%);
  transform: translateX(5%);
  font-size: 19.2px;
  font-weight: 800;
  color: #000000;
  z-index: 3;
  opacity: 0.6;
  letter-spacing: 2px;
  pointer-events: none;
  text-shadow: 0 2.5px 3px rgb(29, 93, 211);
  font-family: "Hahmlet", serif;
  transition: 0.5s ease;
}
.slider__priority--LowPriority {
  transition: 0.2s ease-in;
  text-shadow: 3px 0px 2px rgb(29, 50, 240);
}
.slider__priority--HighPriority {
  transition: 0.2s ease-in;
  text-shadow: -3px 0px 2px rgb(29, 50, 240);
}

.slider__container .slider {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 85%;
  height: 23px;
  background-color: #ffffff;
  border-radius: 7px;
  outline: none;
  opacity: 0.9;
  transition: opacity 0.2s ease-in;
  -webkit-transition: opacity 0.3s ease-in;
  transform: rorate(-90deg);
  transform-origin: 0 0;
  background-image: linear-gradient(
    90deg,
    hsl(0, 0%, 100%) 0%,
    #63fbf4 50%,
    hsl(160, 100%, 53%) 100%
  );
  box-shadow: 0 0 10px rgb(255, 255, 255);
  transition: 0.4s ease;
}

.slider__container .slider:hover {
  opacity: 1;
}

.slider__container .slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #16339581;
  border-color: rgba(7, 38, 131, 0.966);
  cursor: pointer;
  -webkit-transition: all 0.9s ease-in;
  transition: all 0.7s ease-in;
}

.slider__container .slider::-moz-range-thumb {
  -moz-appearance: none;
  appearance: none;
  height: 30px;
  width: 30px;
  border-color: rgba(117, 248, 220, 0.829);
  border-radius: 50%;
  background-color: #0b099096;
  cursor: pointer;
  -moz-transition: all 0.8s ease-in;
  transition: all 0.7s ease-in;
}

.slider__container .slider::webkit-slider-thumb:hover {
  box-shadow: 6px 6px 20px 20px rgb(255, 15, 15);
}

.rangeValue {
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  text-align: center;
  line-height: 38px;
  font-size: 22px;
  text-shadow: 0 0 5px rgb(255, 255, 255);
}

.rangeValue-warning {
  font-size: 28.8px;
  animation: shake 0.3s;
  color: hsl(160, 100%, 53%);
  position: relative;
  text-shadow: 0 0 10px turquoise;
}

@keyframes shake {
  0% {
    transform: translateX(-7px);
  }
  10% {
    transform: translateY(-7px);
    font-size: 22.4px;
  }
  25% {
    transform: translateX(7px);
    font-size: 24px;
  }
  40% {
    transform: translateY(7px);
    font-size: 25.6px;
  }
  50% {
    transform: translateX(-7px);
    font-size: 27.2px;
  }
  70% {
    transform: translateY(-7px);
    font-size: 28.8px;
  }
  90% {
    transform: translateX(5px);
    font-size: 30.4px;
  }
  100% {
    transform: translateY(5px);
    font-size: 32px;
  }
}

@media (max-width: 765px) {
  .slider__container .slider {
    height: 18px;
    width: 100%;
    top: 0;
  }
  .slider__container .slider::-webkit-slider-thumb {
  height: 25px;
  width: 25px;
}
.slider__priority {
right: 42%;
}
}
</style>
