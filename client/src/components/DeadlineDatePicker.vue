<template>
  <div class="datePicker__container">
    <Datepicker
      class="datePicker__input"
      :value="value"
      @input="emitDate"
      placeholder="Set Deadline"
    ></Datepicker>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  data() {
    return {
      selectedDate: null,
    };
  },
  props: {
    value: {
      type: [String, Object, Date],
      required: false,
    },
  },
  components: {
    Datepicker,
  },
  methods: {
    emitDate(Date) {
      this.$emit("input", Date);
    },
  },
};
</script>

<style>
.datePicker__container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 192px;
}

input {
  color: aquamarine;
  text-align: center;
  outline: none;
  width: 112px;
  font-size: 17.6px;
  border-style: none;
}

input:hover {
  cursor: pointer;
}
span {
  color: aquamarine;
}

.vdp-datepicker__calendar {
  background: rgb(2, 1, 17, 0.8) !important;
  border: 3px solid turquoise;
}

.vdp-datepicker {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  text-align: center;
}
.day__month_btn {
  font-weight: 600;
  color: aqua;
  text-shadow: 0 0 5px rgb(84, 251, 243);
}
.day__month_btn:hover,
.next:hover,
.prev:hover,
.cell:hover {
  background-color: rgba(58, 204, 248, 0.2) !important;
}

.prev,
.next {
  color: rgb(224, 26, 26) !important;
}

.cell {
  font-weight: 700;
}

.day-header {
  color: aqua;
  text-shadow: 0 0 5px rgb(84, 251, 243);
}

::placeholder {
  color: rgb(27, 251, 240);
}

.datePicker__input {
  width: 104px;
}
.datePicker__input:hover ::placeholder {
  color: red;
  cursor: pointer;
}
@media (max-width: 760px) {
  .vdp-datepicker__calendar {
    position: absolute;
    top: 160px;
    background: rgb(2, 1, 17, 0.8) !important;
    border: 3px solid turquoise;
  }
}
</style>
