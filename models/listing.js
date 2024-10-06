const mongoose = require("mongoose");

const schema = mongoose.Schema; // schema required from mongoose

//schema created
const listingschema = new schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  location: String,
  country: String,
});

// model for schema created
const listing = mongoose.model("listing", listingschema);
MediaSourceHandle.export = listing; // schema exported
