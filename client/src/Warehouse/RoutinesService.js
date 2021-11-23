import api from "@/api"
import { boolean } from "joi";

const url = "/routines/";

class RoutinesService {
  //get routine
  static getRoutines() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await api.get(url);
        const data = res.data;
        resolve(
          data.map((routine) => ({
            ...routine,
            createdAt: new Date(routine.createdAt),
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
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
