<template>
  <div data-app class="datePicker__container">
    <v-menu
      v-model="dateMenu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          :label="label"
          prepend-inner-icon="mdi-calendar"
          :value="dateValue"
          v-on="on"
          @focus="focusDate"
          @blur="blurDate"
          class="datePicker__textField"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="dateValue"
        @input="dateMenu = false"
      ></v-date-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dateMenu: false,
      dateValue: null,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    focusDate() {
      setTimeout(() => {
        if (!this.dateMenu) {
          this.dateMenu = true;
        }
      }, 200);
    },
    blurDate() {
      setTimeout(() => {
        if (this.dateMenu) {
          this.dateMenu = false;
        }
      }, 200);
    },
  },
};
</script>

<style scoped>
input {
  color: white;
}
</style>
