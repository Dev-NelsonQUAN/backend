const mongoose = require("mongoose");

require("dotenv/config");

const { MONGODB_URL2 } = process.env;

const dataConfig = async () => {
  try {
    await mongoose.connect(MONGODB_URL2);
    console.log("Connected to DB");
  } catch (err) {
    console.log("An error occurred", err);
  }
};

module.exports = dataConfig;
