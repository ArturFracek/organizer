<template>
  <div class="net__container">
    <div
      class="net__activityTimeDisplay"
      :class="{ net__activityTimeDisplayActive: toggled === true }"
      data-test="netTimeDisplay"
    >
      {{ this.toggled !== true ? "" : activityTitle }}
      {{
        hourTimeFormat(timerDiff) !== "00:00:00"
          ? hourTimeFormat(timerDiff)
          : "Select Activity Below"
      }}
    </div>
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
        <tr v-for="(hour, hourIndex) in hours" :key="hourIndex">
          <td class="net__hour">
            {{ formatTime(hour) }}

            <tr
              class="net__minutes"
              v-for="(minuteDisplay, minuteIndex) in minutesDisplay"
              :key="minuteIndex"
            >
              {{
                minuteDisplay.toString()
              }}
            </tr>
          </td>
          <td
            v-for="(day, dayIndex) in weekdays"
            :key="dayIndex"
            :class="[
              'net__cell',
              'net__hourInDay',
              `net__day-${dayIndex}`,
              `net__day-${dayIndex}-${hour}`,
            ]"
          >
            <div
              v-for="(tenMinutes, minutesIndex) in minutes"
              :key="minutesIndex"
              :class="{
                net__minutesRow: true,
                'net__minutesRow--exist': getActivityOccurance(
                  dayIndex,
                  hour,
                  tenMinutes
                ),
              }"
              :data-test="[`${day}-${hour}-${tenMinutes}`]"
            >
              <button
                class="net__timerButton"
                @click="
                  timerOnOff(getActivityOccurance(dayIndex, hour, tenMinutes))
                "
              >
                {{
                  getActivityName(
                    getActivityOccurance(dayIndex, hour, tenMinutes)
                  )
                }}
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import moment from "moment";
import { hours } from "../constants/index";
import { minutes } from "../constants/index";
import { minutesDisplay } from "../constants/index";

moment.updateLocale("en", {
  week: {
    dow: 1,
  },
});

export default {
  data() {
    return {
      toggled: false,
    };
  },
  computed: {
    weekdays: () => moment.weekdays(true),
    hours: () => hours,
    minutes: () => minutes,
    minutesDisplay: () => minutesDisplay,
    ...mapGetters({
      activities: "activities/activities",
      routine: "routines/activeRoutine",
      activityTitle: "timer/activityTitle",
      timerDiff: "timer/timerDiff",
    }),
  },
  methods: {
    ...mapMutations({
      START_TIMER: "timer/START_TIMER",
    }),
    ...mapActions({
      stopTimerAndSave: "timer/stopTimerAndSave",
    }),
    formatTime(timeNumber) {
      return moment(timeNumber, "H").format("H a");
    },
    getActivityOccurance(dayIndex, hour, tenMinutes) {
      if (!this.routine) return "";
      const occurence = this.routine.activitiesOccurences.find(
        (a) =>
          moment(a.startTime, "HH:mm") <=
            moment({ hour: hour, minute: tenMinutes }) &&
          moment(a.endTime, "HH:mm") >
            moment({ hour: hour, minute: tenMinutes }) &&
          a.dayOfWeek === dayIndex
      );
      return occurence ? occurence.activityId : "";
    },
    getActivityName(activityId) {
      const activity = this.activities.find((a) => a._id === activityId);
      return activity ? activity.title : "";
    },
    hourTimeFormat(seconds) {
      const diff = moment.duration(seconds, "seconds");
      const diffHours = Math.floor(diff.asHours());
      const diffHoursFormatted = diffHours < 10 ? `0${diffHours}` : diffHours;
      const mmss = moment.utc(diff.as("milliseconds")).format("mm:ss");
      return `${diffHoursFormatted}:${mmss}`;
    },
    timerOnOff(activityId) {
      if (this.toggled === false) {
        this.toggled = true;
        this.START_TIMER({
          activityId,
          name: this.getActivityName(activityId),
        });
      } else {
        this.toggled = false;
        this.stopTimerAndSave();
      }
    },
  },
};
</script>

