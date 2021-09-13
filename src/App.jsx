import React, { useState, useEffect } from 'react';
import Details from './Components/Details/Details.jsx';
import Questions from './Components/Questions/Questions.jsx';
import Reviews from './Components/Reviews/Reviews.jsx';
import Related from './Components/Related/Related.jsx';
import axios from 'axios';
import { ProductContext } from './ProductContext';

const server = 'http://localhost:3001';

const App = () => {

  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    axios.get(server + '/products/40350')
      .then( (result) => {
        console.log('axios success', result);
        setProductInfo(result.data);
      })
      .catch( (err) => {
        console.log('axios err', err);
      });
  }, []);

  const formatDate = (date) => {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var formattedDate = new Date(date);
    return months[formattedDate.getMonth()] + ' ' + ( formattedDate.getDate() + 1 ) + ', ' + formattedDate.getFullYear();
  }

  return (
    <div>
      <ProductContext.Provider value={productInfo}>
        <Details />
        <Related />
        <Questions />
        <Reviews formatDate={formatDate}/>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
