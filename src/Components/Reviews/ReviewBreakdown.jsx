import React, { useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';

var ReviewBreakdown = ({reviews}) => {
  const { ratingAvg } = useContext(ContextObj);

  return (
    <div className='reviewBreakdown'>
      <h1>{ratingAvg + ' ***'}</h1>
      <h6>100% of reviewers recomend this product</h6>
      <h5>5 stars</h5>
      <h5>4 stars</h5>
      <h5>3 stars</h5>
      <h5>2 stars</h5>
      <h5>1 stars</h5>
    </div>
  );
};

export default ReviewBreakdown;