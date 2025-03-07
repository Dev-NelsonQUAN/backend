const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  wallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "wallet",
    unique: true,
  },
});

module.exports = mongoose.model("user", userSchema);
