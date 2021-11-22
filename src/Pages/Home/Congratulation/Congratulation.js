import React from "react";
import { Link } from "react-router-dom";
import CongratulationImg from "../../../images/congratulation.gif";

const Congratulation = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "100%", height: "80vh" }}
        src={CongratulationImg}
        alt=""
      />
      <Link to="/home">
        <button className="reg-btn mt-5">Go Back Home</button>
      </Link>
    </div>
  );
};

export default Congratulation;
