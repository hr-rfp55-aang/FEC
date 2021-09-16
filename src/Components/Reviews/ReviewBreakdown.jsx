import React, { useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import StarRating from './StarRatings.jsx';
import RatingBar from './RatingBar.jsx';

var ReviewBreakdown = ({ reviews }) => {
  const { ratingAvg } = useContext(ContextObj);

  return (
    <div className='reviewBreakdown'>
      <div>
        <h1>{ratingAvg}</h1>
        <StarRating />
      </div>
      <h6>100% of reviewers recomend this product</h6>
      <h5>5 stars <RatingBar /></h5>
      <h5>4 stars</h5>
      <h5>3 stars</h5>
      <h5>2 stars</h5>
      <h5>1 stars</h5>
    </div>
  );
};

export default ReviewBreakdown;