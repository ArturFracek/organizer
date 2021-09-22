<template>
  <div class="slider__container">
    <input
      :value="value"
      type="range"
      class="slider"
      min="1"
      max="10"
      @input="input"
      :class="{ 'slider__highPriority': value > 6 }"
    />
    <div class="rangeValue" :class="{ 'rangeValue-warning': value > 6 }">
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
  transform-origin: 0 0;
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
    filter: drop-shadow(0 0 10px rgb(82, 226, 251))
  }
}

.slider__container .slider {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 80%;
  height: 18px;
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
    #ff5050 0%,
    #ffffff 50%,
    #44d8e2 100%
  );
  box-shadow: 0 0 10px rgb(255, 255, 255);
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
  background: none;
  cursor: pointer;
  -webkit-transition: all 0.9 ease-in;
  transition: all 0.3s ease-in;
  box-shadow: 0 0 0.2rem white;
  backdrop-filter: blur(9px) hue-rotate(180deg);
}

.slider__container .slider::-moz-range-thumb {
  -moz-appearance: none;
  appearance: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #686868;
  cursor: pointer;
  -moz-transition: all 0.3 ease-in;
  transition: all 0.3s ease-in;
  backdrop-filter: blur(9px) hue-rotate(180deg);
}

.slider__container .slider::webkit-slider-thumb:hover {
  box-shadow: 6px 6px 20px 20px rgb(0, 0, 0);
}

.rangeValue {
  margin: 0.5rem;
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
  font-size: 1.8rem;
  animation: shake 0.3s;
  color: #44d8e2;
  position: relative;
  text-shadow: 0 0 10px turquoise;
}

@keyframes shake {
  0% {
    transform: translateX(-7px);
  }
  10% {
    transform: translateY(-7px);
    font-size: 1.4rem;
  }
  25% {
    transform: translateX(7px);
    font-size: 1.5rem;
  }
  40% {
    transform: translateY(7px);
    font-size: 1.6rem;
  }
  50% {
    transform: translateX(-7px);
    font-size: 1.7rem;
  }
  70% {
    transform: translateY(-7px);
    font-size: 1.8rem;
  }
  90% {
    transform: translateX(5px);
    font-size: 1.9rem;
  }
  100% {
    transform: translateY(5px);
    font-size: 2rem;
  }
}
</style>
