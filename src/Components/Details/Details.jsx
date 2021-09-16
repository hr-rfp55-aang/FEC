import React, { useState, useEffect, useContext } from 'react';
import ProductDescription from './ProductDescription.jsx';
import PhotoGallery from './PhotoGallery';
import StyleSelector from './StyleSelector.jsx';
import { ContextObj } from '../../ContextObj.jsx';
import './styles.css';
import { getServer, grabReviewScore, formatDate } from '../../helpers';

const Details = () => {
  const [productStyles, setProductStyles] = useState([]);
  const [currentProductStyle, setCurrentProductStyle] = useState({ photos: [] });

  const { productId, productInfo } = useContext(ContextObj);

  useEffect(() => {
    if (productId) {
      getServer(`/products/${productId}/styles`)
        .then((result) => {
          setProductStyles(result.results);
          setCurrentProductStyle(result.results[0]);
        })
        .catch((err) => {
          console.log('Styles err: ', err);
        });
    }
  }, [productId]);

  return (
    <div className="productOverview">
      <PhotoGallery productStyles={productStyles} currentProductStyle={currentProductStyle} />
      <div>
        <ProductDescription productStyles={productStyles} />
        <StyleSelector productStyles={productStyles} currentProductStyle={currentProductStyle} setCurrentProductStyle={setCurrentProductStyle}/>
        {/* Add to Cart Component*/}
      </div>
    </div>
  );
};

export default Details;
