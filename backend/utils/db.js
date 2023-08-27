const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB & Server runs");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
