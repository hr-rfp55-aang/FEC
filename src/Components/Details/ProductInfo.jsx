import React, { useState, useEffect } from 'react';

const ProductInfo = ({ products, setProducts }) => {
  return (
    <div>
      {/* Star Rating Component */}
      <div>
        {/* Product Category */}
        {products[0].category.toUpperCase()}
        {/* Product Name */}
        <h2>{products[0].name}</h2>
      </div>
      {/* Price Component */}
      <div>${products[0].default_price}</div>
      {/* Product Description Component*/}
      <div>{products[0].description}</div>
      {/* Share on Social Media Component */}
    </div>
  )
}

export default ProductInfo;


