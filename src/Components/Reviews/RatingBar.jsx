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
    <svg viewBox="0 0 1000 200" className='ratingBar'>
      {/* <defs>

        <polygon id="star" points="100,0 131,66 200,76 150,128 162,200 100,166 38,200 50,128 0,76 69,66 " />

        <clipPath id="stars">
          <use xlinkHref="#star" />
          <use xlinkHref="#star" x="20%" />
          <use xlinkHref="#star" x="40%" />
          <use xlinkHref="#star" x="60%" />
          <use xlinkHref="#star" x="80%" />
        </clipPath>

      </defs> */}

      <rect className='rating__background' clipPath="url(#bar)"></rect>

      <rect width={setPercentage(rating) + '%'} className='rating__value' clipPath="url(#bar)"></rect>

    </svg>


  );
};

export default RatingBar;