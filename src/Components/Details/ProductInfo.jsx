import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../ProductContext.jsx';

const ProductInfo = ({ product, productStyles}) => {

  if (Object.keys(product).length === 0) {
    return  <div>No Product</div>
  }

  // console.log('In ProductInfo ', 'product: ', product, 'productStyles: ', productStyles)
  // var currentProductImage = productStyles.results ? productStyles.results[0].photos.url : null
  // console.log(currentProductImage)
  return (
    <div>
      {/* Star Rating Component */}
      <div>
        {/* { productStyles.results ? productStyles.results[0].name : null } */}
        {/* <img src={currentProductImage}/> */}
        {/* Product Category */}
        {product.category.toUpperCase()}
        {/* Product Name */}
        <h2>{product.name}</h2>
      </div>
      {/* Price Component */}
      <div>${product.default_price}</div>
      {/* Product Description Component*/}
      <div>{product.description}</div>
      {/* Share on Social Media Component */}
    </div>
  )
}

export default ProductInfo;


