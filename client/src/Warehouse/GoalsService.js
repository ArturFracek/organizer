import axios from "axios";

const url = "http://localhost:5000/api/goals/";

class GoalsService {
  //get goals
  static getGoals() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
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
    return axios.post(url, goal);
  }
  
  //update goal
  static updateGoal(goal) {
    return axios.put(`${url}${goal._id}`, goal);
  }

  //delete goal
  static deleteGoal(id) {
    return axios.delete(`${url}${id}`);
  }

}

export default GoalsService;