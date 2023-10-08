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

const productService = {
  createProduct,
  getAllProducts,
};

export default productService;
