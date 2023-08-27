const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await userModel.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already registered");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      name,
      email,
      password: hashedPass,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400);
    throw new Error("Unable to register user");
  }
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(401);
      throw new Error("User not registered. Try registering");
    }

    const confirmPass = await bcrypt.compare(password, user.password);

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });

    if (user && confirmPass) {
      res.status(200).json({ ...user._doc, token });
    }
  } catch (error) {
    res.status(400);
    throw new Error("Unable to login user");
  }
};

module.exports = {
  register,
  login,
};
