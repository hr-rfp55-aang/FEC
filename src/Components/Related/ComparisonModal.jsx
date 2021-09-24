import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { ContextObj } from '../../ContextObj.jsx';
import './styles.css';

const modalElement = document.getElementById('modal-root');

const ComparisonModal = ({show, cardInfo, onClose}) => {

  const { productId, productInfo, stylesInfo, ratingAvg } = useContext(ContextObj);

  let comparison = {};
  for (let i = 0; i < productInfo.features.length; i++) {
    comparison[productInfo.features[i].feature] = [productInfo.features[i].value, null];
  }
  for (let i = 0; i < cardInfo.features.length; i++) {
    if (comparison[cardInfo.features[i].feature] === undefined) {
      comparison[cardInfo.features[i].feature] = [null, cardInfo.features[i].value];
    } else {
      comparison[cardInfo.features[i].feature][1] = cardInfo.features[i].value;
    }
  }

  const comparisonArr = [];
  for (const [key, value] of Object.entries(comparison)) {
    comparisonArr.push([key, value]);
  }

  const createRow = () => {
    return (
      <tr>
        <td>{value[0]}</td>
        <td>{key}</td>
        <td>{value[1]}</td>
      </tr>
    );
  };

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
              {comparisonArr.map( (element, index) => {
                return (<tr key={index}>
                  <td>{element[1][0]}</td>
                  <td>{element[0]}</td>
                  <td>{element[1][1]}</td>
                </tr>);
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>, modalElement);
};

export default ComparisonModal;