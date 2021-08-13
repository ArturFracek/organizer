<template>
  <div class="main_container">
    <div class="upper_container">
      <input type="file" name="file" id="file" accept="image/*">
      <div class="profile_pic_container" id="profile_pic_id">
        <img src="../assets/profile_cat.jpg" class="photo">
        <label for="file" id="upload_btn">Upload Photo</label>
      </div>
      <div class="card" v-if="user">
        <li class="list_group_item">Username: {{ user.username }}</li>
        <li class="list_group_item">Name: {{ user.name }}</li>
        <li class="list_group_item">Email: {{ user.email }}</li>
      </div>
    </div>
    <div class="mid_container">
      <div class="mid_title">
        Time Statistics
      </div>
    </div>
    <div class="bottom_container">
      <div class="bottom_title">
        Goals
        <div class="user_goals">
          <form action="">
            <label for="">Goals</label>
            <input type="text" v-model.lazy="goals.title" required />
            <label for="">Content</label>
            <textarea v-model.lazy="goals.content" name="" id="" cols="30" rows="10"></textarea>
            <button type="submit" @click.prevent="postGoals()">Save</button>
          </form>
          <div class="preview">
            <h3>Preview</h3>
            <p>Titleee: {{ goals.title }}</p>
            <p>conteenttt: {{ goals.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      goals: {
       title: "",
       content: "",
      },
    };
  },
  computed: 
  mapGetters(['user']),
  methods:
  mapActions(['getProfile']),
  created(){
    this.getProfile()
  },
  mounted() {
    const file = document.getElementById("file");
    const previewContainer = document.getElementById("profile_pic_id");
    const previewImage = previewContainer.querySelector(".photo");

    file.addEventListener("change", function() {
      const file = this.files[0];

      if(file) {
        const reader = new FileReader();

        previewImage.style.display = "block"

        reader.addEventListener("load", function() {
          previewImage.setAttribute("src", this.result)
        });
        reader.readAsDataURL(file);
      } else {
        previewImage.style.display = null;
        previewImage.setAttribute("src", "")
      }
    })
  },
    postGoals() {
      const goals = {
       title: this.goals.title,
       content: this.goals.content,
    };
      console.log(goals)
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main_container {
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.11) 0px, rgba(0, 0, 0, 0.11) 12px, rgba(1, 1, 1, 0.16) 12px, rgba(1, 1, 1, 0.16) 24px, rgba(0, 0, 0, 0.14) 24px, rgba(0, 0, 0, 0.14) 36px, rgba(0, 0, 0, 0.23) 36px, rgba(0, 0, 0, 0.23) 48px, rgba(0, 0, 0, 0.12) 48px, rgba(0, 0, 0, 0.12) 60px, rgba(1, 1, 1, 0.07) 60px, rgba(1, 1, 1, 0.07) 72px, rgba(0, 0, 0, 0.21) 72px, rgba(0, 0, 0, 0.21) 84px, rgba(0, 0, 0, 0.24) 84px, rgba(0, 0, 0, 0.24) 96px, rgba(1, 1, 1, 0.23) 96px, rgba(1, 1, 1, 0.23) 108px, rgba(1, 1, 1, 0.07) 108px, rgba(1, 1, 1, 0.07) 120px, rgba(0, 0, 0, 0.01) 120px, rgba(0, 0, 0, 0.01) 132px, rgba(1, 1, 1, 0.22) 132px, rgba(1, 1, 1, 0.22) 144px, rgba(1, 1, 1, 0.24) 144px, rgba(1, 1, 1, 0.24) 156px, rgba(0, 0, 0, 0) 156px, rgba(0, 0, 0, 0) 168px, rgba(0, 0, 0, 0.12) 168px, rgba(0, 0, 0, 0.12) 180px), repeating-linear-gradient(180deg, rgba(1, 1, 1, 0.01) 0px, rgba(1, 1, 1, 0.01) 12px, rgba(1,1,1, 0.16) 12px, rgba(1,1,1, 0.16) 24px, rgba(0, 0, 0, 0.09) 24px, rgba(0, 0, 0, 0.09) 36px, rgba(0, 0, 0, 0.02) 36px, rgba(0, 0, 0, 0.02) 48px, rgba(0, 0, 0, 0.1) 48px, rgba(0, 0, 0, 0.1) 60px, rgba(1, 1, 1, 0.07) 60px, rgba(1, 1, 1, 0.07) 72px, rgba(1,1,1, 0.16) 72px, rgba(1,1,1, 0.16) 84px, rgba(0, 0, 0, 0.18) 84px, rgba(0, 0, 0, 0.18) 96px, rgba(1,1,1, 0.16) 96px, rgba(1,1,1, 0.16) 108px, rgba(108,86,86, 0.09) 108px, rgba(108,86,86, 0.09) 120px, rgba(1, 1, 1, 0.07) 120px, rgba(1, 1, 1, 0.07) 132px, rgba(1, 1, 1, 0.05) 132px, rgba(1, 1, 1, 0.05) 144px, rgba(0, 0, 0, 0.1) 144px, rgba(0, 0, 0, 0.1) 156px, rgba(1, 1, 1, 0.18) 156px, rgba(1, 1, 1, 0.18) 168px), repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.24) 0px, rgba(0, 0, 0, 0.24) 16px, rgba(1, 1, 1, 0.06) 16px, rgba(1, 1, 1, 0.06) 32px, rgba(0, 0, 0, 0.16) 32px, rgba(0, 0, 0, 0.16) 48px, rgba(91,248,255, 0.01) 48px, rgba(91,248,255, 0.01) 64px, rgba(1, 1, 1, 0.12) 64px, rgba(1, 1, 1, 0.12) 80px, rgba(1, 1, 1, 0.22) 80px, rgba(1, 1, 1, 0.22) 96px, rgba(0, 0, 0, 0.24) 96px, rgba(0, 0, 0, 0.24) 112px, rgba(0, 0, 0, 0.25) 112px, rgba(0, 0, 0, 0.25) 128px, rgba(1, 1, 1, 0.12) 128px, rgba(1, 1, 1, 0.12) 144px, rgba(0, 0, 0, 0.18) 144px, rgba(0, 0, 0, 0.18) 160px, rgba(1, 1, 1, 0.03) 160px, rgba(1, 1, 1, 0.03) 176px, rgba(1, 1, 1, 0.1) 176px, rgba(1, 1, 1, 0.1) 192px), repeating-linear-gradient(225deg, rgba(1, 1, 1, 0.18) 0px, rgba(1, 1, 1, 0.18) 3px, rgba(0, 0, 0, 0.09) 3px, rgba(0, 0, 0, 0.09) 6px, rgba(0, 0, 0, 0.08) 6px, rgba(0, 0, 0, 0.08) 9px, rgba(1, 1, 1, 0.05) 9px, rgba(1, 1, 1, 0.05) 12px, rgba(0, 0, 0, 0.01) 12px, rgba(0, 0, 0, 0.01) 15px, rgba(1, 1, 1, 0.12) 15px, rgba(1, 1, 1, 0.12) 18px, rgba(0, 0, 0, 0.05) 18px, rgba(0, 0, 0, 0.05) 21px, rgba(1, 1, 1, 0.16) 21px, rgba(1, 1, 1, 0.16) 24px, rgba(1, 1, 1, 0.07) 24px, rgba(1, 1, 1, 0.07) 27px, rgba(1, 1, 1, 0.23) 27px, rgba(1, 1, 1, 0.23) 30px, rgba(0, 0, 0, 0.2) 30px, rgba(0, 0, 0, 0.2) 33px, rgba(0, 0, 0, 0.18) 33px, rgba(0, 0, 0, 0.18) 36px, rgba(1, 1, 1, 0.12) 36px, rgba(1, 1, 1, 0.12) 39px, rgba(1, 1, 1, 0.13) 39px, rgba(1, 1, 1, 0.13) 42px, rgba(1, 1, 1, 0.2) 42px, rgba(1, 1, 1, 0.2) 45px, rgba(1, 1, 1, 0.18) 45px, rgba(1, 1, 1, 0.18) 48px, rgba(0, 0, 0, 0.2) 48px, rgba(0, 0, 0, 0.2) 51px, rgba(91,248,255, 0.01) 51px, rgba(91,248,255, 0.01) 54px, rgba(0, 0, 0, 0.03) 54px, rgba(0, 0, 0, 0.03) 57px, rgba(1, 1, 1, 0.06) 57px, rgba(1, 1, 1, 0.06) 60px, rgba(91,248,255, 0.01) 60px, rgba(91,248,255, 0.01) 63px, rgba(0, 0, 0, 0.1) 63px, rgba(0, 0, 0, 0.1) 66px, rgba(1, 1, 1, 0.19) 66px, rgba(1, 1, 1, 0.19) 69px), linear-gradient(180deg, rgb(0,89,89), rgb(233,132,132));;
  color: white;
}

