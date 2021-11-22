import React, { useEffect, useState } from "react";
import ProductMainSingle from "../ProductMainSingle/ProductMainSingle";

const ProductsMain = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://thawing-crag-19500.herokuapp.com/product`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="m-5">
      <div className="title">
        <h1 className="text-center mt-5 mb-5 text-uppercase">
          Our <span>Product</span>
        </h1>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
              <ProductMainSingle
                key={product._id}
                product={product}
              ></ProductMainSingle>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsMain;
