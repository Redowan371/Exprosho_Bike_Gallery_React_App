import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const productsShort = products.slice(0, 6);
  useEffect(() => {
    fetch(`https://thawing-crag-19500.herokuapp.com/product`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-5">
      <div className="title">
        <h1 className="text-center mt-5 mb-3 text-uppercase">
          Our <span>Product</span>
        </h1>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {productsShort.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
