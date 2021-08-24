<template>
  <div class="posts_main_container">
    <div class="post_adding">
      <input
        class="input"
        type="text"
        id="create_post"
        v-model="text"
        placeholder=" "
        @keyup.enter="createPost"
      />
      <label class="goals_label" for="create_post">Add Goal</label>
      <button class="btn" v-on:click="createPost">Add Goal</button>
    </div>
    <div class="posts_area">
      <div
        class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)"
      >
        <li class="text">
          <GoalModal :activityObject="post" />
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../Warehouse/PostService";
import GoalModal from "./GoalModal";

export default {
  name: "PostComponent",
  components: {
    GoalModal,
  },
  data() {
    return {
      posts: [],
      error: "",
      text: "",
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.massage;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost({ title: this.text, description: "", priority: 5 });
      this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 1.2rem;
  color: turquoise;
  letter-spacing: 1px;
  align-self: flex-start;
}

.posts_main_container {
  height: 30%;
  max-height: 60%;
  width: 80%;
  position: relative;
  padding: 0.3rem 5%;
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(to top, rgb(164, 253, 249), rgb(248, 120, 120))
    1;
  border-image-repeat: stretch;
  backdrop-filter: blur(4px) drop-shadow(4px 4px 20px rgb(86, 221, 245))
    hue-rotate(180deg) opacity(90%);
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow-y: hidden;
}

.post_adding {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  position: relative;
}

.input {
  margin-top: 1rem;
  text-align: center;
  width: 30rem;
  height: 2.5rem;
  border-radius: 2px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  text-shadow: 0 0 1rem turquoise;
  padding: 0.7rem;
  background: none;
  outline: none;
  border: 2px solid rgb(35, 166, 170);
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0 25px 25px 25px rgba(105, 241, 241, 0.1);
  position: absolute;
  top: 0rem;
  display: flex;
  justify-content: center;
}

.goals_label {
  position: relative;
  color: whitesmoke;
  display: flex;
  cursor: text;
  transition: top 200ms ease-in;
  left: 200ms ease-in;
  font-size: 200ms ease-in;
  top: -0.3rem;
  right: 0;
  background-color: none;
  font-weight: bold;
  white-space: nowrap;
  transition: top 200ms ease-in;
    left: 200ms ease-in;
    font-size: 200ms ease-in;
  opacity: 0.9;
  color: rgb(255, 255, 255);
  text-shadow: 0 0 0.8rem rgb(253, 122, 122);
}

.btn {
  border-radius: 0;
  color: rgb(88, 249, 255);
  text-shadow: 0 0 8px turquoise;
  font-weight: bold;
  position: relative;
  right: -16.5rem;
  top: -0.25rem;
  text-align: center;
  border-radius: 2px;
  padding: 0.7rem;
  background: none;
  outline: none;
  border: 2px solid rgb(35, 166, 170);
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0 25px 25px rgba(38, 221, 253, 0.1);
  backdrop-filter: blur(10px) drop-shadow(4px 4px 2px rgb(17, 185, 207));
  display: none;
  height: 2.5rem;
}

input[type="text"],
input[type="password"] {
  color: whitesmoke;
}

input:hover {
  border-color: rgb(216, 25, 25);
  color: rgb(216, 25, 25);
}

input:hover ~ .goals_label {
  color: rgb(216, 25, 25);
}

input:focus,
textarea {
  color: turquoise;
  border-color: turquoise;
  background-color: none;
  box-shadow: 0 25px 25px rgba(3, 96, 112, 0.1);
  backdrop-filter: blur(15px) drop-shadow(4px 4px 10px rgb(7, 207, 233));
}

input:focus ~ .goals_label {
  color: turquoise;
  text-shadow: 0px 0px 0.1rem turquoise;
}

input:focus ~ .goals_label,
input:not(:placeholder-shown).input:not(:focus) ~ .goals_label {
 animation: shadow_fading 0.8s ease;
 opacity: 0;
}

input:not(:placeholder-shown) ~ .btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes shadow_fading {
  0%{
    color: rgb(116, 255, 248);
    opacity: 1;
    text-shadow: 
       0.6rem 0rem  0.8rem turquoise,
      -0.6rem 0rem 0.8rem turquoise,
       0rem 0.6rem 0.8rem turquoise,
       0rem -0.6rem 0.8rem turquoise;
  }
  20%{
    opacity: 0.8;
  }
  70%{
    opacity: 0.3;
    text-shadow:
    0.3rem 0rem  0.8rem turquoise,
      -0.3rem 0rem 0.8rem turquoise,
       0rem 0.3rem 0.8rem turquoise,
       0rem -0.3rem 0.8rem turquoise;
  }
  90% {
    opacity: 0.1;
    text-shadow: 
    0.2rem 0rem  1.4rem turquoise,
      -0.2rem 0rem 1.4rem turquoise,
       0rem 0.2rem 1.4em turquoise,
       0rem -0.2rem 1.4rem turquoise;
  }
  100%{
    opacity: 0;
    text-shadow: 0.2rem 0px 0.2rem turquoise;
  }
}

.posts_area {
  align-self: flex-start;
}

.text {
font-size: 1.1rem;
color: rgb(255, 117, 112);
letter-spacing: 3px;
font-weight: bold;
}

.post {

}
</style>
