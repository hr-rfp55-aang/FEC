import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';

const ProductDescription = ({ productStyles }) => {

  const { productInfo, getServer } = useContext(ContextObj);
  const id = productInfo.id;

  // console.log('In ProductInfo ', 'product: ', productInfo, 'productStyles: ', productStyles);

  return (
    <div className="descriptionOverview">
      {/* Star Rating Component */}
      <div> ***** Read all 100 reviews </div>
      {/* Product Category */}
      <div>{productInfo.category}</div>
      {/* Product Name */}
      <div><h2>{productInfo.name}</h2></div>
      {/* Price Component */}
      {/* <div>${productInfo.default_price}</div> */}
      <div>
        ${productStyles.results.length > 0 &&
          productStyles.results[0].original_price
        }
      </div>
      {/* Product Description Component*/}
      <div className="detailedDescription">{productInfo.description}</div>
      {/* Share on Social Media Component */}
    </div>
  );
};

export default ProductDescription;


