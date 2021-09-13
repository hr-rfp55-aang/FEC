import React, { useState } from 'react';

var ReviewListEntry = ({ review, setReviews, formatDate }) => {

  return (
    (review.response) ?
      < div id='reviewEntry' >
        <div id='rating'>Rating: {review.rating}</div>
        <div id='date'>{review.reviewer_name + '   ' + formatDate(review.date)}</div>
        <div id='summary'><b>{review.summary}</b></div>
        <div id='body'>{review.body}</div>
        <div id='response'>Response: <br></br> <br></br>{review.response}</div>
        <div id='helpful'>Helpful? <u>Yes({review.helpfulness})</u>  | <u>Report</u> </div>
      </div > :
      <div id='reviewEntry'>
        <div id='rating'>Rating: {review.rating}</div>
        <div id='date'>{review.reviewer_name + '   ' + formatDate(review.date)}</div>
        <div id='summary'><b>{review.summary}</b></div>
        <div id='body'>{review.body}</div>
        <div id='helpful'>Helpful? <u>Yes({review.helpfulness})</u> | <u>Report</u> </div>
      </div>
  )
}

export default ReviewListEntry;