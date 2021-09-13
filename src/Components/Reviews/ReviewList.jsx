import React, { useState } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx'

const ReviewList = ({reviews, setReviews}) => {

  return (
    <div>
      {reviews.results.map((review) =>
        <ReviewListEntry review={review} setReviews={setReviews}/>
      )}
    </div>
  )
}

export default ReviewList;