import React, { useState, useEffect } from 'react';
import Details from './Components/Details/Details';
import Questions from './Components/Questions/Questions';
import Reviews from './Components/Reviews/Reviews';
import Related from './Components/Related/Related';
import Outfits from './Components/Related/Outfits';
import NavBar from './Components/NavBar/NavBar';
import { getServer, grabReviewScore, formatDate } from './helpers';
import { ContextObj } from './ContextObj';

const App = () => {

  const [productId, setProductId] = useState(40350);
  const [productInfo, setProductInfo] = useState({});
  const [ratingAvg, setRatingAvg] = useState(0);
  const [reviewsTotal, setReviewsTotal] = useState(0);
  const [stylesInfo, setStylesInfo] = useState({});
  const [reviewMetaObj, setReviewMetaObj] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);



  useEffect(() => {
    Promise.all([
      getServer(`/products/${productId}`),
      getServer(`/products/${productId}/styles`),
      getServer(`/reviews/meta/?product_id=${productId}`)
    ])
      .then(([product, styles, reviewMeta]) => {
        setProductInfo(product);
        setStylesInfo(styles);
        setRatingAvg(grabReviewScore(reviewMeta.ratings)[0]);
        setReviewsTotal(grabReviewScore(reviewMeta.ratings)[1]);
        setReviewMetaObj(reviewMeta);
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
      {isLoaded && <ContextObj.Provider value={{ productId, setProductId, productInfo, stylesInfo, ratingAvg, reviewsTotal, reviewMetaObj, setReviewMetaObj, setRatingAvg }}>
        <NavBar />
        {!isError &&
        <div>
          <Details />
          <Related />
          <Outfits />
          <Questions />
          <Reviews />
        </div> }
      </ContextObj.Provider>}
    </div>
  );
};

export default App;
