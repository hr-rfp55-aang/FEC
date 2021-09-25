import React, { useState, useEffect, useContext } from 'react';
import ProductDescription from './ProductDescription.jsx';
import missingImg from '../../assets/pants.svg';

const ThumbnailListItem = ({ index, photo, mainPhoto, setMainPhoto, mainPhotoName }) => {
  return (
    <div >
      <img onClick={() => { setMainPhoto(photo); }}
        className={mainPhoto.url === photo.url ? 'productMainPhotoThumbnail thumbnailListItem' :
          'thumbnailListItem'}
        src={photo.thumbnail_url || missingImg} alt={mainPhotoName + index} />
    </div>
  );
};

export default ThumbnailListItem;
