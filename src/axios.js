import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazonbackend-c20j.onrender.com/",
});

export default instance;
