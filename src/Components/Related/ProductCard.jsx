import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import './styles.css';
import { getServer, grabReviewScore, formatDate } from '../../helpers';

const ProductCard = ({cardId}) => {

  const { productId, ratingAvg } = useContext(ContextObj);

  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [originalPrice, setOriginalPrice] = useState();
  const [salePrice, setSalePrice] = useState();
  const [rating, setRating] = useState();
  const [isLoaded, setIsLoaded] = useState(true);


  useEffect(() => {
    Promise.all([
      getServer(`/products/${cardId}/`),
      getServer(`/products/${cardId}/styles`),
      getServer(`/reviews/meta/?product_id=${cardId}`)
    ])
      .then(([product, styles, reviewMeta]) => {
        setName(product.name);
        setCategory(product.category);
        setThumbnail(styles.results[0].photos[0].thumbnail_url);
        setOriginalPrice(styles.results[0].original_price);
        setSalePrice(styles.results[0].sale_price);
        setRating(grabReviewScore(reviewMeta.ratings)[0]);
        setIsLoaded(true);
      })
      .catch( (err) => {
        console.log('ProductCard Promise: ', err);
      });
  }, []);

  return (
    <div>
      {isLoaded &&
        <div className='productCard'>
          <div className='card-wrapper'><img className='relatedPhoto' src={thumbnail} /></div>
          <div>{category}</div>
          <div>{name}</div>
          <div>${originalPrice}</div>
          <div>{rating}</div>
          <div></div>
        </div>}
    </div>
  );

};

export default ProductCard;