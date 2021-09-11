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

app.get('/products', (req, res) => {
  console.log(req.url);
  atelier.getAtetlier(req.url, (err, productData) => {
    if (err) {
      console.log('get /products: ', err);
      res.status(404).send(err);
    } else {
      console.log('product get: ', productData);
      res.status(200).send(productData);
    }
  });
});

app.get('/products/:product_id', (req, res) => {
  console.log(req.url);
  atelier.getAtetlier(req.url, (err, productData) => {
    if (err) {
      console.log(`get ${req.url}: ${err}`);
      res.status(404).send(`Failed to find product id: ${req.params.product_id}`);
    } else {
      console.log('product get: ', productData);
      res.status(200).send(productData);
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});


