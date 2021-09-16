import React, { useState, useEffect, useContext } from 'react';
import ThumbnailListItem from './ThumbnailListItem';

const ThumbnailList = ({ productPhotos, mainPhoto, setMainPhoto, mainPhotoName }) => {
  //console.log('In ThumbnailList ', productPhotos);

  return (
    <div className="thumbnailList">
      {productPhotos.map((photo, index) => {
        return <ThumbnailListItem key={index} index={index.toString()} photo={photo} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} mainPhotoName={mainPhotoName} />;
      })}
    </div>
  );
};

export default ThumbnailList;