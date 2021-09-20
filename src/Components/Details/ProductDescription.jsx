import React, { useContext } from 'react';
import StarRatings from '../Reviews/StarRatings.jsx';
import { ContextObj } from '../../ContextObj.jsx';

const ProductDescription = ({ currentProductStyle }) => {

  const { productInfo, ratingAvg, reviewsTotal } = useContext(ContextObj);

  const price = currentProductStyle.sale_price ? currentProductStyle.original_price : currentProductStyle.original_price;

  // console.log('In ProductDescription ', 'product: ', productInfo, 'currentProductStyle ', currentProductStyle);

  return (
    <div className="descriptionOverview">
      <div className="starsInDescription"> <StarRatings />
        <a className="descriptionRating" href="#ratingsReview"> Read all {reviewsTotal} reviews </a>
      </div>
      <div className="category">{productInfo.category}</div>
      <div className="productName">{productInfo.name}</div>
      <div>
        {currentProductStyle.sale_price ?
          <div>
            <span> {'$' + currentProductStyle.sale_price} </span>
            <span className="originalPrice">${price}</span>
          </div> : <span className="price">${price}</span>
        }
      </div>
      {/* Share on Social Media Component */}
    </div>
  );
};

export default ProductDescription;


