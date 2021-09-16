import React, { useState, useEffect } from 'react';
import Details from './Components/Details/Details.jsx';
import Questions from './Components/Questions/Questions.jsx';
import Reviews from './Components/Reviews/Reviews.jsx';
import Related from './Components/Related/Related.jsx';
import { getServer, grabReviewScore, formatDate } from './helpers';
import { ContextObj } from './ContextObj';

const App = () => {

  const [productId, setProductId] = useState(40390);
  const [productInfo, setProductInfo] = useState({});
  const [ratingAvg, setRatingAvg] = useState(0);
  const [reviewsTotal, setReviewsTotal] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      getServer(`/products/${productId}`),
      getServer(`/reviews/meta/?product_id=${productId}`)
    ])
      .then(([pProductInfo, pReviewMeta]) => {
        setProductInfo(pProductInfo);
        setRatingAvg(grabReviewScore(pReviewMeta.ratings)[0]);
        setReviewsTotal(grabReviewScore(pReviewMeta.ratings)[1]);
        setIsLoaded(true);
      })
      .catch ( (err) => {
        console.log('Promise all:', err);
      });
  }, [productId]);

  return (
    <div>
      {isLoaded && <ContextObj.Provider value={{ productId, productInfo, ratingAvg, reviewsTotal }}>
        {/* <Details /> */}
        <Related />
        {/* <Questions /> */}
        <Reviews />
      </ContextObj.Provider>}
    </div>
  );
};

export default App;
