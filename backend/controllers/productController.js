const asyncHandler = require("express-async-handler");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await productModel
    .find({ user: req.user.id })
    .sort("-createdAt");

  if (!products) {
    return res.status(404).json({ msg: "No products yet. Please create" });
  }

  res.status(200).json(products);
});

const createProduct = asyncHandler(async (req, res) => {
  const { title, desc, price } = req.body;

  const product = await productModel.create({
    user: req.user.id,
    title,
    desc,
    price,
  });

  res.status(201).json(product);
});

const getOneProduct = asyncHandler(async (req, res) => {
  const product = await productModel.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  if (product.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("You are not authorized to access this product");
  }
  res.status(200).json(product);
});

// UPDATE
const updateProduct = asyncHandler(async (req, res) => {
  const product = await productModel.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  if (product.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("You are not authorized to update this product");
  }

  const productToUpdate = await productModel.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );

  res.status(200).json(productToUpdate);
});

// DELETE
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await productModel.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  if (product.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("You are not authorized to delete this product");
  }

  if (product.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("You are not authorized to delete this product");
  }

  const deletedProd = await productModel.findByIdAndDelete(product);
  res.status(200).json({ msg: "Product deleted successfully" });
});

module.exports = {
  getProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  createProduct,
};
