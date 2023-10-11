import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function EditProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  return <div>EditProductPage</div>;
}

export default EditProductPage;
