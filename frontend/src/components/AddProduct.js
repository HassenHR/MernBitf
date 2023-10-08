import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../redux/features/product/productSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  desc: "",
  price: "",
};

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(initialState);

  const { title, desc, price } = product;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = { title, desc, price };
    await dispatch(createProduct(formData));
    navigate("/dashboard");
  };

  return (
    <div className="center">
      <h1>Add Product</h1>
      <form onSubmit={saveProduct}>
        <input
          name="title"
          value={title}
          type="text"
          onChange={handleInputChange}
          placeholder="Product Title"
        />
        <input
          name="desc"
          value={desc}
          type="text"
          onChange={handleInputChange}
          placeholder="Product Brief Desc"
        />
        <input
          name="price"
          value={price}
          type="number"
          onChange={handleInputChange}
          placeholder="Product Price"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddProduct;
