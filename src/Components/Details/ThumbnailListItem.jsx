import React, { useState, useEffect, useContext } from 'react';
import ProductDescription from './ProductDescription.jsx';

const ThumbnailListItem = ({ index, photo, mainPhoto, setMainPhoto, mainPhotoName }) => {
  //console.log('In thumbnaillistlitem: ', photo)
  return (
    <div>
      {/* Limit it to 7 displayed with an arrow to see more */}
      <img onClick={() => { setMainPhoto(photo); }} className="thumbnailListItem" src={photo.thumbnail_url} alt={mainPhotoName + index} />
    </div>
  );
};

export default ThumbnailListItem;
