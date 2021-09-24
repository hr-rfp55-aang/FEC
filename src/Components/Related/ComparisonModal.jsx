import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { ContextObj } from '../../ContextObj.jsx';
import './styles.css';

const modalElement = document.getElementById('modal-root');

const ComparisonModal = ({show, cardInfo, onClose}) => {

  const { productId, productInfo, stylesInfo, ratingAvg } = useContext(ContextObj);

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className='relatedModal' onClick={onClose}>
      <div className='relatedModalWrapper' onClick={onClose}>
        <div className='relatedModalContent' onClick={(e) => e.stopPropagation()}>
          <table>
            <thead>
              <tr>
                <td>{productInfo.name}</td>
                <td></td>
                <td>{cardInfo.name}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{productInfo.category}</td>
                <td>Category</td>
                <td>{cardInfo.category}</td>
              </tr>
              <tr>
                <td>{stylesInfo.results[0].original_price}</td>
                <td>Original Price</td>
                <td>{cardInfo.originalPrice}</td>
              </tr>
              <tr>
                <td>{stylesInfo.results[0].sale_price}</td>
                <td>Sale Price</td>
                <td>{cardInfo.salePrice}</td>
              </tr>
              <tr>
                <td>{ratingAvg}</td>
                <td>Rating</td>
                <td>{cardInfo.rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>, modalElement);
};

export default ComparisonModal;