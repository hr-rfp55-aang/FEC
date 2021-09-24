import React, { useState, useEffect, useContext } from 'react';
import ProductDescription from './ProductDescription.jsx';
import PhotoGallery from './PhotoGallery';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import { ContextObj } from '../../ContextObj.jsx';
import './styles.css';
import { getServer } from '../../helpers';
import facebook from '../../assets/facebook.jpeg';
import twitter from '../../assets/twitter.jpeg';
import pinterest from '../../assets/pinterest.jpeg';

const Details = () => {
  const [productStyles, setProductStyles] = useState([]);
  const [currentProductStyle, setCurrentProductStyle] = useState({ photos: [], skus: {} });
  const currentProductSizes = currentProductStyle.skus;

  const { productId, stylesInfo } = useContext(ContextObj);

  useEffect(() => {
    setCurrentProductStyle(stylesInfo.results[0]);
  }, [productId, stylesInfo]);

  return (
    <div className="productOverview">
      <PhotoGallery currentProductStyle={currentProductStyle} stylesInfo={stylesInfo.results}/>
      <div className="descriptionOverviewContainer">
        <ProductDescription currentProductStyle={currentProductStyle} />
        <StyleSelector productStyles={stylesInfo.results} currentProductStyle={currentProductStyle} setCurrentProductStyle={setCurrentProductStyle} />
        <AddToCart currentProductSizes={currentProductSizes} />
        <div className="socialMediaInfo">
          <a href="https://twitter.com/?lang=en">
            <img className="socialMediaIcon" src={twitter} alt="Add to Twitter"/> </a>
          <a href="https://www.facebook.com/">
            <img className="socialMediaIcon" src={facebook} alt="Add to Facebook"/> </a>
          <a href="https://www.pinterest.com/">
            <img className="socialMediaIcon" src={pinterest} alt="Add to Pinterest"/> </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
