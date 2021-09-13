import React, { useState } from 'react';

var ReviewListEntry = ({review, setReviews, formatDate}) => {

  return (
    <div>
      <div>Rating: {review.rating}</div>
      <div><b>{review.summary}</b></div>
      <div>{review.body}</div>
      <div>{review.response}</div>
      <div>{review.reviewer_name + ', ' + formatDate(review.date)}</div>
      <div>Helpful? Yes ({review.helpfulness}) | Report </div>
    </div>
  )
}

export default ReviewListEntry;