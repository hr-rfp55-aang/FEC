import React, { useState, useEffect } from 'react';
import SizeOptions from './SizeOptions.jsx';
import QuantityOptions from './QuantityOptions.jsx';
import { getServer, postServer } from '../../helpers';

const AddToCart = ({ currentProductSizes }) => {

  const [currentSku, setCurrentSku] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState('');
  const [removedFromInventory, setRemovedFromInventory] = useState({});
  const [itemsInCart, setItemsInCart] = useState([]);
  const skus = Object.keys(currentProductSizes || {});
  const sku = currentProductSizes[currentSku];
  let quantities = [];

  // // Create a Get Request for cart
  // getServer('/cart')
  //   .then((result) => {
  //     setItemsInCart(result);
  //     setRemovedFromInventory();
  //   })
  //   .catch((err) => {
  //     console.log('Cart err: ', err);
  //   });

  // console.log('in add ToCart', itemsInCart);

  if (sku) {
    for (let i = 1; i <= Math.min(sku.quantity, 15); i++) {
      quantities.push(i);
    }
  }
  // console.log('In AddToCart ', currentProductSizes);
  return (
    <div>

      <form className="sizeAndQuantity">
        <div>
          <select name="sizes" value={currentSku} onChange={(e) => {
            setCurrentSku(e.target.value); setCurrentQuantity('');
          }}>
            <option value="">SELECT SIZE</option>
            {skus.map((sku) => {
              const size = currentProductSizes[sku];
              if (size.quantity > 0) {
                return <SizeOptions key={sku} sku={sku} size={size} />;
              }
            })}

          </select>
        </div>

        <div>
          <select name="quantity" value={currentQuantity} onChange={(e) => {
            setCurrentQuantity(e.target.value);
          }}>
            <option value="">-</option>
            {quantities.map((quantity) => {
              return <QuantityOptions key={quantity} quantity={quantity} />;
            })}

          </select>
        </div>
      </form>


      <div>
        <button
          onClick={() => {
            // console.log(`${currentQuantity} size ${currentProductSizes[currentSku].size}s added to cart`);

            const removed = {};
            removed[currentSku] = { size: currentProductSizes[currentSku].size, quantity: currentQuantity };

            // console.log('In on click removed is ', removed);
            // setRemovedFromInventory(removed);

            // console.log(removedFromInventory);

            // convert to a post request to cart

            // postServer('/cart')
            //   .then((result) => {
            //     // setItemsInCart(result);
            //     setRemovedFromInventory(result);
            //   })
            //   .catch((err) => {
            //     console.log('Cart err: ', err);
            //   });

          }} >
          Add To Cart
        </button>
      </div>

    </div>
  );
};

export default AddToCart;