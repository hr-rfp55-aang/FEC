import React, { useState, useEffect, useContext} from 'react';
import ProductInfo from './ProductInfo.jsx';
import { ContextObj } from '../../ContextObj.jsx';
import './details.css';

const Details = () => {
  const [productStyles, setProductStyles] = useState({})

  const {productInfo, getServer} = useContext(ContextObj)
  const id = productInfo.id

  useEffect(() => {
    getServer(`/products/${id}/styles`, (result) => setProductStyles(result));
  }, []);

  return (
    <div>
      {/* Photo Gallery Component*/}
      <ProductInfo productStyles={productStyles}/>
      {/* Style Selector Component*/}
      {/* Add to Cart Component*/}
      _______________________________________________
    </div>
  )
}

export default Details;
