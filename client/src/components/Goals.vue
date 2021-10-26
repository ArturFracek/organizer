<template>
  <div class="goals__mainContainer">
    <div class="goals__background"></div>
    <div class="goals__addingGoalsContainer">
      <input
        class="goals__andGoal__input"
        type="text"
        placeholder=" "
        v-model="title"
        @keyup.enter="addGoal"
      />
      <label class="goals__input__label">Add Goal</label>
      <button class="goals__addGoal__button" @click="addGoal">Add Goal</button>
    </div>
    <div class="goals__goalsHolder">
      <ul
        v-for="(goal, index) in goals"
        :item="goal"
        :index="index"
        :key="goal._id"
        @dblclick="deleteGoal(goal._id)"
      >
        <li>
          <GoalModal
            :goalObject="goal"
            @updateGoal="saveGoal"
            @deleteGoal="deleteGoal"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GoalModal from "./GoalModal";

export default {
  name: "PostComponent",
  components: {
    GoalModal,
  },
  data() {
    return {
      title: "",
      error: "Something went wrong, try again",
    };
  },
  async mounted() {
    await this.fetchGoals();
  },
  computed: {
    ...mapGetters({
      goals: "goals/goals",
    }),
  },
  methods: {
    ...mapActions({
      fetchAllGoals: "goals/fetchAllGoals",
      createGoal: "goals/createGoal",
      updateGoal: "goals/updateGoal",
      removeGoal: "goals/deleteGoal",
    }),
    async fetchGoals() {
      await this.fetchAllGoals();
    },
    async addGoal() {
      await this.createGoal({ title: this.title });
      this.title = "";
    },
    async saveGoal(goal) {
      await this.updateGoal(goal);
    },
    async deleteGoal(id) {
      await this.removeGoal({ id });
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 1.2rem;
  color: turquoise;
  letter-spacing: 1px;
  align-self: flex-start;
}
.goals__background {
  position: absolute;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background: transparent;
  backdrop-filter: drop-shadow(4px 4px 6px rgb(207, 17, 17)) hue-rotate(180deg)
    opacity(80%);
  right: 0%;
}

.goals__mainContainer {
  position: relative;
  height: 30%;
  max-height: 60%;
  width: 80%;
  padding: 0.3rem 5%;
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(to top, rgb(164, 253, 249), rgb(248, 120, 120))
    1;
  border-image-repeat: stretch;
  display: flex;
  flex-flow: column;
}

.goals__addingGoalsContainer {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  position: relative;
}

.goals__goalsHolder {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.goals__andGoal__input {
  margin-top: 1rem;
  text-align: center;
  width: 30rem;
  height: 2.5rem;
  border-radius: 2px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  text-shadow: 0 0 1rem turquoise;
  padding: 0.7rem;
  background: none;
  outline: none;
  border: 2px solid rgb(41, 154, 158);
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0 25px 25px 25px rgba(105, 241, 241, 0.1);
  position: absolute;
  top: 0rem;
  display: flex;
  justify-content: center;
}

.goals__input__label {
  position: relative;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
  left: 200ms ease-in;
  font-size: 200ms ease-in;
  top: -0.3rem;
  right: 0;
  background-color: none;
  font-weight: bold;
  white-space: nowrap;
  transition: top 200ms ease-in;
  left: 200ms ease-in;
  font-size: 200ms ease-in;
  opacity: 0.9;
  color: rgb(255, 255, 255);
  text-shadow: 0 0 0.8rem rgb(253, 122, 122);
  pointer-events: none;
}

.goals__addGoal__button {
  border-radius: 0;
  color: rgb(78, 226, 231);
  text-shadow: 0 0 8px rgb(51, 189, 175);
  font-weight: bold;
  position: relative;
  right: -16.5rem;
  top: -0.25rem;
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
  height: 2.5rem;
}
.goals__addGoal__button:hover {
  color: rgb(240, 2, 2);
  border-color: rgb(233, 1, 1);
  backdrop-filter: blur(0) drop-shadow(0px 0px 0px rgb(211, 8, 1, 0.2));
  text-shadow: 0 0 0px red;
}

input[type="text"],
input[type="password"] {
  color: whitesmoke;
}

input:hover {
  border-color: rgb(216, 25, 25);
  color: rgb(216, 25, 25);
}

input:hover ~ .goals__input__label {
  color: rgb(216, 25, 25);
}

input:focus,
textarea {
  color: turquoise;
  border-color: turquoise;
  background-color: none;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(15px) drop-shadow(2px 2px 1px rgb(7, 207, 233));
}

input:focus ~ .goals__input__label {
  color: turquoise;
  text-shadow: 0px 0px 0.1rem turquoise;
}

input:focus ~ .goals__input__label,
input:not(:placeholder-shown).goals__andGoal__input:not(:focus)
  ~ .goals__input__label {
  animation: shadow_fading 0.8s ease;
  opacity: 0;
}

input:not(:placeholder-shown) ~ .goals__addGoal__button {
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}
@keyframes shadow_fading {
  0% {
    color: rgb(116, 255, 248);
    opacity: 1;
    text-shadow: 0.6rem 0rem 0.8rem turquoise, -0.6rem 0rem 0.8rem turquoise,
      0rem 0.6rem 0.8rem turquoise, 0rem -0.6rem 0.8rem turquoise;
  }
  20% {
    opacity: 0.8;
  }
  70% {
    opacity: 0.3;
    text-shadow: 0.3rem 0rem 0.8rem turquoise, -0.3rem 0rem 0.8rem turquoise,
      0rem 0.3rem 0.8rem turquoise, 0rem -0.3rem 0.8rem turquoise;
  }
  90% {
    opacity: 0.1;
    text-shadow: 0.2rem 0rem 1.4rem turquoise, -0.2rem 0rem 1.4rem turquoise,
      0rem 0.2rem 1.4em turquoise, 0rem -0.2rem 1.4rem turquoise;
  }
  100% {
    opacity: 0;
    text-shadow: 0.2rem 0px 0.2rem turquoise;
  }
}

ul {
  background-color: transparent;
}

li::marker {
  color: rgb(255, 243, 243);
}

@media (max-width: 720px) {
  .goals__andGoal__input {
    width: 12rem;
  }
}
</style>