.upper_container {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.card {
  margin: 0 0 0 1rem;
  list-style: none;
  font-size: 1.2rem;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
}

.profile_pic_container {
  height: 8rem;
  width: 10rem;
}
.photo {
  height: inherit;
  width: inherit;
  border-radius: 30%;
  border: 0.1px solid rgb(0, 0, 0);
  box-shadow: 5px 5px 20px rgb(0, 0, 0);
}

#file {
  display: none;
}

#upload_btn {
  position: relative;
  top: -60%;
  cursor: pointer;
  font-size: 1.4rem;
  color: rgb(253, 27, 27);
  display: none;
  font-weight: 500;
  border-top: px solid red;
  border-bottom: 1px solid red;
  background: rgba(56, 255, 255, 0.4);
  display: none;
  justify-content: center;
  align-items: center;

}

img:hover ~ #upload_btn, #upload_btn:hover {
  display: flex;
}

.mid_container {
  height: 30%;
  max-height: 60%;
  width: 80%;
  position: relative;
  padding: 1rem;
  border-style: solid;
  border-width: 1px;
  border-image: linear-gradient(to bottom, rgb(164, 253, 249), rgb(250, 127, 127)) 1;
  border-image-repeat: stretch;
  backdrop-filter: blur(4px) drop-shadow(4px 4px 6px rgb(207, 17, 17)) hue-rotate(180deg) opacity(80%);
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.mid_title {
  font-size: 1.2rem;
  color: turquoise;
  letter-spacing: 1px;
}

.bottom_title {
  font-size: 1.2rem;
  color: rgb(243, 71, 71);
  letter-spacing: 1px;
}

.bottom_container {
  height: 30%;
  max-height: 60%;
  width: 80%;
  position: relative;
  padding: 1rem;
  border-style: solid;
  border-width: 1px;
  border-image: linear-gradient(to top, rgb(164, 253, 249), rgb(248, 120, 120)) 1;
  border-image-repeat: stretch;
  backdrop-filter: blur(4px) drop-shadow(4px 4px 20px rgb(86, 221, 245)) hue-rotate(180deg) opacity(90%);
  display: flex;
  justify-content: center;
  overflow-y: scroll;
}


</style>