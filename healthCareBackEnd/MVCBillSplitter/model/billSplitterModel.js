const { Schema, model } = require("mongoose");

const billSplitterSchema = new Schema({
  billName: String,
  totalAmount: Number,
  date: { type: Date, default: Date.now },
  participants: [
    {
      name: String,
      amountOwed: Number,
      amountPaid: { type: Number, default: 0 },
    },
  ],
});

module.exports = billSplitterModel = model("billSplitter", billSplitterSchema);
