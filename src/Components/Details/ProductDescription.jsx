import React, { useContext } from 'react';
import StarRatings from '../StarRatings.jsx';
import { ContextObj } from '../../ContextObj.jsx';

const ProductDescription = ({ currentProductStyle }) => {

  const { productInfo, ratingAvg, reviewsTotal } = useContext(ContextObj);

  return (
    <div className="descriptionOverview">
      <div className="starsInDescription"> <StarRatings rating={ratingAvg} classParam={'productStarBar'}/>
        <a className="descriptionRating" href="#ratingsReview"> Read all {reviewsTotal} reviews </a>
      </div>
      <div className="category">{productInfo.category}</div>
      <div className="productName">{productInfo.name}</div>
      <div>
        {currentProductStyle.sale_price ?
          <div>
            <span> {'$' + currentProductStyle.sale_price} </span>
            <span className="originalPrice">${currentProductStyle.original_price}</span>
          </div> : <span className="price">${currentProductStyle.original_price}</span>
        }
      </div >
    </div>
  );
};

export default ProductDescription;


