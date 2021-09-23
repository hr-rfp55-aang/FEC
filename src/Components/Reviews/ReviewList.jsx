import React, { useState, useEffect, useContext } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import { ContextObj } from '../../ContextObj.jsx';
import ReviewModal from './ReviewModal.jsx';

const ReviewList = ({ reviews, setReviews, setLimit, reviewsLimit, setsortStr, setCurReview, setReport, filters, setSubmitReview, submitReview}) => {
  const { reviewsTotal } = useContext(ContextObj);

  var limitReviews = (array) => {
    var temp = array.slice();
    temp = temp.splice(0, reviewsLimit);
    return temp;
  };


  return (
    <div className='reviewList'>
      {limitReviews(reviews).filter((value) => {
        if (!filters.length) {
          return value;
        } else if (filters.indexOf(value.rating) !== -1) {
          return value;
        }
      }).map((review) =>
        <ReviewListEntry review={review} setReviews={setReviews} setCurReview={setCurReview} setReport={setReport} key={review.review_id} />
      )}
      <ReviewModal submitReview={submitReview} setSubmitReview={setSubmitReview} setReviews={setReviews}/>
    </div>
  );
};

export default ReviewList;