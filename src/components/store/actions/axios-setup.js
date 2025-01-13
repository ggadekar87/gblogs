import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:8080/",
  baseURL: "https://noteapi-7xnh.onrender.com",
});

export default instance;
