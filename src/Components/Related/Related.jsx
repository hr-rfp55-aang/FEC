import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import Outfits from './Outfits';
import ProductCard from './ProductCard';
import './styles.css';
import { getServer, grabReviewScore, formatDate } from '../../helpers';

const Related = (props) => {

  const { productId } = useContext(ContextObj);
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    if (productId) {
      getServer(`/products/${productId}/related`)
        .then( (result) => {
          setRelatedItems(result);
        })
        .catch( (err) => {
          console.log('Related err:', err);
        });
    }
  }, [productId]);

  return (
    <div className='relatedCarousel'>
      {(relatedItems.length > 0) && relatedItems.map( (item, index) => {
        return <ProductCard key={item} cardId={item}/>;
      })}
      <Outfits />
    </div>
  );
};

export default Related;
