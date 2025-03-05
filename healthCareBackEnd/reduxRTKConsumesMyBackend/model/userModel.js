const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "profile",
  },
});

module.exports = mongoose.model("user", userSchema);
