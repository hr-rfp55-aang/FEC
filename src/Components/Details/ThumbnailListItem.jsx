import React, { useState, useEffect, useContext } from 'react';
import ProductDescription from './ProductDescription.jsx';
import { ContextObj } from '../../ContextObj.jsx';
import { getServer, grabReviewScore, formatDate } from '../../helpers';

const ThumbnailListItem = ({ index, photo, mainPhoto, setMainPhoto, mainPhotoName }) => {
  //console.log('In thumbnaillistlitem: ', photo)
  return (
    <div>
      <img onClick={() => { setMainPhoto(photo) }} className="thumbnailListItem" src={photo.thumbnail_url} alt={mainPhotoName + index} />
    </div>
  );
};

export default ThumbnailListItem;
