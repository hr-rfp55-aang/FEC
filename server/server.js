const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const atelier = require('../helpers/atelier.js');
const PORT = 3001;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

function getRequest(endpoint) {
  app.get(endpoint, (req, res) => {
    atelier.getAtelier(req.url)
      .then( (data) => {
        res.status(200).send(data);
      })
      .catch( (err) => {
        console.log(`get ${req.url}: ${err}`);
        res.status(404).send(`Failed to retrieve ${req.url}`);
      });
  });
}

getRequest('/products');
getRequest('/products/:product_id');
getRequest('/products/:product_id/styles');
getRequest('/products/:product_id/related');
getRequest('/reviews');
getRequest('/reviews/meta');
getRequest('/qa/questions');
getRequest('/qa/questions/:question_id/answers');
getRequest('/cart');



app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});


