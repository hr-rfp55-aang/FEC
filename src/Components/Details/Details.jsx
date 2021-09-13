import React, { useState, useEffect } from 'react';
import ProductInfo from './ProductInfo.jsx'
import data from './fakeData.js'

var Details = function (props) {
  const [products, setProducts] = useState(data);

  return (
    <div>
      Details
      {/* Photo Gallery Component*/}
      <ProductInfo />
      {/* Style Selector Component*/}
      {/* Add to Cart Component*/}
    </div>
  )
}

export default Details;
