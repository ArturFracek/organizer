<template>
  <div class="occurences__mainContainer">
    <button
      class="occurences__button occurences__button--addOccurence"
      type="button"
      @click="addNewAcctivityOccurence"
    >
      Add
    </button>
    <div class="occurences__generalLabels">
      <div class="occurences__label occurences__label--activityLabel">
        Choose Activity
      </div>
      <div class="occurences__label occurences__label--dayOfWeekLabel">
        Day of Week
      </div>
      <div class="occurences__label occurences__label--Time">Time</div>
    </div>
    <div
      class="occurences__occurence"
      v-for="(occurence, index) in value"
      :key="index"
    >
      <Select
        label="Choose a Activity"
        :options="activities"
        optionLabelKey="title"
        optionValueKey="_id"
        :value="occurence.activityId"
        @input="updateActivityOccurence(index, 'activityId', $event)"
      />
      <Select
        label="Day of Week"
        :options="weekdays"
        optionLabelKey="title"
        optionValueKey="dayNumber"
        :value="occurence.dayOfWeek"
        @input="updateActivityOccurence(index, 'dayOfWeek', $event)"
      />
      <TimePicker />
      <button
        class="occurences__button occurences__button--deleteOccurence"
        type="button"
        @click="removeActivityOccurence(index)"
      >
        X
      </button>
    </div>
  </div>
</template>

<script>
import Select from "./Select.vue";
import { mapGetters } from "vuex";
import moment, { weekdays } from "moment";
import TimePicker from './TImePicker.vue'

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
    TimePicker,
  },
  computed: {
    weekdays: () => [
      ...moment.weekdays(true).map((day, index) => {
        return { title: day, dayNumber: index + 1 };
      }),
    ],
    ...mapGetters({
      activities: "activities/activities",
    }),
  },
  methods: {
    addNewAcctivityOccurence() {
      this.$emit("input", [...this.value, getNewAcctivityOccurence()]);
      console.log(weekdays);
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
  width: 100%;
  justify-content: center;
}

select {
  color: white;
  font-size: 1.2rem;
}

.occurences__button {
  color: black;
}

.vue__time-picker > .display-time {
  color: rgb(255, 20, 20) !important;
  border: none !important;
}

.display-time {
  color: white !important;
}

.occurences__generalLabels {
  display: flex;
  justify-content: center;
  width: 100%;
}

.occurences__label {
  width: 10rem;
  margin-right: 1rem;
}
.occurences__button {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  font-size: 1.4rem;
  color: aquamarine;
}

.occurences__button:hover {
  color: red;
}

.ccurences__button--addOccurence {
  border: 2px dotted rgb(96, 236, 255);
}

.occurences__button--deleteOccurence {
  position: relative;
  height: 100%;
  display: flex;
  top: 0.5rem;
}
</style>
