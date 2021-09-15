import React, { useState, useEffect, useContext } from 'react';
import ProductDescription from './ProductDescription.jsx';
import ThumbnailListItem from './ThumbnailListItem';
import { ContextObj } from '../../ContextObj.jsx';

const ThumbnailList = ({ productPhotos }) => {
  // console.log('In ThumbnailList ', productPhotos);

  return (
    <div className="thumbnailList">
      {(productPhotos || []).map((thumbnail, index) => {
        return <ThumbnailListItem key={index} img={thumbnail.thumbnail_url} />
      })}
    </div>
  );
};

export default ThumbnailList;