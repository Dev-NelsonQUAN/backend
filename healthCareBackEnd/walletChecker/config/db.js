const mongoose = require("mongoose")
require("dotenv/config")
const {MONGODB_URL} = process.env

const connectDb = async() => {
  try {
    await mongoose.connect(MONGODB_URL)
    console.log("Connected to DB")
  }
  catch (err) {
   console.log("Error connecting to Db")
  }
}

module.exports = connectDb