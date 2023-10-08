const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  loginStatus,
  updateUser,
} = require("../controllers/authController");

const { protect } = require("../middleware/protect");

const router = require("express").Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/getUser", protect, getUser);
router.get("/loggedin", loginStatus);
router.patch("/updateUser", protect, updateUser);

module.exports = router;
