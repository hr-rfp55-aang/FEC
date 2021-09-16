import React, { useState, useEffect, useContext } from 'react';
import ProductDescription from './ProductDescription.jsx';
import ThumbnailListItem from './ThumbnailListItem';
import { ContextObj } from '../../ContextObj.jsx';
import { getServer, grabReviewScore, formatDate } from '../../helpers';

const ThumbnailList = ({ productPhotos, mainPhoto, setMainPhoto, mainPhotoName }) => {
  //console.log('In ThumbnailList ', productPhotos);

  return (
    <div className="thumbnailList">
      {productPhotos.map((photo, index) => {
        return <ThumbnailListItem key={index} index={index.toString()} photo={photo} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} mainPhotoName={mainPhotoName} />
      })}
    </div>
  );
};

export default ThumbnailList;