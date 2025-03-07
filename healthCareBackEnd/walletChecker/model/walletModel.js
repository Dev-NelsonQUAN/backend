const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
  owner: String,
  balance: {type: Number, default: 0},
  currency: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    unique: true,
  },
});

module.exports = mongoose.model("wallet", walletSchema);
