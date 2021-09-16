import React, { useState, useEffect } from 'react';
import Details from './Components/Details/Details';
import Questions from './Components/Questions/Questions';
import Reviews from './Components/Reviews/Reviews';
import Related from './Components/Related/Related';
import NavBar from './Components/NavBar/NavBar';
import { getServer, grabReviewScore, formatDate } from './helpers';
import { ContextObj } from './ContextObj';

const App = () => {

  const [productId, setProductId] = useState(40390);
  const [productInfo, setProductInfo] = useState({});
  const [ratingAvg, setRatingAvg] = useState(0);
  const [reviewsTotal, setReviewsTotal] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

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
        setIsError(false);
      })
      .catch ( (err) => {
        console.log('App promise all:', err);
        setIsError(true);
      });
  }, [productId]);

  return (
    <div>
      {isLoaded && <ContextObj.Provider value={{ productId, setProductId, productInfo, ratingAvg, reviewsTotal }}>
        <NavBar />
        {!isError &&
        <div>
          <Details />
          <Related />
          <Questions />
          <Reviews />
        </div> }
      </ContextObj.Provider>}
    </div>
  );
};

export default App;
