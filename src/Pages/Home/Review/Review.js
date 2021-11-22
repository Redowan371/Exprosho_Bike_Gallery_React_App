import React from "react";
import Rating from "react-rating";

const Review = ({ client }) => {
  const { User_Name, ratings, comment } = client;
  const shortComment = comment.slice(0, 30);
  return (
    <div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{User_Name}</h5>
            <Rating
              readonly
              initialRating={ratings}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
            />
            <p class="card-text">{shortComment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
