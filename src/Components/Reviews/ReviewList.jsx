import React, { useState } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = ({reviews, setReviews, formatDate}) => {

  return (
    <div className='reviewList'>
      {reviews.results.map((review) =>
        <ReviewListEntry review={review} setReviews={setReviews} formatDate={formatDate} key={review.review_id || null}/>
      )}
    </div>
  );
};

export default ReviewList;