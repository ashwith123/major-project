const express = require("express");
const app = express();
const listing = require("./models/listing.js");
const mongoose = require("mongoose");

// checks if connection is successfull main is name of function in which connection is being given
main()
  .then(() => {
    console.log("connection sucessul");
  })
  .catch((err) => {
    console.log(err);
  });

//connecting mongoose
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.listen(8080, (req, res) => {
  console.log("port is listening ");
});

app.get("/", (req, res) => {
  res.send("working");
});

// this is adding an new list to listing module created in listing.js and reuired here
app.get("/listing", (req, res) => {
  let samplelist = new listing({
    title: "ashre",
    descrition: "i am good",
    price: 1200,
    location: "goa",
    country: "india",
  });
  samplelist.save();
  console.log("data saved and working ");
  res.send("sucessfull");
});
