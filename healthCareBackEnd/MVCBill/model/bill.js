const { Schema, model } = require("mongoose");

const BillSchema = new Schema({
  billName: String,
  totalAmount: Number,
  participants: [
    {
      name: String,
      amountOwed: Number,
      amountPaid: { type: Number, default: 0 },
    },
  ],
});

const Bill = new model("theBlls", BillSchema);

module.exports = Bill;
