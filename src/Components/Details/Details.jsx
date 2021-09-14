import React, { useState, useEffect, useContext} from 'react';
import ProductInfo from './ProductInfo.jsx';
import { ProductContext } from '../../ProductContext.jsx';
import axios from 'axios';
const server = 'http://localhost:3001';

const Details = () => {
  const [productStyles, setProductStyles] = useState({})

  useEffect(() => {
    axios.get(server + '/products/40350/styles')
     .then( (result) => {
       setProductStyles(result.data);
     })
  })

  let product = useContext(ProductContext)

  return (
    <div>
      {/* Photo Gallery Component*/}
      <ProductInfo product={product} productStyles={productStyles}/>
      {/* Style Selector Component*/}
      {/* Add to Cart Component*/}
    </div>
  )
}

export default Details;
