import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';

const ProductInfo = ({ productStyles }) => {

  const { productInfo, getServer } = useContext(ContextObj)
  const id = productInfo.id
  // const productStylesInfo = productStyles.results

  // console.log('In ProductInfo ', 'product: ', productInfo, 'productStyles: ', productStyles)

  return (
    <div>
      {/* Star Rating Component */}
      <div> ***** Read all 100 reviews </div>
      {/* Product Category */}
      <div>{productInfo.category}</div>
      {/* Product Name */}
      <div><h2>{productInfo.name}</h2></div>
      {/* Price Component */}
      <div>${productInfo.default_price}</div>
      {/* Product Description Component*/}
      <div>{productInfo.description}</div>
      {/* Share on Social Media Component */}
    </div>
  )
}

export default ProductInfo;


