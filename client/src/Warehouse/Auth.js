import axios from "axios";
import router from "../router/index";

const state = {
  token: localStorage.getItem("token") || "",
  user: {},
  status: "",
  error: null
};

const getters = {
 // isLoggedIn: function(state){
 //   if(state.token !="") {
 //     return true
 //   } else {
 //     return false
 //  }
  //}
  isLoggedIn: state => !!state.token,
  authState: state => state.status,
  user: state => state.user,
  error: state => state.error,
};

const actions = {
//Login action
  async login({
    commit
    }, user) {
      try {
      commit('auth_request');
      let res = await axios.post('http://localhost:5000/api/users/login', user)
      if (res.data.success){
        const token = res.data.token;
        const user = res.data.user;
        //Store the token into the local storage
        localStorage.setItem("token", token)
        //set the axios defaults
        axios.defaults.headers.common['Authorization'] = token;
        commit('auth_success', token, user);
      }
    return res
      } catch (err){
        commit(auth_error, err);
      }
    },
    //Register user
  async register({
    commit
  }, userData){
    try {
    commit('register_request');
    let res = await axios.post('http://localhost:5000/api/users/register', userData);
    if (res.data.success !== undefined) {
      commit("register_success");
    }
    return res;
    } catch (err) {
      commit("register_error", err)
    }
  },
  //Get the user profile
  async getProfile({
    commit
  }){
    commit('profile_request')
    let res = await axios.get("http://localhost:5000/api/users/profile")
    commit('user_profile', res.data.user)
    return res;
  },

  //Logout the user
  async logout({
    commit
  }){
    await localStorage.removeItem('token');
    commit('logout');
    delete axios.defaults.headers.common['Authorization'];
    router.push('/Login');
    return
  }
}

const mutations = {
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, token, user){
    state.token = token;
    state.user = user;
    state.status = 'success';
  },
  auth_error(state, err){
    state.error = error.response.data.msg
  },
  register_request(state){
    state.status = 'loading';
  },
  register_success(state){
    state.status = 'success';
  },
  register_error(state, err){
    state.error = error.response.data.msg
  },
  logout(state){
    state.status = '';
    state.token = '';
    state.user = '';
  },
  profile_request(state){
    state.status = 'loading';
  },
  user_profile(state, user){
    state.user = user;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}