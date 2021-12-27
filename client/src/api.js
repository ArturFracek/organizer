import axios from "axios";
import appsConfigFile from "../../config/apps";

const appsConfig = appsConfigFile[process.env.NODE_ENV || "dev"];

const baseURL =
  process.env.NODE_ENV === "production"
    ? `https://organizer-demo.herokuapp.com/api`
    : `http://localhost:${appsConfig.be_port}/api`;

const api = axios.create({
  baseURL,
});

//Load the token from the local storage
const token = localStorage.getItem("token");

//If there is any token we will simply append default axios authorization headers
if (token) {
  api.defaults.headers.common["Authorization"] = token;
}

export default api;
