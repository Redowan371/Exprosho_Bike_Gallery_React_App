import React from "react";
import Banner from "../../Sheared/Banner/Banner";
import Footer from "../../Sheared/Footer/Footer";
import Menubar from "../../Sheared/Menubar/Menubar";
import About from "../About/About";
import Contact from "../Contatact/Contact";
import Reviews from "../Reviews/Reviews";
import Products from "./Products/Products";

const Home = () => {
  return (
    <div>
      <Menubar />
      <Banner />
      <About />
      <Products />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
