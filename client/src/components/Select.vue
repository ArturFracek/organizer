<template>
  <div class="activitySelect">
    <select
      :value="valueIndex"
      @input="changeOccurence"
      name="options"
      id="options"
      v-bind="$attrs"
      class="select"
      @click="changeOccurence"
      data-test="customSelectButton"
    >
      <option v-for="(option, index) in options" :key="index" :value="index">
        {{ optionLabelKey ? option[optionLabelKey] : option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    optionLabelKey: {
      type: String,
      required: false,
    },
    optionValueKey: {
      type: String,
      required: false,
    },
    value: {
      type: [String, Number],
      required: false,
    },
  },
  computed: {
    valueIndex() {
      return this.options.findIndex(
        (option) => option[this.optionValueKey] === this.value
      );
    },
  },
  methods: {
    changeOccurence(element) {
      const index = element.target.value;
      const obj = this.options[index];
      this.$emit("input", obj[this.optionValueKey]);
    },
  },
};
</script>

<style scoped>
select {
  height: 35.2px;
  width: 160px;
  margin: 3.2px 16px;
  color: rgb(84, 245, 178);
  text-shadow: 0px 0px 3px rgb(0, 255, 157);
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(to top, rgb(73, 251, 183), rgb(248, 169, 169)) 1;
  border-image-repeat: stretch;
  align-items: center;
  box-shadow: 0px 5px 10px rgb(121, 244, 255, 0.3);
  transition: 0.6s;
  text-align: center;
  background-color: transparent;
}

option {
  font-size: 16px;
  font-weight: 600;
  text-shadow: 0 0 3px rgb(0, 255, 157);
  background: rgb(2, 16, 17);
  text-align: center;
}

select {
  
}

select:hover {
  color: rgb(228, 89, 70);
  text-shadow: 0 0 3px red;
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(to top, rgb(248, 169, 169)), rgb(73, 251, 183) 1;
  border-image-repeat: stretch;
  cursor: pointer;
}

select:focus {
  color: rgb(64, 224, 149);
  text-shadow: 1px 0px 4px rgb(0, 255, 157);
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(to top, rgb(164, 253, 249), rgb(248, 120, 120))
    1;
  border-image-repeat: stretch;
  background: transparent;
}

.Select-menu-outer {
  background-color: transparent;
  z-index: 1;
}

@media (max-width: 760px) {
  .select {
    width: 72px;
    margin: 1.6px;
    text-shadow: 0px 0px 1px rgb(0, 255, 157);
    font-size: 12.8px;
  }
}
</style>
