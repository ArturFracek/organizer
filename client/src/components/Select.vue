
<template>
  <div class="activitySelect">
    <label for="options">{{ label }}</label>
    <select
      :value="valueIndex"
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
  computed: {
    valueIndex() {
      return this.options.findIndex(option => option[this.optionValueKey] === this.value)
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
