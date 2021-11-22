import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../images/notFound.gif";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img style={{ width: "100%", height: "80vh" }} src={NotFoundImg} alt="" />
      <Link to="/home">
        <button className="reg-btn mt-5">Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
