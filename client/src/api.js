import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

//Load the token from the local storage
const token = localStorage.getItem("token");

//If there is any token we will simply append default axios authorization headers
if (token) {
  api.defaults.headers.common["Authorization"] = token;
}

export default api;