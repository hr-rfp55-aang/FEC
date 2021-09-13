import React, { useState } from 'react';

var ReviewListEntry = ({review, setReviews}) => {
  var formatDate = (date) => {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date(date);
    return months[now.getMonth()] + ' ' + (now.getDate() + 1 ) + ', ' + now.getFullYear();
  }

  return (
    <div>
      <div>Rating: {review.rating}</div>
      <div><b>{review.summary}</b></div>
      <div>{review.body}</div>
      <div>{review.response}</div>
      <div>{review.reviewer_name + ', ' + formatDate(review.date)}</div>
      <div>{review.helpfulness}</div>
    </div>
  )
}

export default ReviewListEntry;