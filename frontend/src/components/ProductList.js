import React from "react";

function ProductList({ products }) {
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
                      <button>edit</button>
                      <button>remove</button>
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
