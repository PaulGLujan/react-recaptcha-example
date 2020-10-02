const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
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

app.post("/addUser", (req, res) => {
  const { firstName, lastName } = req.body;
  store.users.push({ firstName, lastName });
  console.log("*****\n", JSON.stringify(store, null, 2), "\n*****");
  res.status(200);
  res.send({});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
