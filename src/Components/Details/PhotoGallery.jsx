import React, { useState, useEffect, useContext} from 'react';
import ProductDescription from './ProductDescription.jsx';
// import PhotoGalleryListItem from './PhotoGalleryListItem';
import { ContextObj } from '../../ContextObj.jsx';
import './styles.css';

const PhotoGallery = ({productStyles}) => {
  console.log('In Photo Gallery ', productStyles);

  // console.log('In photo gallery the first photo is ', productStyles.results[0].photos[0].url);

  return (
    <div>
      <div>
        {
          productStyles.results.length > 0 &&
          productStyles.results[0].photos.length > 0 &&
          <img className="displayedPhoto" src={productStyles.results[0].photos[0].url} alt={productStyles.results[0].id}/>
        }
      </div>
    </div>
  );
};
export default PhotoGallery;