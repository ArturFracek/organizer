<template>
  <div class="occurences__mainContainer">
    <button
      class="occurences__button occurences_button--addOccurence"
      type="button"
      @click="addNewAcctivityOccurence"
    >
      Add
    </button>
    <div
      class="occurences__occurence"
      v-for="(occurence, index) in value"
      :key="index"
    >
      <button
        class="occurences__button occurences__button--deleteOccurence"
        type="button"
        @click="removeActivityOccurence(index)"
      >
        X
      </button>
      <Select
        label="Choose a Activity"
        :options="activities"
        optionLabelKey="title"
        optionValueKey="_id"
        :value="occurence.activityId"
        @input="updateActivityOccurence(index, 'activityId', $event)"
      />
    </div>
  </div>
</template>

<script>
import Select from "./Select.vue";
import { mapGetters } from "vuex";
import moment, { weekdays } from "moment";
import { hours } from "../constants/index";

function getNewAcctivityOccurence() {
  return {
    activityId: null,
    dayOfWeek: null,
    startTime: null,
    endTime: null,
  };
}
moment.updateLocale("en", {
  week: {
    dow: 1,
  },
});

export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Select,
  },
  computed: {
    weekdays: () => [...moment.weekdays(true).keys()],
    hours: () => hours,
    ...mapGetters({
      activities: "activities/activities",
    }),
  },
  methods: {
    addNewAcctivityOccurence() {
      this.$emit("input", [...this.value, getNewAcctivityOccurence()]);
    },
    removeActivityOccurence(index) {
      this.$emit(
        "input",
        this.value.filter((o, i) => i !== index)
      );
    },
    updateActivityOccurence(index, key, newFieldValue) {
      const valueCopy = [...this.value];
      const occurence = { ...this.value[index] };
      occurence[key] = newFieldValue;
      valueCopy[index] = occurence;
      this.$emit("input", valueCopy);
    },
  },
};
</script>

<style scoped>
.occurences__mainContainer {
  display: flex;
  flex-flow: column;
  align-items: center;
  color: white;
}

.occurences__selectContainer {
  align-self: flex-start;
  padding: 0.2rem 0.7rem;
}

.occurences__occurence {
  display: flex;
}

select {
  color: white;
  font-size: 1.2rem;
}


button:hover {
  color: red;
  border-color: red;
  text-shadow: 0 0 8px red;
  box-shadow: 0 0 10px red;
}
</style>
