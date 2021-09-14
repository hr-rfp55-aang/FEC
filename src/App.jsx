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

  const getServer = (endpoint, callback) => {
    axios.get(server + endpoint)
      .then( (result) => {
        callback(result.data);
      })
      .catch( (err) => {
        console.log('axios err', err);
      });
  };

  useEffect(() => {
    getServer('/products/40350', (result) => setProductInfo(result) );
  }, []);

  const formatDate = (date) => {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var formattedDate = new Date(date);
    return months[formattedDate.getMonth()] + ' ' + ( formattedDate.getDate() + 1 ) + ', ' + formattedDate.getFullYear();
  };

  return (
    <div>
      <ContextObj.Provider value={{ productInfo: productInfo, getServer: getServer}}>
        <Details />
        <Related />
        <Questions />
        <Reviews formatDate={formatDate}/>
      </ContextObj.Provider>
    </div>
  );
};

export default App;
