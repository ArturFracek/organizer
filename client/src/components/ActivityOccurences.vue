<template>
  <div class="occurences__mainContainer">
    <div v-for="(occurecne, index) in value" :key="index">
      <button type="button" @click="removeActivityOccurence(index)">X</button>
      {{ occurecne }}
    </div>
    <button type="button" @click="addNewAcctivityOccurence">Add</button>
    <button type="button" @click="updateActivityOccurence(0, 'dayOfWeek', 3)">test</button>
    <!-- <button>Set New Activity</button>
    <div class="occurences__selectContainer">
      <label for="activity-select"></label>
      <select name="Activities" id="activity-select">
        <option value="">Select Activity</option>
      </select>
    </div> -->
  </div>
</template>

<script>
function getNewAcctivityOccurence() {
  return {
    activityId: null,
    dayOfWeek: null,
    startTime: null,
    endTime: null,
  }
}


export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addNewAcctivityOccurence() {
      this.$emit('input', [ ...this.value, getNewAcctivityOccurence() ]);
    },
    removeActivityOccurence(index) {
      this.$emit('input', this.value.filter((o, i) => i !== index));
    },
    updateActivityOccurence(index, key, newFieldValue) {
      const valueCopy = [ ...this.value ];
      const occurence = { ...this.value[index] };
      occurence[key] = newFieldValue;
      valueCopy[index] = occurence;
      this.$emit('input', valueCopy);
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

select {
  color: white;
  font-size: 1.2rem;
}

button {
  font-size: 1.2rem;
  font-weight: 600;
  color: rgb(61, 232, 255);
  width: 12rem;
  background-color: transparent;
  border-left: 2px dotted turquoise;
  border-bottom: 2px dotted turquoise;
  border-right: 2px dotted turquoise;
  border-radius: -5px;
  transition: 0.5s;
}

button:hover {
  color: red;
  border-color: red;
  text-shadow: 0 0 8px red;
  box-shadow: 0 0 10px red;
}
</style>
