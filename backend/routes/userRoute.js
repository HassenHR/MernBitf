const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
} = require("../containers/userContainer");
const protect = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/getUser", protect, getUser);

module.exports = router;
