<template>
  <div class="datePicker">
    <menu :value="selectedDate">
      {{ selectedDate }}
    <DatePicker is-dark v-model="selectedDate"></DatePicker>
    </menu>
  </div>
</template>

<script>
import DatePicker from "v-calendar/lib/components/date-picker.umd";
export default {
  data() {
    return {
      selectedDate: null,
    };
  },
  components: {
    DatePicker,
  },
};
</script>

<style>
.datePicker {
  width: 2rem;
  height: 1rem;
  background: black;
}

</style>
