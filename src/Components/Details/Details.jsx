import React, { useState, useEffect, useContext} from 'react';
import ProductDescription from './ProductDescription.jsx';
import PhotoGallery from './PhotoGallery';
import { ContextObj } from '../../ContextObj.jsx';
import './styles.css';

const Details = () => {
  const [productStyles, setProductStyles] = useState({results: []});

  const {productInfo, getServer} = useContext(ContextObj);
  const id = productInfo.id;

  useEffect(() => {
    if (id) {
      getServer(`/products/${id}/styles`, (result) => setProductStyles(result));
    }
  }, [productInfo]);

  return (
    <div className="productOverview">
      <PhotoGallery productStyles={productStyles}/>
      <ProductDescription productStyles={productStyles}/>
      {/* Style Selector Component*/}
      {/* Add to Cart Component*/}
    </div>
  );
};

export default Details;
