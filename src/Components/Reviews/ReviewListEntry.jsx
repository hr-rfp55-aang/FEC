import React, { useState, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';

var ReviewListEntry = ({ review, setReviews }) => {
  const { formatDate } = useContext(ContextObj);

  return (
    (review.response) ?
      <div className='reviewEntry' >
        <div className='rating'>Rating: {review.rating}</div>
        <div className='date'>{review.reviewer_name + ',' + formatDate(review.date)}</div>
        <div className='summary'><b>{review.summary}</b></div>
        <div className='body'>{review.body}</div>
        <div className='response'>Response: <br></br> <br></br>{review.response}</div>
        <div className='helpful'>Helpful? <u>Yes({review.helpfulness})</u>  | <u>Report</u> </div>
      </div > :
      <div className='reviewEntry'>
        <div className='rating'>Rating: {review.rating}</div>
        <div className='date'>{review.reviewer_name + '   ' + formatDate(review.date)}</div>
        <div className='summary'><b>{review.summary}</b></div>
        <div className='body'>{review.body}</div>
        <div className='helpful'>Helpful? <u>Yes({review.helpfulness})</u> | <u>Report</u> </div>
      </div>
  );
};

export default ReviewListEntry;