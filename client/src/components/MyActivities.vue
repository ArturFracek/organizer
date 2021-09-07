<template>
  <div class="main_activities_container">
    <div class="title">Activities</div>
    <div class="addActivities">
      <input
        id="add_activity"
        class="input"
        type="text"
        placeholder=" "
        v-model="title"
        @keyup.enter="createActivity"
      />
      <label for="add_activity" class="form_label_add_activity"
        >Add Activity</label
      >
      <button class="btn" @click="createActivity">Add</button>
    </div>
    <div class="activities">
      <div
        class="activity"
        v-for="(activity, index) in activities"
        v-bind:item="activity"
        v-bind:index="index"
        v-bind:key="activity._id"
        v-on:dblclick="deleteActivity(activity._id)"
      >
        <ActivityModal
          :activityObject="activity"
          @deleteActivity="deleteActivity"
          @saveDescription="save"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ActivityModal from "@/components/ActivityModal.vue";
import ActivitiesService from "../Warehouse/ActivitiesService.js";

export default {
  name: "MyActivities",
  data() {
    return {
      title: "",
      activityObject: {},
      activities: [],
      priority: Number,
      error: "Try again",
      description: "",
    };
  },
  components: {
    ActivityModal,
  },
  async created() {
    try {
      this.activities = await ActivitiesService.getActivities();
    } catch (err) {
      this.error = err.massage;
    }
  },
  methods: {
    async createActivity() {
      await ActivitiesService.insertActivity({
        title: this.title,
        priority: 6,
      });
      this.activities = await ActivitiesService.getActivities();
    },
    async deleteActivity(id) {
      await ActivitiesService.deleteActivity(id);
      this.activities = await ActivitiesService.getActivities();
    },
    save(activityChanged) {
      this.routine = activityChanged;
    },
  },
};
</script>

<style scoped>
.main_activities_container {
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

.title {
  position: relative;
  top: 0.5rem;
  align-self: flex-start;
  color: white;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 1.4rem;
  letter-spacing: 1px;
}

.addActivities {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: 2rem;
}

.btn {
  border-radius: 0;
  color: rgb(88, 249, 255);
  text-shadow: 0 0 8px turquoise;
  font-weight: bold;
  position: relative;
  left: 12rem;
  top: -4.6rem;
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
}

.activities {
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 2.5rem;
}

.activityHolder {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px 7px;
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

.activity {
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

input:hover ~ .form_label_add_activity {
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

input:focus ~ .form_label_add_activity {
  color: turquoise;
  text-shadow: 0px 0px 0.1rem turquoise;
}

input:focus ~ .form_label_add_activity,
input:not(:placeholder-shown).input:not(:focus) ~ .form_label_add_activity {
  top: -4.4rem;
}

input:not(:placeholder-shown) ~ .btn {
  display: block;
}

.form_label_add_activity {
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
}
</style>
