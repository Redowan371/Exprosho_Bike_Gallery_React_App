import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import slider1 from "../../../images/slaider.png";
import slider2 from "../../../images/slider2.png";
import slider3 from "../../../images/slider3.png";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="container c-item">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div>
                <h3>Best Deal</h3>
                <h1>15% - 20% Off</h1>
                <p>
                  The INTRUDER 155CC establishes Suzuki in the cruiser segment
                  by giving a unique exposure to Suzuki’s international Intruder
                  heritage
                </p>
              </div>
            </div>
            <div className="col-md-6  c-img ">
              <img src={slider1} alt="" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container c-item">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div>
                <h3>Best Deal</h3>
                <h1>25% - 30% Off</h1>
                <p>
                  The INTRUDER 155CC establishes Suzuki in the cruiser segment
                  by giving a unique exposure to Suzuki’s international Intruder
                  heritage
                </p>
              </div>
            </div>
            <div className="col-md-6  c-img ">
              <img src={slider2} alt="" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container c-item">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div>
                <h3>Best Deal</h3>
                <h1>35% - 40% Off</h1>
                <p>
                  The INTRUDER 155CC establishes Suzuki in the cruiser segment
                  by giving a unique exposure to Suzuki’s international Intruder
                  heritage
                </p>
              </div>
            </div>
            <div className="col-md-6  c-img ">
              <img src={slider3} alt="" />
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
