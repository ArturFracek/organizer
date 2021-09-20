<template>
  <div class="container">
    <input
      :value="value"
      type="range"
      class="Slider"
      min="1"
      max="10"
      @input="input"
    />
    <div  class="rangeValue" :class="{ 'rangeValue-warning': value > 6 }">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    value: {
      type: Number,
      required: false,
      default: 5,
    }
  },
  methods: {
    input(el) {
      this.$emit("input", parseInt(el.target.value))
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  transform: rorate(-90deg) translate(-50%, -50%);
  transform-origin: 0 0;
}

.container .Slider {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 80%;
  height: 18px;
  background-color: #ffffff;
  border-radius: 20px;
  outline: none;
  opacity: 0.9;
  transition: opacity 0.2s ease-in;
  -webkit-transition: opacity 0.3s ease-in;
  transform: rorate(-90deg);
  transform-origin: 0 0;
  background-image: linear-gradient(90deg, #ff1212 0%, #f56262 10%, #44d8e2 90%);
  box-shadow: 0 0 20px white;
}

.container .Slider:hover {
  opacity: 1;
}

.container .Slider::-webkit-slider-thumb {
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

.container .Slider::-moz-range-thumb {
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

.container .Slider::webkit-slider-thumb:hover {
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
  animation: shake 0.2s;
  color: #44d8e2;
  position: relative;
  text-shadow: 0 0 10px turquoise;
}


@keyframes shake {
  0% {
    transform: translateX(-5px);
  }
  25% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  70% {

   transform: translateY(5px);
  }
  90% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateY(-5px);
  }
}
</style>