<style>
.net__container {
  transition: 1s;
}
.net__table {
  width: 100%;
  table-layout: fixed;
  border-spacing: 0px;
}

.net__emptyCell {
  width: 48px;
}

.net__dayHeader {
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 1px rgb(6, 10, 255);
  justify-content: center;
  align-items: center;
  font-weight: bold;
  backdrop-filter: blur(10px) drop-shadow(4px 4px 20px rgb(10, 194, 207));
  border: 0.1px solid turquoise;
  border-radius: 6.4px;
}

.net__hour {
  display: flex;
  flex-flow: column;
  color: white;
  font-size: 14.4px;
  font-weight: 500;
  text-shadow: 2px 2px 10px rgb(255, 255, 255);
  border-bottom: 1px dashed turquoise;
  white-space: nowrap;
  min-width: 20px;
}

.net__hourRow--exist ~ .net__hourRow--exist {
  display: none;
}

.net__minutes {
  position: relative;
  top: -1px;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  font-size: 11px;
  margin-right: 5px;
  font-weight: 500;
  opacity: 0.8;
}

.net__hourInDay {
  text-align: center;
  border: 0.1px solid turquoise;
  border-radius: 6.4px;
}

.net__cell {
  padding: 0px;
  margin: 0;
  white-space: nowrap;
  height: 32px;
}

.net__minutesRow {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  border-bottom: 1px dotted rgba(87, 246, 185, 0.3);
  letter-spacing: 0px;
  text-size-adjust: auto;
}

.net__minutesRow--exist {
  font-size: 13px;
  text-shadow: 2px 1px 1px rgb(56, 53, 241);
  color: rgb(255, 255, 255);
  border-left: 1px solid aquamarine;
  border-top: 1px solid aquamarine;
  border-right: 1px solid aquamarine;
  border-bottom: 1px solid aquamarine;
  width: 93%;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 10px rgb(116, 255, 220, 0.5);
}

.net__minutesRow--exist ~ .net__minutesRow--exist {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
  color: rgba(106, 246, 200, 0);
  border-top: none;
  border-bottom: 0.5px dotted rgba(87, 246, 185, 0.2);
  border-right: none;
  border-left: none;
  box-shadow: none;
  transition: 0.3s;
}

.net__timerButton {
  display: flex;
  justify-content: center;
  z-index: 3;
  width: 100%;
  text-shadow: 0 0 2px rgba(130, 251, 211, 0.8);
  transition: 0.3s;
}
button {
  background-color: transparent;
  border-style: none;
}
.net__timerButton:hover {
  color: rgb(255, 0, 0);
  text-shadow: 0 0 7px rgb(255, 0, 0);
}
.net__activityTimeDisplay {
  position: relative;
  font-size: 19.2px;
  left: 1%;
  margin-left: auto;
  margin-right: auto;
  height: 48px;
  width: 40%;
  color: rgb(255, 255, 255);
  font-weight: bold;
  border-left: 15px double rgba(41, 246, 212, 0.157);
  border-right: 15px double rgba(41, 246, 212, 0.157);
  border-top: 2px double rgba(41, 246, 212, 0.157);
  border-bottom: 2px double rgba(41, 246, 212, 0.157);
  border-radius: 5px;
  border-style: groove;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.8s ease-out;
}

.net__activityTimeDisplayActive {
  color: rgb(68, 255, 193);
  transition: 0.8s ease-out;
}
/* ////////////////////////////// */
@media (max-width: 765px) {
  .net__activityTimeDisplay {
    width: 80%;
    font-size: 16px;
  }
  .net__hour {
    width: 16px;
    font-size: 11.2px;
  }
  .net__emptyCell {
    width: 27.2px;
  }
  .net__minutesRow {
    overflow: hidden;
  }
  .net__dayHeader {
    font-size: 12.8px;
  }
}
</style>
