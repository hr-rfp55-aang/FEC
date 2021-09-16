import React, { useState, useEffect, useContext} from 'react';
import ProductDescription from './ProductDescription.jsx';
import { ContextObj } from '../../ContextObj.jsx';

const ThumbnailListItem = ({img, index, photo, mainPhoto, setMainPhoto, mainThumbnail, setMainThumbnail,  mainPhotoName, setMainPhotoName})=> {
    //console.log('In thumbnaillistlitem: ', photo)
  return (
    <div>
      <img onClick={() => { setMainPhoto(photo), setMainThumbnail(img), setMainPhotoName()}}className="thumbnailListItem" src={img} alt={mainPhotoName + index}/>
    </div>
  );
};

export default ThumbnailListItem;
