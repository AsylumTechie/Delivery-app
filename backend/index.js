const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const CreateUser = require("./routes/CreateUser");
mongoDB();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api", CreateUser);

app.listen(port, () => {
  console.log(`Example listening on port ${port}`);
});
