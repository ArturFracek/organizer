import api from "@/api"

const url = "/activities/";

class ActivitiesService {
  //get posts
  static async getActivities() {
    const res = await api.get(url);
    return res.data.map((activity) => ({
      ...activity,
      createdAt: new Date(activity.createdAt),
    }));
  }

  //create post
  static insertActivity(activity) {
    return api.post(url, activity);
  }

  //update activity
  static updateActivity(activity) {
    return api.put(`${url}${activity._id}`, activity);
  }

  //delete post
  static deleteActivity(id) {
    return api.delete(`${url}${id}`);
  }
}

export default ActivitiesService;
