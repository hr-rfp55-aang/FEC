import axios from 'axios';

const server = 'http://localhost:3001';
const getServer = (endpoint) => {
  return new Promise((resolve, reject) => {
    axios.get(server + endpoint)
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const grabReviewScore = (ratingsObj) => {
  var rating = 0;
  var total = 0;

  for (var key in ratingsObj) {
    rating += Number(key) * Number(ratingsObj[key]);
    total += Number(ratingsObj[key]);
  }

  return Number(Math.round((rating / total) + 'e1') + 'e-1');
};

const formatDate = (date) => {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var formattedDate = new Date(date);
  return months[formattedDate.getMonth()] + ' ' + (formattedDate.getDate() + 1) + ', ' + formattedDate.getFullYear();
};


export {
  getServer,
  grabReviewScore,
  formatDate
};