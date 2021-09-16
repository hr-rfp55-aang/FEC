const axios = require('axios');
const config = require('../config.js');

const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

let getAtelier = (endpoint, callback) => {

  let options = {
    method: 'GET',
    url: server + endpoint,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`,
    }
  };

  return new Promise((resolve, reject) => {
    axios(options)
      .then ( (result) => {
        resolve(result.data);
      })
      .catch( (err) => {
        reject(err);
      });
  });
};

let putAtelier = (endpoint, callback) => {

  let options = {
    method: 'PUT',
    url: server + endpoint,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`,
    }
  };

  return new Promise((resolve, reject) => {
    axios(options)
      .then ( (result) => {
        resolve(result.data);
      })
      .catch( (err) => {
        reject(err);
      });
  });
};


module.exports = {
  getAtelier: getAtelier,
  putAtelier: putAtelier
};