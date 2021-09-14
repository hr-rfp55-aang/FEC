import React, { useState, useContext, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import './reviewsCss.css';
import { ContextObj } from '../../ContextObj.jsx';

var Review = () => {
  const [reviews, setReviews] = useState({results: []});
  const { getServer, productInfo } = useContext(ContextObj);
  const id = productInfo.id;
  console.log(id);

  useEffect(() => {
    getServer(`/reviews/?product_id=${40380}`, (result)=> setReviews(result));
  }, [productInfo]);

  return (
    <div>
      <h4>Ratings & Reviews</h4>
      <div className='reviews'>
        <ReviewBreakdown reviews={reviews} />
        <ReviewList reviews={reviews} setReviews={setReviews} />
      </div>
    </div>
  );
};

export default Review;
