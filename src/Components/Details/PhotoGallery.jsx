import React, { useState, useEffect, useContext } from 'react';
import ProductDescription from './ProductDescription.jsx';
import ThumbnailList from './ThumbnailList';
import { ContextObj } from '../../ContextObj.jsx';

const PhotoGallery = ({ productStyles }) => {

  const defaultImg = 'https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'

  const [mainPhoto, setMainPhoto] = useState(productStyles.results.length > 0 ? productStyles.results[0].photos[0].url : defaultImg);

  const defaultName = 'White Sole'

  const [mainPhotoName, setMainPhotoName] = useState(
    productStyles.results.length > 0 ? productStyles.results[0].name : defaultName
  )
  //console.log('In Photo Gallery ', productStyles);

  //console.log('In photo gallery the first photo is ', productStyles.results[0].photos[0].url);

  // console.log('In Photo Gallery ', mainPhotoId);

  return (
    <div className="productPhotos">
      <ThumbnailList productPhotos={productStyles.results.length > 0 && productStyles.results[0].photos} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} mainPhotoName={mainPhotoName} setMainPhotoName={setMainPhotoName}/>
      <div>
        {
          productStyles.results.length > 0 &&
          <img className="displayedPhoto" src={mainPhoto} alt={mainPhotoName} />
        }
      </div>
    </div>
  );
};
export default PhotoGallery;