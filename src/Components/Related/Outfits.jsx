import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import ProductCard from './ProductCard';
import './styles.css';
import { getServer, grabReviewScore, formatDate } from '../../helpers';

const Outfits = () => {

  const { productId } = useContext(ContextObj);

  return (
    <div className='outfits'>
      <ProductCard item={productId} />
    </div>
  );
};

export default Outfits;