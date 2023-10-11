import React, { useEffect } from "react";
import { getSingleProduct } from "../redux/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedin } from "../redux/features/auth/authSlice";
import useRedirectLoggedOutUser from "../customHook/useRedirectLoggedOutUser";
import { Link, useParams } from "react-router-dom";

function ProductDetail() {
  useRedirectLoggedOutUser("/login");

  const { id } = useParams();

  const dispatch = useDispatch();
  const isLoggedin = useSelector(selectIsLoggedin);
  const { product, isError } = useSelector((state) => state.product);

  useEffect(() => {
    if (isLoggedin === true) {
      dispatch(getSingleProduct(id));
    }

    if (isError) {
      console.log(isError);
    }
  }, [isLoggedin, dispatch, isError]);

  return (
    <div>
      <h1>Product Details page</h1>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <h4>{product.price}</h4>
        </div>
      )}
      <Link to="/dashboard">Back to dashboard</Link>
    </div>
  );
}

export default ProductDetail;
