import React, { useState, useEffect, useContext } from 'react';
import ThumbnailListItem from './ThumbnailListItem';
import ThumbnailCarousel from './ThumbnailCarousel';

const ThumbnailList = ({ productPhotos, mainPhoto, setMainPhoto, mainPhotoName }) => {
  // console.log('In ThumbnailList ', productPhotos);

  return (

    <div className="thumbnailList">
      {/* <ThumbnailCarousel> */}

      {productPhotos.map((photo, index) => {
        return <ThumbnailListItem key={index} index={index.toString()} photo={photo} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} mainPhotoName={mainPhotoName} />;
      })}

      {/* </ThumbnailCarousel> */}
    </div>

  );
};

export default ThumbnailList;