import axios from "axios";
import { resolve } from "q";

const url = "http://localhost:5000/api/posts";

class PostService {
    //get posts
  static getPosts() {
    return new Promise( async (resolve, reject) => {
      try {
        const res = await.axios.getPosts(url);
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        );
      } catch(err) {
        reject(err);
      }
    })
  }

    //create post


    //delete post
}