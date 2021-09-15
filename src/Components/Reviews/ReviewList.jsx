import React, { useState, useEffect, useContext } from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import { ContextObj } from '../../ContextObj.jsx';

const ReviewList = ({ reviews, setReviews, setLimit, reviewsLimit, setsortStr}) => {
  const { reviewsTotal } = useContext(ContextObj);

  var func = (array) => {
    var temp = array.slice();
    temp = temp.splice(0, reviewsLimit);
    return temp;
  };


  return (
    <div className='reviewList'>
      <div>{reviewsTotal} reviews, sorted by relevance</div>
      <select name="selectList" onChange={(e)=>setsortStr(e.target.value)}>
        <option value="relevance">relevance</option>
        <option value="helpful">helpfulness</option>
        <option value="newest">newest</option>
      </select>
      {func(reviews).map((review) =>
        <ReviewListEntry review={review} setReviews={setReviews} key={review.review_id} />
      )}
      <button className='moreReviews' onClick={() => setLimit(reviewsLimit + 2)}>MORE REVIEWS</button>
      <button className='addReview'>ADD REVIEW +</button>
    </div>
  );
};

export default ReviewList;