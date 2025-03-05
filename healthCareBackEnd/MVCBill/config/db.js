const mongoose = require("mongoose");
require("dotenv/config");
const { MONGODB_URL } = process.env;

const connectDb = () => {
  mongoose
    .connect(MONGODB_URL)
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log("Error connecting"));
};

module.exports = connectDb;

// const mongoose = require("mongoose");
// require("dotenv/config");

// const { MONGODB_URL } = process.env;

// const connectTheDb = async () => {
//     // mongoose.connect(MONGODB_URL)
//     // .then(() => {
//     //     console.log("Connected")
//     // })
//     // .catch((err) => {
//     //     console.log(err.message)
//     // })
//   try {
//     await mongoose.connect(MONGODB_URL);
//     console.log("Connected to DB");
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// module.exports = connectTheDb
