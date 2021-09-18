import React, { useState, useEffect } from 'react';
import SizeOptions from './SizeOptions.jsx';
import QuantityOptions from './QuantityOptions.jsx';
import { getServer, postServer } from '../../helpers';

const AddToCart = ({ currentProductSizes }) => {

  const [currentSku, setCurrentSku] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState('');
  const [removedFromInventory, setRemovedFromInventory] = useState({});
  const [itemsInCart, setItemsInCart] = useState([]);
  const [isQuantityChosen, setIsQuantityChosen] = useState(false);
  const skus = Object.keys(currentProductSizes || {});
  const sku = currentProductSizes[currentSku];
  let quantities = [];

  useEffect(() => {
    setIsQuantityChosen(false);
  }, [currentQuantity]);

  useEffect(( ) => {
    setItemsInCart();
  });


  // console.log('in add ToCart', itemsInCart);

  if (sku) {
    for (let i = 1; i <= Math.min(sku.quantity, 15); i++) {
      quantities.push(i);
    }
  }
  // console.log('In AddToCart ', currentProductSizes);
  return (
    <div className="addToCart">

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
          <select id="quantityDropDown" name="quantity" value={currentQuantity} onChange={(e) => {
            setCurrentQuantity(e.target.value);
          }}>
            <option value="">-</option>
            {quantities.map((quantity) => {
              return <QuantityOptions key={quantity} quantity={quantity} />;
            })}
          </select>
          <span>{isQuantityChosen && 'Please Choose a quantity!'} </span>
        </div>
      </form>

      <div>
        {currentSku &&
          <button
            onClick={() => {
              // console.log(`${currentQuantity} size ${currentProductSizes[currentSku].size}s added to cart`);

              if (currentQuantity === '') {
                setIsQuantityChosen(true);
              }

              // const removed = {};
              // removed[currentSku] = { size: currentProductSizes[currentSku].size, quantity: currentQuantity };

              // console.log('In on click removed is ', removed);
              // setRemovedFromInventory(removed);
              // console.log(removedFromInventory);

              // Post request for cart
              if (currentQuantity && currentSku) {
                postServer('/cart', {
                  'sku_id': currentSku,
                  'count': currentQuantity
                })
                  .then((result) => {
                    console.log('in post cart request ', result);
                    setRemovedFromInventory(result);
                  })
                  .catch((err) => {
                    console.log('Cart POST err: ', err);
                  });
              }

              // Get Request for Cart
              getServer('/cart')
                .then((result) => {
                  console.log('in get cart request ', result);
                })
                .catch((err) => {
                  console.log('Cart err: ', err);
                });
            }} >
            Add To Cart
          </button>
        }
      </div>

    </div>
  );
};

export default AddToCart;