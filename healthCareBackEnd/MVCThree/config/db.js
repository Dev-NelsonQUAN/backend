const mongoose = require("mongoose");

const { MONGODB_URL } = process.env;

const dbConfig = async () => {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("Connected to db")
    }
    catch (err) {
        console.log("An error connecting to Db", err)
    }
}

module.exports = dbConfig