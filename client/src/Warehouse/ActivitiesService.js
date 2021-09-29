import axios from "axios";

const url = "http://localhost:5000/api/activities/";

class ActivitiesService {
  //get posts
  static getActivities() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map((activity) => ({
            ...activity,
            createdAt: new Date(activity.createdAt),
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  //create post
  static insertActivity(activity) {
    return axios.post(url, activity);
  }

  //update activity
  static updateActivity(activity) {
    return axios.put(`${url}${activity._id}`, activity);
  }

  //delete post
  static deleteActivity(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default ActivitiesService;
