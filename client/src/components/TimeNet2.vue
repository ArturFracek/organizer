<template>
  <div class="net__container">
    <table class="net__table">
      <thead>
        <tr>
          <th class="net__emptyCell"><div class="net__emptyDiv"></div></th>
          <th 
            v-for="(day, dayIndex) in weekdays"
            :key="dayIndex"
            :class="[
              'net__cell',
              'net__dayHeader',
              `net__dayHeader-${dayIndex}`,
            ]"
          >
            {{ day }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(hour, hourIndex) in hours"
          :key="hourIndex"
          :class="[ 'net__hourRow', `net__hourRow-${hourIndex}`]"
        >
          <td class="net__hour">
            {{ formatTime(hour) }}
          </td>
          <td
            v-for="(day, dayIndex) in weekdays"
            :key="dayIndex"
            :class="[ 'net__cell', 'net__hourInDay', `net__day-${dayIndex}`, `net__day-${dayIndex}-${hour}` ]"
          >
            {{ getActivityOccurance(dayIndex, hour) }}
          </td>
        </tr>
      </tbody>
    </table>
      <button type="button" @click="putActivity">-----</button>
  </div>
</template>

<script>
import moment from "moment";

const hours = [ 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2 ]

const activitiesOccurences = [
  {
    activityId: 1,
    dayOfWeek: 2,
    startTime: 13,
    endTime: 16,
  },
  {
    activityId: 1,
    dayOfWeek: 4,
    startTime: 8,
    endTime: 9,
  },
  {
    activityId: 2,
    dayOfWeek: 6,
    startTime: 10,
    endTime: 11,
  },
]

const activities = [
  {
    id: 1,
    name: "Bieganie",
    priority: 6,
    description: "Jakis opis",
  },
  {
    id: 2,
    name: "Jazda na rowerze",
    priority: 7,
    description: "Inny opis"
  },
  {
    id: 3,
    name: "gra na gitarze",
    priority: 5,
    description: "Super opis",
  }


]

export default {
  computed: {
    weekdays: () => moment.weekdays(),
    hours: () => hours,
  },
  methods: {
    formatTime(timeNumber) {
      return moment(timeNumber, 'H').format('h a')
    },
    getActivityOccurance(dayIndex, hour) {
      const act = activitiesOccurences.find((a) => a.startTime <= hour && a.endTime > hour && a.dayOfWeek === dayIndex)
      return act ? act.activityId : ''
    },


  },
};
</script>

<style>
.net__table {
  width: 100%;
  table-layout: fixed;
  border-spacing: 0px;
}

.net__emptyCell {
  width: 3rem;
}

.net__dayHeader {
  color: rgb(255, 255, 255);
  text-shadow: 0 0 1rem rgb(219, 97, 97);
  justify-content: center;
  align-items: center;
  font-weight: bold;
  backdrop-filter: blur(10px) drop-shadow(4px 4px 20px rgb(10, 194, 207));
  border: 0.1px solid turquoise;
  border-radius: 0.4rem;
}

.net__hour {
  color: white;
  border-bottom: 1px dashed turquoise;
  white-space: nowrap;
  min-width: 20px;
}

.net__hourInDay {
  text-align: center;
  border: 0.1px solid turquoise;
  border-radius: 0.4rem;
  color: blueviolet;
  font-size: 16px;
  font-weight: bold;
}

.net__cell {
  padding: 0.3rem;
  margin: 0;
}

button {
  height: 2rem;
  width: 6rem;
  background: red;
}

</style>
