import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import Outfits from './Outfits';
import ProductCard from './ProductCard';
import OutfitCard from './OutfitCard';
import Carousel from './Carousel';
import './styles.css';
import { getServer } from '../../helpers';

const Related = (props) => {

  const { productId } = useContext(ContextObj);
  const [relatedItems, setRelatedItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (productId) {
      getServer(`/products/${productId}/related`)
        .then( (result) => {
          setRelatedItems(result);
          setIsLoaded(true);
        })
        .catch( (err) => {
          console.log('Related err:', err);
        });
    }
  }, [productId]);

  return (
    <div className='related'>
      {isLoaded && <div>
        <Carousel show={(relatedItems.length > 4) ? 4 : relatedItems.length}>
          {(relatedItems.length > 0) && relatedItems.map( (item, index) => {
            return <ProductCard key={item} cardId={item}/>;
          })}
        </Carousel>
      </div>}

    </div>
  );
};

export default Related;
