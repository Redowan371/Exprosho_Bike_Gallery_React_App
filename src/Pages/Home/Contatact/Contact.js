import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="title mt-5">
        <h1 className="text-center mt-5 mb-3 text-uppercase">
          <span>Get In Touch</span>
        </h1>
      </div>
      <div className="container my-5">
        <div className="row mt-2">
          <div className="col-md-5 contact-text">
            <h3>
              Don’t hesitate to contact us <br /> if you need more help.{" "}
            </h3>
            <h5>London</h5>
            <p>Baker Street 223b London, CA 70413</p>
            <span>Open: 9:30 AM 5:30PM</span>
            <h5>New York</h5>
            <p>477-463 Broadway, NY 10013</p>
            <span>Open: 8:30 AM 4:30PM</span>
            <h5>Contacts</h5>
            <p>+44 (800) 456-37-11</p>
            <span>team@example.com</span>
          </div>
          <div className="col-md-7 text-center contact-form ">
            <h5>WRITE TO US</h5>
            <input className="w-100 mt-3 p-2" type="text" placeholder="Name" />
            <input
              className="w-100 mt-3 p-2"
              type="email"
              placeholder="email"
            />
            <textarea
              className="w-100 mt-3 p-2"
              placeholder="Your Comments"
              rows="6"
            ></textarea>
            <br />
            <button className="reg-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
