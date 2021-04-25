<template>
<div class="container">
  <input @change="warning()" v-model="value" type="range" class="Slider" min="0" max="10">
    <div :style="warning()" class="rangeValue">{{ value }}</div>
</div>
</template>

<script>

export default {
  name: "Slider",
  data() {
    return {
      value: "5"
    }
  },
  methods: {
    warning:function(){
      if(this.value > 6) {
        return {
          color: "#e74c3c",
          animation: "anim 0.9s ease-in 1 alternate",
        }
      }
    }
  }
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
  background-color: #000000;
  border-radius: 20px;
  outline: none;
  opacity: 0.8;
  transition: opacity 0.2s ease-in;
  -webkit-transition: opacity 0.3s ease-in;
  transform: rorate(-90deg);
  transform-origin: 0 0;
  background-image: linear-gradient(90deg, #fbff22 0%, #ff2525 100%);
}

.container .Slider:hover{
  opacity: 1;
}

.container .Slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #616060;
  cursor: pointer;
  -webkit-transition: all 0.3 ease-in;
  transition: all 0.3s ease-in;
  border: 2px solid #000000;
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
  border: 2px solid #d3d3d33d;
}

.container .Slider::webkit-slider-thumb:hover{
  box-shadow: 6px 6px 20px 20px rgb(0, 0, 0);
}

.rangeValue {
  height: 40px;
  width: 40px;
  color: rgb(0, 0, 0);
  font-weight: 600;
  text-align: center;
  line-height: 38px;
  font-size: 22px;
  border: 3px solid rgb(0, 0, 0, 1);
}

@keyframes anim {
  0% {
    right: -20px;
  }
  25% {
    right: -10px;
  }
  50%{
    right: -30px;
  }
  70%{
    right: -10px;
  }
  100%{
    right: -20px;
  }
}
</style>