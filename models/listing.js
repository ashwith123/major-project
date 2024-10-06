const mongoose = require("mongoose");

const schema = mongoose.Schema;

const listingschema = new schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  location: String,
  country: String,
});

const listing = mongoose.model("listing", listingschema);
MediaSourceHandle.export = listing;
