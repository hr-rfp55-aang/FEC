import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import './styles.css';
import { getServer, grabReviewScore } from '../../helpers';
import ComparisonModal from './ComparisonModal';
import actionImg from '../../assets/empty-star.svg';
import missingImg from '../../assets/pants.svg';
import StarRating from '../StarRatings';

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
        let photo = styles.results[0].photos[0].thumbnail_url || missingImg;
        setCardInfo({
          productId: cardId,
          name: product.name,
          category: product.category,
          thumbnail: photo,
          originalPrice: styles.results[0].original_price,
          salePrice: styles.results[0].sale_price,
          rating: grabReviewScore(reviewMeta.ratings)[0],
          features: product.features
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
          <img className='actionButton'src={actionImg} onClick={() => setModalShow(true)} alt='Compare Item'/>
          <div className='card-wrapper' onClick={() => setProductId(cardId)}>
            <div><img className='relatedPhoto' src={cardInfo.thumbnail} alt={cardInfo.name}/></div>
            <div>{cardInfo.category}</div>
            <div>{cardInfo.name}</div>
            {saleDiv()}
            <div className='starCard'>
              <StarRating rating={cardInfo.rating} classParam={'starCard'}/>
            </div></div>
        </div>}
    </div>
  );

};

export default ProductCard;