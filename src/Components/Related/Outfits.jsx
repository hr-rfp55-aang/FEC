import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import ProductCard from './ProductCard';
import './styles.css';
import { getServer, grabReviewScore, formatDate } from '../../helpers';

const Outfits = (props) => {

  const { productId } = useContext(ContextObj);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [productId]);

  return (
    <div>
      {isLoaded &&
        <div className='outfits'>
          <ProductCard cardId={productId} />
        </div>}
    </div>
  );
};

export default Outfits;