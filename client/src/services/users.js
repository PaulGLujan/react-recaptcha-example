import axios from "axios";

const API_URL = "http://localhost:8090";

export const addUser = (reCaptchaToken, firstName, lastName) => {
  axios.post(API_URL + "/addUser", { reCaptchaToken, firstName, lastName });
};
