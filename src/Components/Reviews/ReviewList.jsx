import React, { useState, useEffect } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = ({reviews, setReviews, setLimit, reviewsLimit }) => {
  var func = (array) => {
    var temp = array.slice();
    temp = temp.splice(0, reviewsLimit);
    return temp;
  };
  // var temp = reviews;
  // temp = temp.splice(0, reviewsLimit);
  return (
    <div className='reviewList'>
      {func(reviews).map((review) =>
        <ReviewListEntry review={review} setReviews={setReviews} key={review.review_id} />
      )}
      <button className='moreReviews' onClick={()=>setLimit(reviewsLimit + 2)}>MORE REVIEWS</button>
      <button className='addReview'>ADD REVIEW +</button>
    </div>
  );
};

export default ReviewList;