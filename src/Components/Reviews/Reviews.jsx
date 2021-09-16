import React, { useState, useContext, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import './styles.css';
import { getServer, grabReviewScore, formatDate } from '../../helpers';
import { ContextObj } from '../../ContextObj';

var Review = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewsLimit, setLimit] = useState(2);
  const [sortStr, setsortStr] = useState('');
  const { productInfo } = useContext(ContextObj);
  const id = productInfo.id;

  useEffect(() => {
    getServer(`/reviews/?product_id=${40380}`)
      .then((result) => { setReviews(result.results); });
  }, [productInfo]);

  useEffect(() => {
    getServer(`/reviews/?product_id=${40380}&sort=${sortStr}`)
      .then((result) => { setReviews(result.results); });
  }, [sortStr]);


  return (
    <div>
      <h4>Ratings & Reviews</h4>
      <div className='reviews'>
        <ReviewBreakdown reviews={reviews} />
        <ReviewList reviews={reviews} setReviews={setReviews} setLimit={setLimit} reviewsLimit={reviewsLimit} setsortStr={setsortStr}/>
      </div>
    </div>
  );
};

export default Review;
