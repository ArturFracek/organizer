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
      value: "10"
    }
  },
  methods: {
    warning:function(){
      if(this.value > 6) {
        return {
          color: "#e74c3c",
          animation:"anim 0.9s ease-in 1 alternate"
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
  opacity: 0.7;
  transition: opacity 0.2s ease-in;
  -webkit-transition: opacity 0.3s ease-in;
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
  background-color: #e74c3c;
  cursor: pointer;
  -webkit-transition: all 0.3 ease-in;
  transition: all 0.3s ease-in;
  border: 2px solid #b61111;
}

.container .Slider::-moz-range-thumb {
  -moz-appearance: none;
  appearance: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #e74c3c;
  cursor: pointer;
  -moz-transition: all 0.3 ease-in;
  transition: all 0.3s ease-in;
  border: 2px solid #d3d3d33d;
}

.container .Slider::webkit-slider-thumb:hover{
  box-shadow: 6px 6px 20px 20px rgba(0, 0, 0, 0.4);
}

.container .rangeValue {
  margin: 10px;
  height: 40px;
  width: 40px;
  border: 2px solid rgb(0, 0, 0, 1);
  background-color: transparent;
  background: none;
  background-size: 0;
  color: rgb(0, 0, 0);
  font-weight: 600;
  text-align: center;
  line-height: 38px;
  font-size: 22px;
  clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
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