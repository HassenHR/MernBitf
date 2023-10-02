const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const parser = require("ua-parser-js");
const { generateToken } = require("../utils/tokenDetails");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be up to 6 characters");
  }

  const userExists = await userModel.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // GET User Agent
  const ua = parser(req.headers["user-agent"]);
  console.log(ua);

  const user = await userModel.create({ name, email, password });
  const userAgent = [ua.ua];

  // generate TOKEN
  const token = generateToken(user._id);

  // SEND HTTP ONLY COOKIE
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 DAY
    sameSite: "none",
  });

  if (user) {
    const { _id, name, email, password, role } = user;
    res
      .status(201)
      .json({ _id, name, email, password, role, token, userAgent });
  } else {
    res.status(500);
    throw new Error("Server erro. Please try again");
  }
});

// LOGIN USER
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const user = await userModel.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("User not registered");
  }

  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  if (!passwordIsCorrect) {
    res.status(400);
    throw new Error("Invalid email or password");
  }

  // 2FA for unknown devices

  // Generate token
  const token = generateToken(user._id);

  if (user && passwordIsCorrect) {
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 1000 * 84600),
      sameSite: "none",
    });

    const { _id, name, email, role } = user;
    res.status(200).json({ _id, name, email, role, token });
  } else {
    res.status(500);
    throw new Error("Something went wrong. Please try");
  }
});

// LOGOUT USER
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    sameSite: "none",
    expires: new Date(0),
    secure: true,
  });
  return res.status(200).json({ msg: "User logged out" });
});

// get tUser
const getUser = asyncHandler(async (req, res) => {
  res.send({ msg: "GET user" });
});

module.exports = { registerUser, loginUser, logoutUser, getUser };
