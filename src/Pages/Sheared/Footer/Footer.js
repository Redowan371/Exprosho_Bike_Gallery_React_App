import React from "react";
import "./Footer.css";
import logo from "../../../images/logo.png";
import { FaFacebookF, FaTwitter, FaVimeoV, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer pb-2">
      <div className="px-3 logo-bg">
        <div className="row pt-5">
          <div className="col-md-3">
            <div className="title">
              <h1>
                <img src={logo} alt="" />
              </h1>
              <p>
                We support programs that create advancement opportunities for
                people.
              </p>
              <h4>Follow Us</h4>
              <div className="social-icon d-flex justify-content-center">
                <div className="facebook">
                  <i>
                    <FaFacebookF />
                  </i>
                </div>
                <div className="youtube">
                  <i>
                    <FaVimeoV />
                  </i>
                </div>
                <div className="twitter">
                  <i>
                    <FaTwitter />
                  </i>
                </div>
                <div className="instrgram">
                  <i>
                    <FaInstagram />
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h2>Address</h2>
            <h4>London</h4>
            <span>Baker Street 223b London, CA 70413</span>
            <p>Open: 9:30 AM 5:30PM</p>
            <h4>New York</h4>
            <span>477-463 Broadway, NY 10013</span>
            <p>Open: 8:30 AM 4:30PM</p>
          </div>
          <div className="col-md-3">
            <h2>Contact us</h2>
            <span>+44 (800) 456-37-11</span> <br />
            <span>team@example.com</span>
            <br />
            <br />
            <span>+1 (810) 446-31-11</span>
            <span>team2@example.com</span>
          </div>
          <div className="col-md-3 footer-input">
            <h2>Stay in touch</h2>
            <input type="email" placeholder="Your email" />
            <br /> <br />
            <button className="footer-btn">Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <small>This Website Created by Redowan</small>
    </div>
  );
};

export default Footer;
