<template>
  <div class="activities__mainContainer">
    <div class="activities__title">Activities</div>
    <div class="activities__addActivitiesContainer">
      <input
        class="input"
        type="text"
        placeholder=" "
        v-model="title"
        @keyup.enter="addActivity"
      />
      <label class="activities__form__label__addActivities">Add Activity</label>
      <button class="addActivity__button" @click="addActivity">Add</button>
    </div>
    <div class="activities__objectsHolder">
      <div
        class="activities__activityHolder"
        v-for="(activity, index) in activities"
        v-bind:item="activity"
        v-bind:index="index"
        v-bind:key="activity._id"
        v-on:dblclick="deleteActivity(activity._id)"
      >
        <ActivityModal
          :activityObject="activity"
          @deleteActivity="deleteActivity"
          @updateActivity="saveActivity"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ActivityModal from "@/components/ActivityModal.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "",
      error: "Try again",
    };
  },
  components: {
    ActivityModal,
  },
  async mounted() {
    this.fetchAllActivities();
  },
  computed: {
    ...mapGetters({
      activities: "activities/activities",
    }),
  },
  methods: {
    ...mapActions({
      fetchAllActivities: "activities/fetchAllActivities",
      updateActivity: "activities/updateActivity",
      removeActivity: "activities/deleteActivity",
      createActivity: "activities/createActivity",
    }),
    async fetchActivities() {
      await this.fetchAllActivities();
    },
    async addActivity() {
      await this.createActivity({ title: this.title });
      this.title = "";
    },
    async deleteActivity(id) {
      await this.removeActivity({ id });
    },
    async saveActivity(activity) {
      await this.updateActivity(activity);
    },
  },
};
</script>

<style scoped>
.activities__mainContainer {
  display: flex;
  flex-flow: column;
  align-items: center;
  max-height: 60%;
  width: 100%;
  position: relative;
  border: 2px solid rgb(35, 166, 170);
  border-radius: 0.5rem;
  padding: 0 1rem 1rem 1rem;
  box-shadow: 0 0 0.5rem rgb(132, 242, 250);
}

.activities__title {
  position: relative;
  top: 0.5rem;
  align-self: flex-start;
  color: white;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 1.4rem;
  letter-spacing: 1px;
}

.activities__addActivitiesContainer {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: 2rem;
}

.addActivity__button {
  border-radius: 0;
  color: rgb(88, 249, 255);
  text-shadow: 0 0 8px turquoise;
  font-weight: bold;
  position: relative;
  left: 12.5rem;
  top: -4.7rem;
  text-align: center;
  border-radius: 2px;
  padding: 0.7rem;
  background: none;
  outline: none;
  border: 2px solid rgb(35, 166, 170);
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0 25px 25px rgba(38, 221, 253, 0.1);
  display: none;
  height: 100%;
  width: 19%;
  transition: ease-in-out 0.3s;
}

button:hover {
  color: red;
  border: 2px solid red;
  text-shadow: 0 0 10px red;
}

.activities__objectsHolder {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 2.5rem;
}

.input {
  margin-left: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  text-shadow: 0 0 1rem turquoise;
  padding: 0.7rem;
  background: none;
  outline: none;
  border: 2px solid rgb(35, 166, 170);
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 10px rgb(17, 185, 207));
}

.activities__activityHolder {
  margin: 7px 7px;
}

input[type="text"],
input[type="password"] {
  color: whitesmoke;
}

input:hover {
  border-color: rgb(216, 25, 25);
  color: rgb(216, 25, 25);
}

input:hover ~ .activities__form__label__addActivities {
  color: rgb(216, 25, 25);
}

input:focus,
textarea {
  color: turquoise;
  border-color: turquoise;
  background-color: none;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(15px) drop-shadow(4px 4px 10px rgb(7, 207, 233));
}

input:focus ~ .activities__form__label__addActivities {
  color: turquoise;
  text-shadow: 0px 0px 0.1rem turquoise;
}

input:focus ~ .activities__form__label__addActivities,
input:not(:placeholder-shown).input:not(:focus)
  ~ .activities__form__label__addActivities {
  top: -4.5rem;
}

input:not(:placeholder-shown) ~ .addActivity__button {
  display: block;
}

.activities__form__label__addActivities {
  position: relative;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
  left: 200ms ease-in;
  font-size: 200ms ease-in;
  top: -2.2rem;
  left: 0.2rem;
  background-color: none;
  font-weight: bold;
  caret-color: transparent;
  pointer-events: none;
}
</style>
