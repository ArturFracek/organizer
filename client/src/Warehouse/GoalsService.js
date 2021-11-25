import api from "@/api";

const url = "/goals/";
class GoalsService {
  //get posts
  static async getGoals() {
    const res = await api.get(url);
    return res.data.map((goal) => ({
      ...goal,
      createdAt: new Date(goal.createdAt),
    }));
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
