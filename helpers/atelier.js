const axios = require('axios');
const config = require('../config.js');

const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

let getAtetlier = (endpoint, callback) => {

  let options = {
    method: 'GET',
    url: server + endpoint,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`,
    }
  };

  axios(options)
    .then ( (result) => {
      callback(null, result.data);
    })
    .catch( (err) => {
      callback(err, null);
    });
};


module.exports.getAtetlier = getAtetlier;