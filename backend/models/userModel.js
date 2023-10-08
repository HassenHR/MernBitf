const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  { timestamps: true, minimize: false }
);

module.exports = mongoose.model("User", userSchema);
