require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is the Main page</h1>");
});

app.get("/home", (req, res) => {
  res.send("This is home page");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
