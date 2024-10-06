const mongoose = require("mongoose");
const initdata = require("./data.js");
const listing = require("../models/listing.js");

main().then(() => {
  console.log("connected to db");
});
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initdb = async () => {
  await listing.deleteMany({});
  await listing.insertMany(initdata.data);
  console.log("data was initialized");
};

initdb();
