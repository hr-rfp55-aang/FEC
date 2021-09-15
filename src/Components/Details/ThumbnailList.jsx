import React, { useState, useEffect, useContext} from 'react';
import ProductDescription from './ProductDescription.jsx';
import ThumbnailListItem from './ThumbnailListItem';
import { ContextObj } from '../../ContextObj.jsx';

const ThumbnailList = ({productPhotos}) => {
  console.log('In ThumbnailList ', productPhotos);

  // const thumbnails = productPhotos.map((thumbnail, index) => {
  //   <ThumbnailListItem key={index} img={thumbnail.thumbnail_url}/>;
  // });

  return (
    <div className="thumbnailList">
    ThumbnailList
      {/* {thumbnails} */}
    </div>
  );
};

export default ThumbnailList;