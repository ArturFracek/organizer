<template>
  <div class="goals__mainContainer">
    <div class="goals__background"></div>
    <div class="goals__addingGoalsContainer">
      <input
        class="goals__addGoal__input"
        type="text"
        placeholder=" "
        v-model="title"
        @keyup.enter="addGoal"
        data-test="goalInputAdd"
      />
      <label class="goals__input__label">Add Goal</label>
      <button
        type="button"
        class="goals__addGoal__button"
        @click="addGoal"
        data-test="goalButtonAdd"
      >
        Add Goal
      </button>
    </div>
    <div class="goals__goalsHolder" data-test="goalsHolder">
      <ul
        v-for="(goal, index) in goals"
        :item="goal"
        :index="index"
        :key="goal._id"
      >
        <li>
          <GoalModal
            :goalObject="goal"
            @updateGoal="saveGoal"
            @deleteGoal="removeGoal"
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
      deleteGoal: "goals/deleteGoal",
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
    async removeGoal(id) {
      await this.deleteGoal({ id });
    },
  },
};
</script>

<style scoped>
.goals__background {
  position: fixed;
  box-sizing: border-box;
  height: 30%;
  width: 80%;
  background: transparent;
  backdrop-filter: drop-shadow(4px 4px 6px rgb(207, 17, 17)) hue-rotate(180deg)
    opacity(80%);
  z-index: 0;
  overflow-y: hidden;
  transform: translateY(-3%);
}

.goals__mainContainer {
  align-items: center;
  position: relative;
  height: 30%;
  width: 80%;
  padding: 4.8px 5%;
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(to top, rgb(164, 253, 249), rgb(248, 120, 120))
    1;
  border-image-repeat: stretch;
  display: flex;
  flex-flow: column;
  overflow-y: scroll;
  background: none;
}

.goals__addingGoalsContainer {
  position: static;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 96px;
  margin-bottom: 48px;
}

.goals__goalsHolder {
  top: 70%;
  width: 100%;
  height: 80%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
}

.goals__addGoal__input {
  margin-top: 16px;
  text-align: center;
  width: 240px;
  height: 40px;
  border-radius: 2px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  text-shadow: 0 0 16px turquoise;
  padding: 11.2px;
  background: none;
  outline: none;
  border-top: 2px solid rgb(41, 154, 158);
  border-bottom: 2px solid rgb(41, 154, 158);
  border-radius: 8px;
  background: transparent;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
}

.goals__input__label {
  position: absolute;
  top: 24px;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
  left: 200ms ease-in;
  font-size: 200ms ease-in;
  background-color: none;
  font-weight: bold;
  white-space: nowrap;
  transition: top 200ms ease-in;
  left: 200ms ease-in;
  font-size: 200ms ease-in;
  opacity: 0.9;
  color: rgb(255, 255, 255);
  text-shadow: 0 0 12.8px rgb(255, 255, 255);
  pointer-events: none;
}

.goals__addGoal__button {
  border-radius: 0;
  color: rgb(78, 226, 231);
  text-shadow: 0 0 8px rgb(51, 189, 175);
  font-weight: bold;
  position: absolute;
  transform: translateX(190%);
  top: 16px;
  text-align: center;
  border-radius: 2px;
  padding: 11.2px;
  background: none;
  outline: none;
  border-top: 2px solid rgb(35, 166, 170);
  border-bottom: 2px solid rgb(35, 166, 170);
  border-radius: 8px;
  background: transparent;
  box-shadow: 0 25px 25px rgba(38, 221, 253, 0.1);
  display: none;
  height: 40px;
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
  text-shadow: 0px 0px 1.6px turquoise;
}

input:focus ~ .goals__input__label,
input:not(:placeholder-shown).goals__addGoal__input:not(:focus)
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
    text-shadow: 9.6px 0px 12.8px turquoise, -9.6px 0px 12.8px turquoise,
      0px 9.6px 12.8px turquoise, 0px -9.6px 12.8px turquoise;
  }
  20% {
    opacity: 0.8;
  }
  70% {
    opacity: 0.3;
    text-shadow: 4.8px 0px 12.8px turquoise, -4.8px 0px 12.8px turquoise,
      0px 4.8px 12.8px turquoise, 0px -4.8px 12.8px turquoise;
  }
  90% {
    opacity: 0.1;
    text-shadow: 3.2px 0px 22.4px turquoise, -3.2px 0px 22.4px turquoise,
      0px 3.2px 1.4em turquoise, 0px -3.2px 22.4px turquoise;
  }
  100% {
    opacity: 0;
    text-shadow: 3.2px 0px 3.2px turquoise;
  }
}

ul {
  background-color: transparent;
  list-style-type: square;
}

li::marker {
  color: rgb(255, 255, 255);
}

@media (max-width: 765px) {
  .goals__addGoal__input {
    width: 192px;
  }
  .goals__mainContainer {
    width: 100%;
    height: 30%;
  }
  .goals__input__label {
    top: 24px;
  }
  .goals__addGoal__button {
    top: 9.6px;
    left: 112px;
  }
  li {
    font-size: 14.4px;
  }
  .goals__addGoal__button {
    position: absolute;
    top: 16px;
    left: 50vw;
    width: 48px;
    backdrop-filter: none;
  }
  .goals__background {
    width: 100%;
    background: transparent;
  }
}
</style>
