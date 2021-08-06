<template>
  <div class="main_activities_container">
    <div class="title">{{ title }}</div>
    <div class="addActivities">
      <input
        id="add_activity"
        class="input"
        type="text"
        placeholder=" "
        v-model="activityObjectName"
        @keyup.enter="addActivities"
      />
       <label for="username" class="form_label_add_activity">Add Activity</label>
      <button class="btn" @click="addActivities">Add</button>
    </div>
    <div class="activities">
      <div
        v-for="activity in activities"
        :key="activity.id"
        class="activityHolder"
      >
        <ActivityModal :activityObject="activity" />
      </div>
    </div>
  </div>
</template>

<script>
import ActivityModal from "@/components/ActivityModal.vue";

export default {
  name: "MyActivities",
  data() {
    return {
      title: "Activities",
      activityObject: {},
      activityObjectName: "",
      newPriority: "1",
      activities: [
        { title: "Planning", priority: 3 / 5, id: 1 },
        { title: "Sleeping", priority: 2 / 5, id: 2 },
      ],
    };
  },
  components: {
    ActivityModal,
  },
  methods: {
    addActivities() {
      this.activities.push({
        title: this.activityObjectName,
        priority: this.newPriority,
        id: Math.random(),
      });
      this.activityObjectName = "";
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
  width: 80%;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 0;
}

.instruction {
  display: flex;
  justify-self: center;
  align-items: center;
  font-size: 1.4em;
  text-align: center;
}

.addActivities {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 0;
}

.input {
  display: flex;
  justify-content: center;
  width: 210px;
  padding: 0;
  margin: 0;
  text-align: center;
  border: 2px black solid;
}

.btn {
  border-radius: 0;
  color: rgb(88, 249, 255);
  text-shadow: 0 0 8px turquoise;
  font-weight: bold;
  position: absolute;
  left: 48rem;
  top: 21.6rem;
  text-align: center;
  border-radius: 2px;
  padding: 0.7rem;
  background: none;
  outline: none;
  border: 2px solid rgb(35, 166, 170);
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0 25px 25px rgba(38, 221, 253, 0.1);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 2px rgb(17, 185, 207));
  display: none;
}

.activities {
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 10px;
}

.activityHolder {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px 7px;
}

.input {
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

input[type=text], input[type=password] {
  color: whitesmoke;
}

input:hover {
  border-color: rgb(216, 25, 25);
  color: rgb(216, 25, 25);
}

input:hover ~ .form_label_add_activity {
  color: rgb(216, 25, 25);
}


input:focus, textarea {
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
input:not(:placeholder-shown).input:not(:focus)
 ~ .form_label_add_activity {
  top: 20.2rem;
}

input:not(:placeholder-shown)
 ~ .btn {
  display: block;
}

.form_label_add_activity {
  position: absolute;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
    left: 200ms ease-in;
    font-size: 200ms ease-in;
  top: 22.5rem;
  left: 34.5rem;
  background-color: none;
  font-weight: bold;
}
</style>
