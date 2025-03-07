const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
  balance: {type: Number, default: 0},
  currency: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    unique: true,
  },
});

module.exports = mongoose.model("wallet", walletSchema);
