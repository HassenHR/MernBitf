const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(401);
      throw new Error("Not Authorized. Please log in");
    }

    // verify token

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(verified.id).select("-password");

    if (!user) {
      res.status(401);
      throw new Error("Not Authorized. No user found");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not Authorized. Please log in");
  }
});

module.exports = { protect };
