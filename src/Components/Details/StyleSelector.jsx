import React, { useState, useEffect, useContext } from 'react';
import ProductDescription from './ProductDescription.jsx';
import PhotoGallery from './PhotoGallery';
import { ContextObj } from '../../ContextObj.jsx';
import { getServer, grabReviewScore, formatDate } from '../../helpers';

const StyleSelector = ({productStyles}) => {
  console.log('in StyleSelector ', productStyles );

  // loop through photos array
  return (
    <div className="styleSelector">Style Selector</div>
  );
};

export default StyleSelector;