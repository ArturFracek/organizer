import axios from "axios";

const url = "http://localhost:5000/api/routines/";

class RoutinesService {
  //get posts
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
            description: "",
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  //create post
  static insertActivity(routine) {
    return axios.post(url, routine);
  }

  //delete post
  static deleteRoutine(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default RoutinesService;
