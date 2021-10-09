<template>
  <div class="occurences__mainContainer">
    <button>Set New Activity</button>
    <div class="occurences__selectContainer">
      <label for="activity-select"></label>
      <select name="Activities" id="activity-select">
        <option value="">Select Activity</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activitiesOccurences: [],
      activityOccurence: {
        startTime: Number,
        endTime: Number,
        dayOfWeek: Number,
      }
    }
  }
}
</script>

<style scoped>
.occurences__mainContainer{
  display: flex;
  flex-flow: column;
  align-items: center;
}

.occurences__selectContainer{
  align-self: flex-start;
  padding: 0.2rem 0.7rem;
}

select{
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