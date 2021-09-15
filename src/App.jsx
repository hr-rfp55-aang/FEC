import React, { useState, useEffect } from 'react';
import Details from './Components/Details/Details.jsx';
import Questions from './Components/Questions/Questions.jsx';
import Reviews from './Components/Reviews/Reviews.jsx';
import Related from './Components/Related/Related.jsx';
import axios from 'axios';
import { ContextObj } from './ContextObj';

const server = 'http://localhost:3001';

const App = () => {

  const [productInfo, setProductInfo] = useState({});
  const [ratingAvg, setRatingAvg] = useState(0);

  const getServer = (endpoint, callback) => {
    axios.get(server + endpoint)
      .then((result) => {
        callback(result.data);
      })
      .catch((err) => {
        console.log('axios err', err);
      });
  };

  const grabReviewScore = (ratingsObj) => {
    var rating = 0;
    var total = 0;

    for (var key in ratingsObj) {
      rating += Number(key) * Number(ratingsObj[key]);
      total += Number(ratingsObj[key]);
    }
    setRatingAvg(Number(Math.round((rating / total) + 'e1') + 'e-1'));
  };

  useEffect(() => {
    getServer('/products/40350', (result) => setProductInfo(result));
  }, []);

  useEffect(() => {
    getServer('/reviews/meta/?product_id=40375', (result) => grabReviewScore(result.ratings));
  }, [productInfo]);



  const formatDate = (date) => {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var formattedDate = new Date(date);
    return months[formattedDate.getMonth()] + ' ' + (formattedDate.getDate() + 1) + ', ' + formattedDate.getFullYear();
  };

  return (
    <div>
      {productInfo.id && <ContextObj.Provider value={{ productInfo: productInfo, getServer: getServer, formatDate: formatDate, ratingAvg: ratingAvg}}>
        <Details />
        <Related />
        <Questions />
        <Reviews />
      </ContextObj.Provider>}
    </div>
  );
};

export default App;
