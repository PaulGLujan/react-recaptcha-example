import axios from "axios";

const API_URL = "http://localhost:8090";

export const addUser = (firstName, lastName) => {
  axios.post(API_URL + "/addUser", { firstName, lastName });
};
