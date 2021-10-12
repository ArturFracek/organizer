<template>
  <div class="activitySelect">
    <label for="options">{{ label }}</label>
    <select
      :value="value"
      @input="changeOccurence"
      name="options"
      id="options"
      v-bind="$attrs"
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
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: false,
    },
  },
  methods: {
    changeOccurence(element) {
      const index = element.target.value;
      const obj = this.options[index]
      this.$emit("input", obj[this.optionValueKey]);
    },
  },
};
</script>

<style>
select {
  color: white;
  background-color: darkblue;
}
</style>
