import React, { useState } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx'

const ReviewList = ({reviews, setReviews, formatDate}) => {

  return (
    <div id='reviewList'>
      {reviews.results.map((review) =>
        <ReviewListEntry review={review} setReviews={setReviews} formatDate={formatDate}/>
      )}
    </div>
  )
}

export default ReviewList;