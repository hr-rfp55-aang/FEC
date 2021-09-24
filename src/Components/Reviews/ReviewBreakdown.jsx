import React, { useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import StarRating from '../StarRatings.jsx';
import RatingBar from './RatingBar.jsx';
import CharacteristicsList from './CharacteristicsList';
import { FaRegTimesCircle } from 'react-icons/fa';

var ReviewBreakdown = ({ reviews, handleStarFilters, filters, setFilters }) => {
  const { ratingAvg, reviewMetaObj, reviewsTotal } = useContext(ContextObj);

  var recommendedPercent = (recommended) => {

    return Math.round(recommended / reviewsTotal * 100);
  };

  var setFilterString = (filters) => {
    var filterStr = '';

    for (var i = 0; i < filters.length; i++) {
      filterStr += filters[i] + ' star ';
    }
    return filterStr;
  };

  return (
    <div className='reviewBreakdown'>
      <div>
        <h1>{ratingAvg}</h1>
        <StarRating className='breakdownStars' rating={ratingAvg}/>
      </div>
      {ratingAvg === 0 ? null : <div className='percentReviews'>{recommendedPercent(reviewMetaObj.recommended.true)}% of reviewers recommend this product</div>}
      <div className='starRatings' onClick={() => handleStarFilters(5)}>5 stars <RatingBar rating={reviewMetaObj.ratings[5]} /><div id='rating-count'>{reviewMetaObj.ratings[5] || 0}</div></div>
      <div className='starRatings' onClick={() => handleStarFilters(4)}>4 stars <RatingBar rating={reviewMetaObj.ratings[4]} /><div id='rating-count'>{reviewMetaObj.ratings[4] || 0}</div></div>
      <div className='starRatings' onClick={() => handleStarFilters(3)}>3 stars <RatingBar rating={reviewMetaObj.ratings[3]} /><div id='rating-count'>{reviewMetaObj.ratings[3] || 0}</div></div>
      <div className='starRatings' onClick={() => handleStarFilters(2)}>2 stars <RatingBar rating={reviewMetaObj.ratings[2]} /><div id='rating-count'>{reviewMetaObj.ratings[2] || 0}</div></div>
      <div className='starRatings' onClick={() => handleStarFilters(1)}>1 stars <RatingBar rating={reviewMetaObj.ratings[1]} /><div id='rating-count'>{reviewMetaObj.ratings[1] || 0}</div> </div>
      {(filters.length) ? <div><div className='filteredBy'><div>Filtering by: <br></br>{setFilterString(filters)}</div></div>
        <div className='clearFilters'onClick={() => setFilters([])}>Clear All Filters</div></div> : <div className='filterPlaceholder'></div>}
      {ratingAvg === 0 ? null : <CharacteristicsList />}
    </div>
  );
};

export default ReviewBreakdown;