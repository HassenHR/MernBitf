import React, { useEffect } from "react";
import Header from "../components/Header";
import useRedirectLoggedOutUser from "../customHook/useRedirectLoggedOutUser";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedin } from "../redux/features/auth/authSlice";
import { getAllProducts } from "../redux/features/product/productSlice";
import ProductList from "../components/ProductList";

export default function Dashboard() {
  useRedirectLoggedOutUser("/login");

  const dispatch = useDispatch();

  const isLoggedin = useSelector(selectIsLoggedin);
  const { products, isError } = useSelector((state) => state.product);

  useEffect(() => {
    if (isLoggedin === true) {
      dispatch(getAllProducts());
    }

    if (isError) {
      console.log(isError);
    }
  }, [isLoggedin, dispatch, isError, products]);

  return (
    <div>
      <Header />
      <section>
        <h1>DASHBOARD</h1>
        <ProductList products={products} />
      </section>
    </div>
  );
}
