const express = require("express");
const transactionModel = require("../models/transactionModel");
const router = express();

// Create transaction
router.post("/", async (req, res) => {
  const { amount, desc, date } = req.body;

  const transaction = await transactionModel.create({ amount, desc, date });

  res.status(201).json(transaction);
});

// Get all transaction
router.get("/", async (req, res) => {
  const transactions = await transactionModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(transactions);
});

// Delete transaction
router.delete("/:id", async (req, res) => {
  await transactionModel.findByIdAndDelete(req.params.id);
  res.status(200).json({ msg: "Transaction deleted" });
});

router.patch("/:id");

module.exports = router;
