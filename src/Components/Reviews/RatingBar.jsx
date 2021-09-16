import React from 'react';

var RatingBar = () => {
  return (
    <div>
      <svg viewBox="0 0 1000 200" >
        <defs>

          <polygon id="outline" points="75,0 131,66 200,76 150,128 162,200 100,166 38,200 50,128 0,76 69,66 " />

          {/* <clipPath id="stars">
            <use xlinkHref="#star" />
            <use xlinkHref="#star" x="20%" />
            <use xlinkHref="#star" x="40%" />
            <use xlinkHref="#star" x="60%" />
            <use xlinkHref="#star" x="80%" />
          </clipPath> */}

        </defs>

        {/* <rect className='rating__background' clip-path="url(#stars)"></rect>

        <rect width="25%" className='rating__value' clip-path="url(#stars)"></rect> */}

      </svg>

      <svg viewBox="0 0 1000 200" className='rating'>
        <defs>

          <polygon id="star" points="100,0 131,66 200,76 150,128 162,200 100,166 38,200 50,128 0,76 69,66 " />

          <clipPath id="stars">
            <use xlinkHref="#star" />
            <use xlinkHref="#star" x="20%" />
            <use xlinkHref="#star" x="40%" />
            <use xlinkHref="#star" x="60%" />
            <use xlinkHref="#star" x="80%" />
          </clipPath>

        </defs>

        <rect className='rating__background' clip-path="url(#outline)"></rect>

        <rect width="25%" className='rating__value' clip-path="url(#bar)"></rect>

      </svg>

    </div>
  );
};

export default RatingBar;