import React, { useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';

var RatingBar = ({rating}) => {

  const { reviewsTotal } = useContext(ContextObj);

  var setPercentage = (rating) => {
    if (rating === undefined) {
      return 0;
    }

    return (Math.round((rating / reviewsTotal) * 100));
  };

  return (
    <svg viewBox="0 0 950 190" className='ratingBar'>
      <rect className='rating__background' alt='progress bar' clipPath="url(#bar)"></rect>
      <rect width={setPercentage(rating) + '%'} alt='progress bar' className='rating__value' clipPath="url(#bar)"></rect>
    </svg>
  );
};

export default RatingBar;