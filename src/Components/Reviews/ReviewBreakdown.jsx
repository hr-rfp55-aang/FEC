import React, { useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import StarRating from './StarRatings.jsx';
import RatingBar from './RatingBar.jsx';
import CharacteristicsList from './CharacteristicsList';

var ReviewBreakdown = ({ reviews, handleStarFilters }) => {
  const { ratingAvg, reviewMetaObj, reviewsTotal } = useContext(ContextObj);

  var recommendedPercent = (recommended) => {

    return Math.round(recommended / reviewsTotal * 100);
  };

  return (
    <div className='reviewBreakdown'>
      <div>
        <h1>{ratingAvg}</h1>
        <StarRating className='breakdownStars'/>
      </div>
      <h6>{recommendedPercent(reviewMetaObj.recommended.true)}% of reviewers recomend this product</h6>
      <h5 className='starRatings' onClick={()=>handleStarFilters(5)}>5 stars <RatingBar rating={reviewMetaObj.ratings[5]}/></h5>
      <h5 className='starRatings' onClick={()=>handleStarFilters(4)}>4 stars <RatingBar rating={reviewMetaObj.ratings[4]}/></h5>
      <h5 className='starRatings' onClick={()=>handleStarFilters(3)}>3 stars <RatingBar rating={reviewMetaObj.ratings[3]}/></h5>
      <h5 className='starRatings' onClick={()=>handleStarFilters(2)}>2 stars <RatingBar rating={reviewMetaObj.ratings[2]}/></h5>
      <h5 className='starRatings' onClick={()=>handleStarFilters(1)}>1 stars <RatingBar rating={reviewMetaObj.ratings[1]}/></h5>
      <CharacteristicsList />
    </div>
  );
};

export default ReviewBreakdown;