const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const {
  getAllBlogs,
  getOneBlog,
  deleteBlog,
  updateBlog,
  createBlog,
} = require("../controllers/blogController");
const router = express();

router.post("/create", verifyToken, createBlog);
router.get("/all", getAllBlogs);
router.get("/all/:id", getOneBlog);
router.put("/update/:id", updateBlog);
router.delete("/delete/:id", verifyToken, deleteBlog);

module.exports = router;
