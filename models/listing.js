const mongoose = require("mongoose");

const schema = mongoose.Schema; // schema required from mongoose

//schema created
const listingschema = new schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://imgs.search.brave.com/yFLPbMIn1BcTxuf2Sqm0lzSzvXIsfTju2QOAnbQ-buk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzQzLzkwLzM3/LzM2MF9GXzQzOTAz/NzMyX1gxWjJnenk0/OTdhaXNnTUU2MmNy/bVUwMFNmOHNtUDU5/LmpwZw",
    set: (v) =>
      v === ""
        ? "https://imgs.search.brave.com/yFLPbMIn1BcTxuf2Sqm0lzSzvXIsfTju2QOAnbQ-buk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzQzLzkwLzM3/LzM2MF9GXzQzOTAz/NzMyX1gxWjJnenk0/OTdhaXNnTUU2MmNy/bVUwMFNmOHNtUDU5/LmpwZw"
        : v, // its like if else if v is empty then deualt else v
  },
  price: Number,
  location: String,
  country: String,
});

// model for schema created
const listing = mongoose.model("listing", listingschema);
module.exports = listing; // module exported
