import axios from "axios";

const api = axios.create({
  baseURL: "https://deploy-fullstack-7is2.onrender.com/",
  timeout: 15000,
});

export default api;
