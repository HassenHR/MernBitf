const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const protect = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(401);
      throw new Error("Not authorized. Please login");
    }

    // Verify token

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // GET USER ID FROM token
    const user = userModel.findById(verified.id).select("-password");

    if (!user) {
      res.status(404);
      throw new Error("Not authorized. User not found");
    }

    if (!user.role === "suspended") {
      res.status(400);
      throw new Error(
        "Not authorized. User is suspended. Please contact Support"
      );
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized. Please login");
  }
});

module.exports = protect;
