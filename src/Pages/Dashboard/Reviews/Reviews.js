import { TextField } from "@mui/material";
import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviews = { ...reviews };
    newReviews[field] = value;
    setReviews(newReviews);
  };

  const handleProductSubmit = (e) => {
    // Collect Data from form to send Server..
    fetch(`https://thawing-crag-19500.herokuapp.com/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Submitted Successfully");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div className="title">
          <h1 className=" mt-3 text-uppercase" style={{ textAlign: "center" }}>
            <span>Give Feed Back</span>
          </h1>
        </div>
        <form onSubmit={handleProductSubmit}>
          <TextField
            required
            label="Your Name"
            sx={{ width: "50%", mt: 3 }}
            id="outlined-size-small"
            size="small"
            name="User_Name"
            onBlur={handleOnBlur}
          />
          <br />
          <textarea
            required
            className="mt-3 rating-input"
            onBlur={handleOnBlur}
            type="text"
            name="comment"
            maxlength="500"
            minlength="30"
            placeholder="Your Comment (min:30char.)"
          />
          <br />
          <div className="">
            <input
              required
              className="mt-3 rating-input"
              onBlur={handleOnBlur}
              type="number"
              name="ratings"
              min="0"
              max="5"
              placeholder="Give Feed Back Out of 5"
            />
          </div>
          <br />
          <button type="submit" className="reg-btn mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
