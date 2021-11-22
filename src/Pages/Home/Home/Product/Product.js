import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const {
    _id,
    img,
    product_name,
    product_description,
    mileage,
    engine,
    weight,
  } = props.product;
  const description = product_description.slice(0, 100);
  return (
    <div className="col">
      <div className="card">
        <img
          style={{ height: "250px" }}
          src={img}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product_name}</h5>
          <p className="card-text">{description}......</p>
          <div className="d-flex justify-content-between">
            <p>
              <strong> Mileage:</strong> <small>{mileage}</small>
            </p>
            <p>
              <strong> Engine:</strong> <small>{engine}</small>
            </p>
          </div>
          <p>
            <strong> Weight:</strong> <small>{weight}</small>
          </p>
          <div className="product-btn">
            <Link to={`/placeOrder/${_id}`}>
              <button className="reg-btn">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
