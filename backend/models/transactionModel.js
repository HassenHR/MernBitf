const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
      min: 15,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
