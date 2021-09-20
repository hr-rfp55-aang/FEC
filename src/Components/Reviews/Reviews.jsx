import React, { useState, useContext, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import './styles.css';
import { getServer, grabReviewScore, formatDate, putServer } from '../../helpers';
import { ContextObj } from '../../ContextObj';

var Review = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewsLimit, setLimit] = useState(2);
  const [sortStr, setsortStr] = useState('');
  const [curReview, setCurReview] = useState('');
  const [report, setReport] = useState('');

  const { productInfo, productId } = useContext(ContextObj);



  useEffect(() => {
    getServer(`/reviews/?product_id=${productId}&count=100`)
      .then((result) => { setReviews(result.results); });
  }, [productInfo]);

  useEffect(() => {
    getServer(`/reviews/?product_id=${productId}&sort=${sortStr}&count=100`)
      .then((result) => { setReviews(result.results); });
  }, [sortStr]);

  useEffect(() => {
    if (curReview !== '' && sortStr !== '') {
      putServer(`/reviews/${curReview}/helpful`)
        .then(() => getServer(`/reviews/?product_id=${productId}&sort=${sortStr}&count=100`))
        .then((result) => { setReviews(result.results); });
    } else if (curReview !== '') {
      putServer(`/reviews/${curReview}/helpful`)
        .then(() => getServer(`/reviews/?product_id=${productId}&count=100`))
        .then((result) => { setReviews(result.results); });
    }
  }, [curReview]);

  useEffect(() => {
    if (report !== '' && sortStr !== '') {
      putServer(`/reviews/${report}/report`)
        .then(() => getServer(`/reviews/?product_id=${productId}&sort=${sortStr}&count=100`))
        .then((result) => { setReviews(result.results); });
    } else if (report !== '') {
      putServer(`/reviews/${report}/report`)
        .then(() => getServer(`/reviews/?product_id=${productId}&count=100`))
        .then((result) => { setReviews(result.results); });
    }
  }, [report]);

  return (
    <div>
      <h4 id="ratingsReview">Ratings & Reviews</h4>
      <div className='reviews'>
        <ReviewBreakdown reviews={reviews} />
        <ReviewList reviews={reviews} setReviews={setReviews} setLimit={setLimit} reviewsLimit={reviewsLimit} setsortStr={setsortStr} setCurReview={setCurReview} setReport={setReport} />
      </div>
    </div>
  );
};

export default Review;
