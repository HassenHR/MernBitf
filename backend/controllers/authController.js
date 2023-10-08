const userModel = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// GENERATE TOKEN
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// REGISTER
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await userModel.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const user = await userModel.create({
    name,
    email,
    password: hashedPass,
  });

  const token = generateToken(user._id);

  res.cookie("token", token, {
    expires: new Date(Date.now() + 1000 * 84600),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  if (user) {
    const { _id, name, email } = user;
    res.status(200).json({ _id, name, email, token });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// LOGIN
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("User not registered");
  }

  const correctPass = await bcrypt.compare(password, user.password);

  if (!correctPass) {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }

  const token = generateToken(user._id);

  res.cookie("token", token, {
    expires: new Date(Date.now() + 1000 * 84600),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  if (user && correctPass) {
    const { _id, name, email } = user;
    res.status(200).json({ _id, name, email, token });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});

// LOGOUT
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(Date.now(0)),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  return res.status(200).json({ msg: " User logged out" });
});

// PROFILE
const getUser = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user._id);

  if (user) {
    const { _id, name, email } = user;
    res.status(200).json({
      _id,
      name,
      email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// GET LOGIN STATUS
const loginStatus = asyncHandler(async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json(false);
  }

  // if token is there - Verify it
  const verified = jwt.verify(token, process.env.JWT_SECRET);

  if (verified) {
    return res.json(true);
  } else {
    return res.json(false);
  }
});

// UPDATE USER
const updateUser = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user._id);

  if (user) {
    const { _id, name, email } = user;
    user.email = email;
    user.name = req.body.name || name;

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  loginStatus,
  updateUser,
};
