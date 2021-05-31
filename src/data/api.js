import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:4001/api",

  headers: { authorization: "Bearer " + localStorage.getItem("token") },
});
export default api;
