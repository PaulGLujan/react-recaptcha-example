const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 8090;

const store = {
  users: [],
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/addUser", async (req, res) => {
  const { firstName, lastName, reCaptchaToken } = req.body;
  const reCaptchaResponse = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${reCaptchaToken}`
  );
  if (reCaptchaResponse.data.success) {
    store.users.push({ firstName, lastName });
    console.log("*****\n", JSON.stringify(store, null, 2), "\n*****");
    res.status(200);
    res.send({});
  } else {
    console.log("reCaptcha error =>", reCaptchaResponse.data);
    res.status(403);
    res.send();
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
