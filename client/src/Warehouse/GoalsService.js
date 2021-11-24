import api from "@/api";

const url = "/goals/";

class GoalsService {
  //get goals
  static getGoals() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await api.get(url);
        const data = res.data;
        resolve(
          data.map((goal) => ({
            ...goal,
            createdAt: new Date(goal.createdAt),
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  //create goal
  static insertGoal(goal) {
    return api.post(url, goal);
  }

  //update goal
  static updateGoal(goal) {
    return api.put(`${url}${goal._id}`, goal);
  }

  //delete goal
  static deleteGoal(id) {
    return api.delete(`${url}${id}`);
  }
}

export default GoalsService;
