import React, { useContext } from 'react';
import '../../../assets/empty-star.svg';
import '../../../assets/star.svg';
import '../../../assets/star-one-quarter.svg';
import '../../../assets/star-half.svg';
import '../../../assets/star-three-quarter.svg';
import { ContextObj } from '../../ContextObj.jsx';


var StarRating = ({rating}) => {
  const { ratingAvg } = useContext(ContextObj);

  if (rating === 1) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (rating === 2) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (rating === 3) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (rating === 4) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (rating === 5) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
      </div>
    );
  }
  if (0.25 <= ratingAvg && ratingAvg < 0.50) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star-one-quarter.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (0.50 <= ratingAvg && ratingAvg < 0.75) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star-half.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (0.75 <= ratingAvg && ratingAvg < 1) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star-three-quarter.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (1 <= ratingAvg && ratingAvg < 1.25) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (1.25 <= ratingAvg && ratingAvg < 1.50) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star-one-quarter.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (1.50 <= ratingAvg && ratingAvg < 1.75) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star-half.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (1.75 <= ratingAvg && ratingAvg < 2) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star-three-quarter.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (2 <= ratingAvg && ratingAvg < 2.25) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (2.25 <= ratingAvg && ratingAvg < 2.50) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star-one-quarter.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (2.50 <= ratingAvg && ratingAvg < 2.75) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star-half.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (2.75 <= ratingAvg && ratingAvg < 3) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star-three-quarter.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (3 <= ratingAvg && ratingAvg < 3.25) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (3.25 <= ratingAvg && ratingAvg < 3.50) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star-one-quarter.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (3.50 <= ratingAvg && ratingAvg < 3.75) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star-half.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (3.75 <= ratingAvg && ratingAvg < 4) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star-three-quarter.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (4 <= ratingAvg && ratingAvg < 4.25) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/empty-star.svg'></img>
      </div>
    );
  }
  if (4.25 <= ratingAvg && ratingAvg < 4.50) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star-one-quarter.svg'></img>
      </div>
    );
  }
  if (4.50 <= ratingAvg && ratingAvg < 4.75) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star-half.svg'></img>
      </div>
    );
  }
  if (4.75 <= ratingAvg && ratingAvg < 5) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star-three-quarter.svg'></img>
      </div>
    );
  }
  if (ratingAvg === 5) {
    return (
      <div className='starBarReview'>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
        <img src='../../../assets/star.svg'></img>
      </div>
    );
  }
  return (
    <div className='starBarReview'>
      <img src='../../../assets/empty-star.svg'></img>
      <img src='../../../assets/empty-star.svg'></img>
      <img src='../../../assets/empty-star.svg'></img>
      <img src='../../../assets/empty-star.svg'></img>
      <img src='../../../assets/empty-star.svg'></img>
    </div>
  );

};

export default StarRating;