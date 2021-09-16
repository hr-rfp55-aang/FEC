import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import { getServer, grabReviewScore, formatDate } from '../../helpers';

const ProductDescription = ({ productStyles }) => {

  const { productId, productInfo, ratingAvg } = useContext(ContextObj);

  //console.log('In ProductInfo ', 'product: ', productInfo, 'productStyles: ', productStyles);

  return (
    <div className="descriptionOverview">
      {/* Star Rating Component */}
      <div> {ratingAvg} *** Read all 100 reviews </div>
      {/* Product Category */}
      <div>{productInfo.category}</div>
      {/* Product Name */}
      <div><h2>{productInfo.name}</h2></div>
      {/* Price Component */}
      <div>
        ${productStyles.length > 0 &&
          productStyles[0].original_price
        }
      </div>
      {/* Product Description Component*/}
      <div className="detailedDescription">{productInfo.description}</div>
      {/* Share on Social Media Component */}
    </div>
  );
};

export default ProductDescription;


