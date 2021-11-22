import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import OrderModal from "../Home/OrederModal/OrderModal";

const PlaceOrder = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [openOrder, setOpenOrder] = React.useState(false);
  const handleOrderModalOpen = () => setOpenOrder(true);
  const handleOrderModalClose = () => setOpenOrder(false);
  useEffect(() => {
    fetch(`https://thawing-crag-19500.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, [id]);
  return (
    <div className="my-5">
      <div className="title">
        <h1 className="text-center mt-5 mb-3 text-uppercase">
          <span>Product</span> Details
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>PRODUCT NAME || 🏍{productDetails?.product_name}</h4>
            <p>Product_Description:{productDetails?.product_description}</p>
            <h5>Product_Price || 💰 {productDetails?.price}</h5>
            <h5>Product_Engine || 🚒 {productDetails?.engine}</h5>
            <h5>Product_Weight || 🏍 {productDetails?.weight}</h5>
            <h5>Product_Mileage || 🗺 {productDetails?.mileage}</h5>
            <Link>
              <button onClick={handleOrderModalOpen} className="reg-btn mt-5">
                Order Now
              </button>
            </Link>
          </div>
          <div className="col-md-6">
            <img
              style={{ height: "350px" }}
              className="w-100"
              src={productDetails?.img}
              alt=""
            />
          </div>
        </div>
      </div>
      <OrderModal
        productDetails={productDetails}
        openOrder={openOrder}
        handleOrderModalClose={handleOrderModalClose}
      ></OrderModal>
    </div>
  );
};

export default PlaceOrder;
