import React, { useState, useEffect, useContext} from 'react';
import ProductDescription from './ProductDescription.jsx';
import { ContextObj } from '../../ContextObj.jsx';

const ThumbnailListItem = ({img})=> {
  // console.log('In thumbnaillistlitem: ', img)
  return (
    <div>
      <img className="thumbnailListItem" src={img} />
    </div>
  );
};

export default ThumbnailListItem;
