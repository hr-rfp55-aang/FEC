import React from 'react';

var ReviewBreakdown = ({reviews}) => {
  var ratio = 0;
  for (var i = 0; i < reviews.results.length; i++) {
    ratio += reviews.results[i].rating;
  }
  ratio = ratio / reviews.results.length;

  return (
    <div className='reviewBreakdown'>
      <h1>{ratio}</h1>
      <h6>100% of reviewers recomend this product</h6>
      <h5>5 stars</h5>
      <h5>4 stars</h5>
      <h5>3 stars</h5>
      <h5>2 stars</h5>
      <h5>1 stars</h5>
    </div>
  )
}

export default ReviewBreakdown;