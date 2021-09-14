import React, { useState, useEffect, useContext} from 'react';
import ProductDescription from './ProductDescription.jsx';
import { ContextObj } from '../../ContextObj.jsx';
import './details.css';

const Details = () => {
  const [productStyles, setProductStyles] = useState({results: []});

  const {productInfo, getServer} = useContext(ContextObj);
  const id = productInfo.id;

  useEffect(() => {
    getServer(`/products/${id}/styles`, (result) => setProductStyles(result));
  }, [productInfo]);

  return (
    <div>
      {/* Photo Gallery Component*/}
      <ProductDescription productStyles={productStyles}/>
      {/* Style Selector Component*/}
      {/* Add to Cart Component*/}
      _______________________________________________
    </div>
  );
};

export default Details;
