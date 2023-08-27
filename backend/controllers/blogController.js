const blogModel = require("../models/blogModel");

const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await blogModel.find({}).populate("userId", "-password");
    res.status(200).json(allBlogs);
  } catch (error) {
    res.status(404).json({ msg: "Unable to fetch blogs", error });
  }
};

const getOneBlog = async (req, res) => {
  try {
    const blog = await blogModel
      .findById(req.params.id)
      .populate("userId", "-password");
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ msg: "Unable to fetch the specified blog", error });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, desc, photo } = req.body;

    const blog = await blogModel.create({
      userId: req.user._id,
      title,
      desc,
      photo,
    });
    res.status(201).json(blog);
  } catch (error) {
    return res.status(200).json({ msg: "Error to create a blog", error });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params._id);

    if (blog.userId.toString() !== req.user.id) {
      throw new Error("Unable to update blog");
    }

    const updatedBlog = await blogModel
      .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .populate("userId", "-password");

    res.status(200).json(updateBlog);
  } catch (error) {}
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);

    if (blog.userId.toString() !== req.user.id) {
      res.status(401);
      throw new Error("Unable to delete this blog");
    }

    await blogModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Blog successfully deleted" });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllBlogs,
  getOneBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
