import axios from "axios";

// CREATE PRODUCT
const createProduct = async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/products/",
    formData
  );
  return response.data;
};

// GET ALL PRODUCTS
const getAllProducts = async () => {
  const response = await axios.get("http://localhost:5000/api/products/");
  return response.data;
};

// DELETE PRODUCT
const deleteProduct = async (id) => {
  const response = await axios.delete(
    `http://localhost:5000/api/products/${id}`
  );
  return response.data;
};

// GET SINGLE PRODUCT
const getSingleProduct = async (id) => {
  const response = await axios.get(`http://localhost:5000/api/products/${id}`);
  return response.data;
};

const productService = {
  createProduct,
  getAllProducts,
  deleteProduct,
  getSingleProduct,
};

export default productService;
