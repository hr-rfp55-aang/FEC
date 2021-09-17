import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import ProductCard from './ProductCard';
import OutfitCard from './OutfitCard';
import Carousel from './Carousel';
import './styles.css';
import { getServer } from '../../helpers';

const Outfits = (props) => {

  const { productId } = useContext(ContextObj);
  const [myOutfits, setMyOutfits] = useState([{productId: 'Add'}]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [productId, myOutfits]);


  return (
    <div>
      {isLoaded &&
        <div className='outfits'>
          <Carousel show={(myOutfits.length > 4) ? 4 : myOutfits.length}>
            {(myOutfits.length > 0) && myOutfits.map( (item, index) => {
              return <OutfitCard key={item.productId} cardInfo={item} myOutfits={myOutfits} setMyOutfits={setMyOutfits}/>;
            })}
          </Carousel>
        </div>}
    </div>
  );
};

export default Outfits;