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
  const [filters, setFilters] = useState([]);
  const [submitReview, setSubmitReview] = useState(false);

  const { productInfo, productId, reviewsTotal } = useContext(ContextObj);

  var handleStarFilters = (rating) => {

    const currentIndex = filters.indexOf(rating);
    const newFilters = [...filters];
    if (currentIndex === -1) {
      newFilters.push(rating);
    } else {
      newFilters.splice(currentIndex, 1);
    }

    setFilters(newFilters);
  };


  useEffect(() => {
    getServer(`/reviews/?product_id=${productId}&count=100`)
      .then((result) => { setReviews(result.results); })
      .catch((err) => { console.log('Get review: ', err); });
  }, [productInfo]);

  useEffect(() => {
    getServer(`/reviews/?product_id=${productId}&sort=${sortStr}&count=100`)
      .then((result) => { setReviews(result.results); })
      .catch((err) => { console.log('Get review: ', err); });
  }, [sortStr]);

  useEffect(() => {
    if (curReview !== '' && sortStr !== '') {
      putServer(`/reviews/${curReview}/helpful`)
        .then(() => getServer(`/reviews/?product_id=${productId}&sort=${sortStr}&count=100`))
        .then((result) => { setReviews(result.results); })
        .catch((err) => { console.log('Put review: ', err); });
    } else if (curReview !== '') {
      putServer(`/reviews/${curReview}/helpful`)
        .then(() => getServer(`/reviews/?product_id=${productId}&count=100`))
        .then((result) => { setReviews(result.results); })
        .catch((err) => { console.log('Put review: ', err); });
    }
  }, [curReview]);

  useEffect(() => {
    if (report !== '' && sortStr !== '') {
      putServer(`/reviews/${report}/report`)
        .then(() => getServer(`/reviews/?product_id=${productId}&sort=${sortStr}&count=100`))
        .then((result) => { setReviews(result.results); })
        .catch((err) => { console.log('Put review: ', err); });
    } else if (report !== '') {
      putServer(`/reviews/${report}/report`)
        .then(() => getServer(`/reviews/?product_id=${productId}&count=100`))
        .then((result) => { setReviews(result.results); })
        .catch((err) => { console.log('Put review: ', err); });
    }
  }, [report]);

  return (
    <div>
      <h4 id="ratingsReview">Ratings & Reviews</h4>
      <div className='reviewsTotal'>{reviews.length} reviews, sorted by</div>
      <select className='dropDown' name="selectList" onChange={(e) => setsortStr(e.target.value)}>
        <option value="relevance">relevance</option>
        <option value="helpful">helpfulness</option>
        <option value="newest">newest</option>
      </select>
      <div className='reviews'>
        <ReviewBreakdown reviews={reviews} handleStarFilters={handleStarFilters} filters={filters} setFilters={setFilters} />
        <ReviewList reviews={reviews} setReviews={setReviews} setLimit={setLimit} reviewsLimit={reviewsLimit} setsortStr={setsortStr} setCurReview={setCurReview} setReport={setReport} filters={filters} submitReview={submitReview} setSubmitReview={setSubmitReview} />
      </div>
      <div className='reviewBtnBox'>
        <button className='moreReviews' onClick={() => setLimit(reviewsLimit + 2)}>MORE REVIEWS</button>
        <button className='addReview' onClick={() => setSubmitReview(true)}>ADD REVIEW +</button>
      </div>
    </div>
  );
};

export default Review;
