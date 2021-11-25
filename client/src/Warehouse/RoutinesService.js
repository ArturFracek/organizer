import api from "@/api";
import { boolean } from "joi";

const url = "/routines/";
class RoutinesService {
  //get posts
  static async getRoutines() {
    const res = await api.get(url);
    return res.data.map((routine) => ({
      ...routine,
      createdAt: new Date(routine.createdAt),
    }));
  }

  //create routine
  static insertRoutine(routine) {
    return api.post(url, routine);
  }

  //delete Routine
  static deleteRoutine(id) {
    return api.delete(`${url}${id}`);
  }

  //updateRoutine
  static updateRoutine(routine) {
    return api.put(`${url}${routine._id}`, routine);
  }
}

export default RoutinesService;
