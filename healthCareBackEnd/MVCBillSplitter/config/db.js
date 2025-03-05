const mongoose = require('mongoose')
require('dotenv/config')

const {MONGODB_URL} = process.env

const connectDb = async() =>  {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("Connected to DB")
    } catch (error) {
        console.log("Error connectig to DB")
    }
}

module.exports = connectDb