import { React, useState, useEffect } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetch(`https://thawing-crag-19500.herokuapp.com/reviews`)
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);
  return (
    <div className="my-5">
      <div className="title">
        <h1 className="text-center mt-5 text-uppercase">
          <span>Client Says</span>
        </h1>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-5 g-4 mt-2">
          {clients.map((client) => (
            <Review key={client._id} client={client}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
