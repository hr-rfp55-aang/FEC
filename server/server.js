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

function putRequest(endpoint) {
  app.put(endpoint, (req, res) => {
    atelier.putAtelier(req.url)
      .then( (data) => {
        res.status(201).send('Item updated successfully');
      })
      .catch( (err) => {
        console.log(`put ${req.url}: ${err}`);
        res.status(404).send(`Failed to retrieve ${req.url}`);
      });
  });
}

putRequest('/reviews/:review_id/helpful');
putRequest('/reviews/:review_id/report');
putRequest('/qa/questions/:question_id/helpful');
putRequest('/qa/questions/:question_id/report');
putRequest('/qa/answers/:answer_id/helpful');
putRequest('/qa/answers/:answer_id/report');

function postRequest(endpoint) {
  app.post(endpoint, (req, res) => {
    atelier.postAtelier(req.url, req.body)
      .then( (data) => {
        res.status(201).send('item created');
      })
      .catch( (err) => {
        console.log(`post ${req.url}: ${err}`);
        res.status(404).send(`Failed to retrieve ${req.url}`);
      });
  });
}

postRequest('/qa/questions');
postRequest('/qa/questions/:question_id/answers');
postRequest('/reviews');

postRequest('/cart');

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});


