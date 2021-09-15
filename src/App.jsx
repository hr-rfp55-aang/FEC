import React, { useState, useEffect } from 'react';
import Details from './Components/Details/Details.jsx';
import Questions from './Components/Questions/Questions.jsx';
import Reviews from './Components/Reviews/Reviews.jsx';
import Related from './Components/Related/Related.jsx';
import { getServer, grabReviewScore, formatDate } from './helpers';
import { ContextObj } from './ContextObj';

const App = () => {

  const [productId, setProductId] = useState(43044);
  const [productInfo, setProductInfo] = useState({});
  const [ratingAvg, setRatingAvg] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   getServer(`/products/${productId}`)
  //     .then( (result) => {
  //       console.log(result);
  //       setProductInfo(result);
  //       setIsLoaded(true);
  //       console.log(isLoaded);
  //     });
  // }, []);

  useEffect(() => {
    Promise.all([
      getServer(`/products/${productId}`),
      getServer(`/reviews/meta/?product_id=${productId}`)
    ])
      .then(([pProductInfo, pReviewMeta]) => {
        setProductInfo(pProductInfo);
        setRatingAvg(grabReviewScore(pReviewMeta.ratings));
        setIsLoaded(true);
      })
      .catch ( (err) => {
        console.log('Promise all:', err);
      });
  }, [productId]);

  return (
    <div>
      {isLoaded && <ContextObj.Provider value={{ productId: productId, productInfo: productInfo, ratingAvg: ratingAvg}}>Loaded
        {/* <Details /> */}
        {/* <Related /> */}
        {/* <Questions /> */}
        {/* <Reviews /> */}
      </ContextObj.Provider>}
    </div>
  );
};

export default App;
