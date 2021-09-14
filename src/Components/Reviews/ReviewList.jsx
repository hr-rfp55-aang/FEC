import React, { useState } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = ({reviews, setReviews }) => {

  return (
    <div className='reviewList'>
      {reviews.results.map((review) =>
        <ReviewListEntry review={review} setReviews={setReviews} key={review.review_id}/>
      )}
    </div>
  );
};

export default ReviewList;