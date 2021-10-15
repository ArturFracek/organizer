<template>
  <div class="activitySelect">
    <select
      :value="valueIndex"
      @input="changeOccurence"
      name="options"
      id="options"
      v-bind="$attrs"
      class="select"
      :class="{ activitySelect__is_active: routines.is_active }"
    >
      <option v-for="(option, index) in options" :key="index" :value="index">
        {{ optionLabelKey ? option[optionLabelKey] : option }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from'vuex';
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
      type: String,
      required: false,
    },
  },
  computed: {
    valueIndex() {
      return this.options.findIndex(
        (option) => option[this.optionValueKey] === this.value
      );
    },
     ...mapGetters({
      routines: "routines/routines",
    }),
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

<style>
select {
  width: 10rem;
  margin: 0.5rem 1rem;
  color: rgb(84, 245, 178);
  text-shadow: 2px 0px 3px rgb(0, 255, 157);
  border-style: dotted;
  border-width: 2px;
  border-image: linear-gradient(to top, rgb(73, 251, 183), rgb(248, 169, 169))
    1;
  border-image-repeat: stretch;
  align-items: center;
  box-shadow: 0px 0px 10px rgb(121, 244, 255, 0.4);
}

activitySelect__is_active{
  border-width: 4px;
}

option {
  font-size: 1rem;
  font-weight: 600;
  text-shadow: 0 0 10px rgb(0, 255, 157);
  background: rgb(2, 16, 17);
  display: flex;
  justify-content: center;
  margin-left: 0.5rem;
  text-align: center;
  border-bottom: 1px dotted red;
}

select:hover {
  color: rgb(228, 89, 70);
  text-shadow: 0 0 3px red;
}

select:focus {
  color: turquoise;
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
</style>
