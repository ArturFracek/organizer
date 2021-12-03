<template>
  <div class="occurences__mainContainer">
    <button
      class="occurences__button occurences__button--addOccurence"
      type="button"
      @click="addNewAcctivityOccurence"
      data-test="routineOccurencActivityAdd"
    >
      Add Activity
    </button>
    <div
      class="occurences__generalLabels"
      :class="{ occurences__showLabels: value[0] }"
    >
      <div class="occurences__label occurences__label--activityLabel">
        Choose Activity
      </div>
      <div class="occurences__label occurences__label--dayOfWeekLabel">
        Day of Week
      </div>
      <div class="occurences__label occurences__label--Time">Start Time</div>
      <div class="occurences__label occurences__label--Time">End Time</div>
    </div>
    <div class="occurences__occurencesBox">
      <div
        :class="{ occurences__showOccurences: value[0] }"
        class="occurences__occurence"
        v-for="(occurence, index) in value"
        :key="index"
      >
        <Select
          :options="activities"
          optionLabelKey="title"
          optionValueKey="_id"
          :value="occurence.activityId"
          @input="updateActivityOccurence(index, 'activityId', $event)"
          data-test="activityNameOccurence"
        />
        <Select
          :options="weekdays"
          optionLabelKey="title"
          optionValueKey="dayNumber"
          :value="occurence.dayOfWeek"
          @input="updateActivityOccurence(index, 'dayOfWeek', $event)"
          data-test="activityDayOccurence"
        />
        <TimePicker
          :value="occurence.startTime"
          @input="updateActivityOccurence(index, 'startTime', $event)"
          default="08:00"
          data-test="timerPickerStart"
        />
        <TimePicker
          :value="occurence.endTime"
          @input="updateActivityOccurence(index, 'endTime', $event)"
          data-test="timerPickerEnd"
        />
        <button
          @click="removeActivityOccurence(index)"
          class="occurences__button occurences__button--deleteOccurence"
          type="button"
        >
          X
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Select from "./Select.vue";
import { mapGetters } from "vuex";
import moment, { weekdays } from "moment";
import TimePicker from "./TimePickerField.vue";
import activities from "../store/modules/activities";

function getNewActivityOccurence() {
  return {
    activityId: null,
    dayOfWeek: 0,
    startTime: "08:00",
    endTime: "09:00",
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
        return { title: day, dayNumber: index };
      }),
    ],
    ...mapGetters({
      activities: "activities/activities",
    }),
  },
  methods: {
    addNewAcctivityOccurence() {
      this.$emit("input", [...this.value, getNewActivityOccurence()]);
      this.showLabel = true;
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
  overflow-y: hidden;
  height: 45vh;
  overflow-x: hidden;
}

.occurences__selectContainer {
  align-self: flex-start;
  padding: 3.2px 11.2px;
}

.occurences__occurencesBox {
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
}

.occurences__occurence {
  display: flex;
  width: auto;
  justify-content: center;
  opacity: 0;
  transition: 1s ease-in;
}
.occurences__showOccurences {
  position: relative;
  opacity: 1;
  left: 1%;
}
select {
  color: white;
  font-size: 19.2px;
  transition: 1s;
}

.occurences__button {
  color: black;
}

.occurences__generalLabels {
  position: relative;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  width: 100%;
  opacity: 0;
  transition: 0.6s;
  left: 52.8px;
}
.occurences__showLabels {
  opacity: 1;
}

.occurences__label {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 17.6px;
  white-space: nowrap;
  width: 160px;
  margin: 0 16px;
  color: rgb(255, 146, 112);
  text-shadow: 0 0 4px rgb(27, 8, 134);
  left: -46.4px;
  letter-spacing: 1px;
  font-weight: 500;
  transition: 1s ease-in;
}

.occurences__button {
  display: flex;
  align-items: center;
  background: transparent;
  font-size: 20.8px;
  color: aquamarine;
}

.occurences__button:hover {
  color: rgb(246, 0, 0);
  text-shadow: 0 0 3px rgb(27, 8, 134);
}

.occurences__button--addOccurence {
  justify-content: center;
  align-items: center;
  border-bottom: 2px dotted turquoise;
  border-left: 2px dotted turquoise;
  border-right: 2px dotted turquoise;
  white-space: nowrap;
  width: 160px;
  transition: 0.4s;
  padding-bottom: 3.2px;
}

.occurences__button--deleteOccurence {
  position: relative;
  height: 100%;
  display: flex;
  top: -1.6px;
  width: 16px;
}

@media (max-width: 760px) {
  .occurences__mainContainer {
    position: relative;
    height: 384px;
    top: 16px;
    box-sizing: border-box;
  }
  .occurences__label {
    font-size: 9.6px;
    width: 80px;
    margin: 1.6px;
    left: -56px;
    font-weight: bold;
  }
}
</style>
