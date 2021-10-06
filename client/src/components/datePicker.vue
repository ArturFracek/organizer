<template>
  <v-menu
    ref="menu"
    v-model="toggleBeginDate"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="searchData.beginDate"
        label="Begin Date"
        prepend-icon="event"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="searchData.beginDate"
      no-title
      scrollable
      :max="new Date().toISOString()"
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="toggleBeginDate = false"
        >Cancel</v-btn
      >
      <v-btn
        text
        color="primary"
        @click="
          $refs.menu.save(searchData.beginDate);
          toggleBeginDate = false;
        "
        >OK</v-btn
      >
    </v-date-picker>
  </v-menu>

  <script></script>
</template>
