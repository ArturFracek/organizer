import axios from "axios";
import appsConfigFile from "../../config/apps"

const appsConfig = appsConfigFile[process.env.NODE_ENV || "dev"] 

const api = axios.create({
    baseURL: `http://localhost:${appsConfig.be_port}/api`,
});

//Load the token from the local storage
const token = localStorage.getItem("token");

//If there is any token we will simply append default axios authorization headers
if (token) {
  api.defaults.headers.common["Authorization"] = token;
}

export default api;