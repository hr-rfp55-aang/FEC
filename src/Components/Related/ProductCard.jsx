import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import './styles.css';
import { getServer, grabReviewScore } from '../../helpers';
import ComparisonModal from './ComparisonModal';
import '../../../assets/empty-star.svg';
import StarRating from '../Reviews/StarRatings';

const star = '../../../assets/empty-star.svg';
const ProductCard = ({cardId}) => {

  const { productId, setProductId, ratingAvg } = useContext(ContextObj);

  const [cardInfo, setCardInfo] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    Promise.all([
      getServer(`/products/${cardId}/`),
      getServer(`/products/${cardId}/styles`),
      getServer(`/reviews/meta/?product_id=${cardId}`)
    ])
      .then(([product, styles, reviewMeta]) => {
        setCardInfo({
          productId: cardId,
          name: product.name,
          category: product.category,
          thumbnail: styles.results[0].photos[0].thumbnail_url,
          originalPrice: styles.results[0].original_price,
          salePrice: styles.results[0].sale_price,
          rating: grabReviewScore(reviewMeta.ratings)[0],
        });
        setIsLoaded(true);
      })
      .catch( (err) => {
        console.log('ProductCard Promise: ', err);
      });
  }, []);

  const saleDiv = () => {
    if (cardInfo.salePrice) {
      return (
        <div>
          <span style='text-decoration: line-through'>${cardInfo.originalPrice}</span>
          <span style='color: red'>${cardInfo.salePrice}</span>
        </div>
      );
    } else {
      return (<div>${cardInfo.originalPrice}</div>);
    }
  };

  return (
    <div>
      {isLoaded &&
        <div className='productCard' >
          <ComparisonModal show={modalShow} onClose={() => setModalShow(false)} cardInfo={cardInfo}/>
          <img className='actionButton'src={star} onClick={() => setModalShow(true)} />
          <div className='card-wrapper' onClick={() => setProductId(cardId)}>
            <img className='relatedPhoto' src={cardInfo.thumbnail} /></div>
          <div onClick={() => setProductId(cardId)}>
            <div>{cardInfo.category}</div>
            <div>{cardInfo.name}</div>
            {saleDiv()}
            <div>{cardInfo.rating} stars</div>
          </div>
        </div>}
    </div>
  );

};

export default ProductCard;