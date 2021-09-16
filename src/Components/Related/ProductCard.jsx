import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import './styles.css';
import { getServer, grabReviewScore, formatDate } from '../../helpers';

const ProductCard = (props) => {

  const { productId } = useContext(ContextObj);
  const [carouselItem, setCarouselItem] = useState({});
  const [carouselStyle, setCarouselStyle] = useState({results: [{photos: [{'thumbnail_url': null}]}]});

  useEffect(() => {
    if (productId) {
      getServer(`/products/${props.item}/`)
        .then( (result) => {
          setCarouselItem(result);
        });
      getServer(`/products/${props.item}/styles`)
        .then( (result) => {
          setCarouselStyle(result);
        });
    }
  }, [productId]);

  return (
    <div className='productCard'>Product Card {props.item}
      <div><img className='relatedPhoto' src={carouselStyle['results'][0]['photos'][0].thumbnail_url} /></div>
      <div>{carouselItem.name}</div>
      <div>{carouselItem.default_price}</div>

    </div>
  );

};

export default ProductCard;