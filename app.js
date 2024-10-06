const express = require("express");
const app = express();

const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection sucessul");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.listen(8080, (req, res) => {
  console.log("port is listening ");
});

app.get("/", (req, res) => {
  res.send("working");
});
