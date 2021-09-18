import React, { useState, useEffect, useContext } from 'react';
import SizeOptions from './SizeOptions.jsx';
import QuantityOptions from './QuantityOptions.jsx';
import { getServer, postServer } from '../../helpers';
import { ContextObj } from '../../ContextObj.jsx';

const AddToCart = ({ currentProductSizes }) => {

  const [currentSku, setCurrentSku] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState();
  const [itemsInCart, setItemsInCart] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const skus = Object.keys(currentProductSizes || {});
  const sku = currentProductSizes[currentSku];
  const { productInfo } = useContext(ContextObj);
  const isQuantityChosen = !!currentQuantity;
  const isSizeChosen = !!currentSku;
  const availableSizes = skus.filter((sku) => {
    return currentProductSizes[sku].quantity > 0;
  });
  const hasAvailableSizes = availableSizes.length !== 0;
  let quantities = [];

  if (sku) {
    for (let i = 1; i <= Math.min(sku.quantity, 15); i++) {
      quantities.push(i);
    }
  }

  useEffect(() => {
    setCurrentSku('');
    setCurrentQuantity();
    setIsButtonClicked(false);
  }, [currentProductSizes]);

  return (
    <div className="addToCart">

      <form className="sizeAndQuantity">
        <div>
          <div>{isButtonClicked && !isSizeChosen && 'Please Choose a size!'} </div>
          <select disabled={!hasAvailableSizes} name="sizes" value={currentSku} onChange={(e) => {
            setCurrentSku(e.target.value); setCurrentQuantity(1);
          }}>
            <option value="">{hasAvailableSizes ? 'SELECT SIZE' : 'OUT OF STOCK'} </option>
            {availableSizes.map((sku) => {
              return <SizeOptions key={sku} sku={sku} size={currentProductSizes[sku]} />;
            })}
          </select>

          <select disabled={!isSizeChosen} id="quantityDropDown" name="quantity" value={currentQuantity} onChange={(e) => {
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
        {hasAvailableSizes &&
          <button
            onClick={() => {
              setIsButtonClicked(true);

              if (isQuantityChosen && isSizeChosen) {
                alert(`${currentQuantity} size ${currentProductSizes[currentSku].size} ${productInfo.name} now added to your cart!`);

                // Post request for cart
                postServer('/cart', {
                  'sku_id': currentSku
                })
                  .then((result) => {
                    // console.log('in post cart request ', result);
                    setIsButtonClicked(false);
                  })
                  .catch((err) => {
                    console.log('Cart POST err: ', err);
                  });

                // Get Request for Cart
                getServer('/cart')
                  .then((result) => {
                    // console.log('in get cart request ', result);
                    setItemsInCart(result);
                  })
                  .catch((err) => {
                    console.log('Cart err: ', err);
                  });
              }
            }} >
            Add To Cart
          </button>
        }
      </div>

    </div>
  );
};

export default AddToCart;