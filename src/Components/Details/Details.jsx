import React, { useState, useEffect, useContext } from 'react';
import ProductDescription from './ProductDescription.jsx';
import PhotoGallery from './PhotoGallery';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import { ContextObj } from '../../ContextObj.jsx';
import './styles.css';
import { getServer } from '../../helpers';

const Details = () => {
  const [productStyles, setProductStyles] = useState([]);
  const [currentProductStyle, setCurrentProductStyle] = useState({ photos: [] });
  const [currentProductSizes, setCurrentProductSizes] = useState({});

  const { productId } = useContext(ContextObj);

  useEffect(() => {
    if (productId) {
      getServer(`/products/${productId}/styles`)
        .then((result) => {
          setProductStyles(result.results);
          setCurrentProductStyle(result.results[0]);
          setCurrentProductSizes(result.results[0].skus);
        })
        .catch((err) => {
          console.log('Styles err: ', err);
        });
    }
  }, [productId]);

  return (
    <div className="productOverview">
      <PhotoGallery currentProductStyle={currentProductStyle} />
      <div>
        <ProductDescription currentProductStyle={currentProductStyle} />
        <StyleSelector productStyles={productStyles} currentProductStyle={currentProductStyle} setCurrentProductStyle={setCurrentProductStyle}/>
        <AddToCart currentProductSizes={currentProductSizes}/>
      </div>
    </div>
  );
};

export default Details;
