import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import './styles.css';

const ProductCard = (props) => {

  const { productInfo, getServer } = useContext(ContextObj);
  const id = productInfo.id;
  const [carouselItem, setCarouselItem] = useState({});
  const [carouselStyle, setCarouselStyle] = useState({results: [{photos: [{'thumbnail_url': null}]}]});

  useEffect(() => {
    getServer(`/products/${props.item}/`, (result) => setCarouselItem(result) );
    getServer(`/products/${props.item}/styles`, (result) => setCarouselStyle(result) );
  }, []);


  return (
    <div className='productCard'>Product Card {props.item}
      <div><img className='relatedPhoto' src={carouselStyle['results'][0]['photos'][0].thumbnail_url} /></div>
      <div>{carouselItem.name}</div>
      <div>{carouselItem.default_price}</div>

    </div>
  );

};

export default ProductCard;