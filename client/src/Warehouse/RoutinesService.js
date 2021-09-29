import axios from "axios";
import { boolean } from "joi";

const url = "http://localhost:5000/api/routines/";

class RoutinesService {
  //get goals
  static getRoutines() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
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

  //create goal
  static insertRoutine(routine) {
    return axios.post(url, routine);
  }

  //delete Routine
  static deleteRoutine(id) {
    return axios.delete(`${url}${id}`);
  }

  //updateRoutine
  static updateRoutine(routine) {
    return axios.put(`${url}${routine._id}`, routine);
  }
}

export default RoutinesService;
