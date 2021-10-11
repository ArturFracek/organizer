<template>
  <div class="activitySelect">
    <label for="options">{{ label }}</label>
    <select name="options" id="options" v-bind="$attrs">
      <option v-for="(option, index) in options" :key="index">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    options: {
      type: Array,
      required: true,
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
    ...mapGetters({
      activities: "activities/activities",
    }),
  },
};
</script>

<style>
select {
  color: white;
  background-color: darkblue;
}
</style>
