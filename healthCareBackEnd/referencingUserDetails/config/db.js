const mongoose = require("mongoose");
require("dotenv/config");
const { MONGODB_URL } = process.env;

const connectdb = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connecting to Db");
  } catch (err) {
    console.log("Error connecting to DB", err.message);
  }
};

module.exports = connectdb;
