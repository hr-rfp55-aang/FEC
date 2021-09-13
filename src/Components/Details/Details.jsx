import React, { useState, useEffect, useContext} from 'react';
import ProductInfo from './ProductInfo.jsx';
import data from './fakeData.js';
import { ProductContext } from '../../ProductContext.jsx';

const Details = () => {
  const [products, setProducts] = useState(data);

  return (
    <div>
      {/* Photo Gallery Component*/}
      <ProductInfo products={products} setProducts={setProducts}/>
      {/* Style Selector Component*/}
      {/* Add to Cart Component*/}
    </div>
  )
}

export default Details;
