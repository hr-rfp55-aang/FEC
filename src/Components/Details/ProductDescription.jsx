import React, { useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';

const ProductDescription = ({ currentProductStyle }) => {

  const { productInfo, ratingAvg, reviewsTotal } = useContext(ContextObj);

  const price = currentProductStyle.sale_price ? currentProductStyle.original_price : currentProductStyle.original_price;

  console.log('In ProductDescription ', 'product: ', productInfo, 'currentProductStyle ', currentProductStyle);

  return (
    <div className="descriptionOverview">
      {/* Star Rating */}
      <div> {ratingAvg ? ratingAvg + `*** Read all ${reviewsTotal} reviews` : 'No Ratings Available for this Product'} </div>
      <div>{productInfo.category}</div>
      {/* Product Name */}
      <div><h2>{productInfo.name}</h2></div>
      <div>
        {currentProductStyle.sale_price ?
          <div>
            <span> {'$' + currentProductStyle.sale_price} </span>
            <span className="originalPrice">${price}</span>
          </div> : <span className="price">${price}</span>
        }
      </div>
      {/* Product Description */}
      <div className="detailedDescription">{productInfo.description}</div>
      {/* Share on Social Media Component */}
    </div>
  );
};

export default ProductDescription;


