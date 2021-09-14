import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import ProductCard from './ProductCard';
import './styles.css';

const Outfits = () => {

  const { productInfo, getServer } = useContext(ContextObj);
  const id = productInfo.id;

  return (
    <div className='outfits'>
      <ProductCard item={id} />
    </div>
  );
};

export default Outfits;