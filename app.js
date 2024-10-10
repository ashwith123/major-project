const express = require("express");
const app = express();
const listing = require("./models/listing.js");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

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
//index rout
app.get("/listing", async (req, res) => {
  let alllistings = await listing.find({});
  res.render("./listings/index.ejs", { alllistings });
});
//show rout
app.get("/listing/:id", async (req, res) => {
  let { id } = req.params;
  let alllistings = await listing.findById(id);
  res.render("./listings/show.ejs", { alllistings });
});

// new listing rout
app.get("/listings/new", (req, res) => {
  res.render("./listings/new.ejs");
});

//inserting

app.post("/listings", async (req, res) => {
  const newlisting = new listing(req.body.listing); // important i wriiten this instead of let {title}=req.params
  await newlisting.save();
  res.redirect("/listing"); // Redirect to the index page after saving
});

//edit rout
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listingz = await listing.findById(id);
  res.render("./listings/edit.ejs", { listingz });
});

// update rout

app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listing`);
});

//delete rout

app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await listing.findByIdAndDelete(id);
  console.log(id);
  res.redirect("/listing");
});

// // this is adding an new list to listing module created in listing.js and reuired here
// app.get("/listing", (req, res) => {
//   let samplelist = new listing({
//     title: "ashre",
//     descrition: "i am good",
//     price: 1200,
//     location: "goa",
//     country: "india",
//   });
//   samplelist.save();
//   console.log("data saved and working ");
//   res.send("sucessfull");
// });
