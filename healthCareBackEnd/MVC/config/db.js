const mongoose = require("mongoose");
require("dotenv/config");

const { MONGODB_URL } = process.env;

const dbConfig = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to db");
  } catch (err) {
    console.log("An eror occurred", err);
  }
};

module.exports = dbConfig;
