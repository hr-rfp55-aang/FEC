import React, { useState, useEffect, useContext } from 'react';
import SizeOptions from './SizeOptions.jsx';

const AddToCart = ({ currentProductSizes }) => {

  const [currentSize, setCurrentSize] = useState('SELECT SIZE');



  const skus = Object.keys(currentProductSizes || {});

  // console.log('In AddToCart ', currentProductSizes);

  return (
    <div>

      <div className="sizeAndQuantity">
        <div>
          <select name="sizes" defaultValue={currentSize}>

            {skus.map((sku) => {
              const size = currentProductSizes[sku];
              return <SizeOptions key={sku} sku={sku} size={size} currentSize={currentSize} setCurrentSize={setCurrentSize} />;
            })}

          </select>
        </div>
        <div>
          <select></select>
        </div>
      </div>


      <div>
        <button>Add To Cart</button>
      </div>

    </div>
  );
};

export default AddToCart;