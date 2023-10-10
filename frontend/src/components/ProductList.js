import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  getAllProducts,
} from "../redux/features/product/productSlice";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  const dispatch = useDispatch();

  const delProduct = async (id) => {
    await dispatch(deleteProduct(id));
    await dispatch(getAllProducts());
  };

  return (
    <div>
      <hr />
      <div>
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          <div>
            <div>
              {products.map((product) => {
                const { _id, title, desc, price } = product;
                return (
                  <div key={_id} className="bx">
                    <div>
                      <h2>Name:</h2>
                      <h3>{title}</h3>
                    </div>
                    <div>
                      <h2>Description:</h2>
                      <p>{desc}</p>
                    </div>
                    <div>
                      <h2>Price:</h2>
                      <p>{price}</p>
                    </div>
                    <div>
                      <Link to={`/product-detail/${_id}`}>
                        <button>view</button>
                      </Link>
                      <button>edit</button>
                      <button onClick={() => delProduct(_id)}>remove</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
