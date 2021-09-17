import React, { useState, useEffect, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import './styles.css';
import { getServer, grabReviewScore } from '../../helpers';

const OutfitCard = ({cardInfo, myOutfits, setMyOutfits}) => {

  const { productId, productInfo, setProductId, ratingAvg, stylesInfo, reviewMetaObj } = useContext(ContextObj);

  const addOutfit = (id) => {
    let itemDetails = {
      productId: productId,
      name: productInfo.name,
      category: productInfo.category,
      thumbnail: stylesInfo.results[0].photos[0].thumbnail_url,
      originalPrice: stylesInfo.results[0].original_price,
      salePrice: stylesInfo.results[0].sale_price,
      rating: ratingAvg
    };
    setMyOutfits(prevState => {
      let temp = prevState.slice();
      temp.push(itemDetails);
      return temp;
    });
  };

  if (cardInfo.productId === 'Add') {
    return (
      <div>
        <div className='productCard' onClick={() => addOutfit(productId)}>
          <div className='card-wrapper add'>
            <div className='relatedPhoto'>ADD OUTFIT</div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='productCard' onClick={() => setProductId(cardInfo.productId)}>
        <div className='card-wrapper'><img className='relatedPhoto' src={cardInfo.thumbnail} /></div>
        <div>{cardInfo.category}</div>
        <div>{cardInfo.name}</div>
        <div>${cardInfo.originalPrice}</div>
        <div>{cardInfo.rating}</div>
        <div></div>
      </div>
    </div>
  );

};

export default OutfitCard;