import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllProducts,
  getSingleProduct,
  selectProduct,
  updateProduct,
} from "../redux/features/product/productSlice";

function EditProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const productEdit = useSelector(selectProduct);

  const [product, setProduct] = useState(productEdit);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  const { title, desc, price } = product;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  useEffect(() => {
    setProduct(productEdit);
  }, [productEdit]);

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = { title, desc, price };
    await dispatch(updateProduct({ id, formData }));
    await dispatch(getAllProducts());
    navigate("/dashboard");
  };

  return (
    <div className="center">
      <h1>Edit Product</h1>
      <form onSubmit={saveProduct}>
        <input
          name="title"
          value={product.title}
          type="text"
          onChange={handleInputChange}
          placeholder="Product Title"
        />
        <input
          name="desc"
          value={product.desc}
          type="text"
          onChange={handleInputChange}
          placeholder="Product Brief Desc"
        />
        <input
          name="price"
          value={product.price}
          type="number"
          onChange={handleInputChange}
          placeholder="Product Price"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditProductPage;
