import React, { useState, useContext, useEffect } from 'react';
import { postServer, validateEmail, getServer } from '../../helpers';
import { ContextObj } from '../../ContextObj.jsx';
import ReviewModalCharList from './ReviewModalCharList.jsx';
import { FaStar } from 'react-icons/fa';

const ReviewModal = ({ submitReview, setSubmitReview, setReviews }) => {
  const [starValue, setStarValue] = useState();
  const [hover, setHover] = useState(null);
  const [recommend, setRecommend] = useState();
  const [summary, setSummary] = useState();
  const [body, setBody] = useState('');
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [charObj, setCharObj] = useState();
  const [bodyCharCount, setBodyCharCount] = useState(0);

  const { reviewMetaObj, setReviewMeta, productId, productInfo } = useContext(ContextObj);
  var keys = Object.keys(reviewMetaObj.characteristics);

  useEffect(() => {
    var obj = {};

    for (var i = 0; i < keys.length; i++) {
      obj[reviewMetaObj.characteristics[keys[i]].id] = null;
    }
    setCharObj(obj);
  }, [reviewMetaObj]);

  // useEffect(() => {
  //   setBodyCharCount(body.length);
  // }, [body]);

  var postReview = () => {
    postServer('/reviews', {
      'product_id': productId,
      'rating': starValue,
      'summary': summary,
      'body': body,
      'recommend': recommend,
      'name': name,
      'email': email,
      'characteristics': charObj
    })
      .then(() => getServer(`/reviews/?product_id=${productId}&count=100`))
      .then((result) => setReviews(result.results))
      .then(() => setSubmitReview(false));
  };

  if (!submitReview) {
    return null;
  }

  const starPhrase = (rating) => {
    if (rating === 1) { return 'Poor'; }
    if (rating === 2) { return 'Fair'; }
    if (rating === 3) { return 'Average'; }
    if (rating === 4) { return 'Good'; }
    if (rating === 5) { return 'Great'; }
  };

  return (
    <div className="review-modal" onClick={() => { setSubmitReview(false), setHover(null), setStarValue(null); }}>
      <div className="review-modal-content" onClick={e => e.stopPropagation()}>
        <div className="review-modal-header">
          <h2 className="review-modal-title">Submit Your Review</h2>
          <h4 className="review-modal-subtitle">About the {productInfo.name}</h4>
        </div>
        <div className="review-modal-body">
          <div className='form'>
            <h5 className='overall-rating'>Overall Rating:</h5>
            <form className='overall-stars' onChange={(e) => setStarValue(Number(e.target.value))}>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                  <label key={i}>
                    <input type='radio' className='radio-star' name='rating' value={ratingValue}
                      key={i} />
                    <FaStar onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}
                      color={ratingValue <= (hover || starValue) ? 'yellow' : 'grey'} />
                  </label>
                );
              })}
              <div className='starPhrase'>{starPhrase(starValue)}</div>
            </form>
          </div>
          <div className='form'>
            <h5 className='recommend-title' >Do you recommend this product?</h5>
            <form className='recommend-form' onChange={(e) => setRecommend(JSON.parse(e.target.value))}>
              <input type="radio" id="no" name="recommend" value={true} />
              <label htmfor="no">Yes</label>
              <input type="radio" id="yes" name="recommend" value={false} />
              <label htmfor="yes">No</label>
            </form>
          </div>
          <ReviewModalCharList charObj={charObj} setCharObj={setCharObj} />
          <div className='summary-form'>
            *Your Review Summary
            <input type='text' className='summary-input' onChange={(e) => setSummary(e.target.value)} placeholder='Best purchase ever!'></input>
          </div>
          <div className='body-form'>
            *Your Review Body
            <textarea className='body-input' onChange={(e) => { setBody(e.target.value), setBodyCharCount(e.target.value.length); }} placeholder='Why did you like the product or not?'></textarea>
          </div>
          {(body.length < 50) ? <div className='minimumChars'>{50 - body.length + ' remaining characters to reach minimum'}</div> : <div className='minimumChars'>minimum reached</div>}
          <div className='name-form'>
            *What is your nickname
            <input className='name-input' type="text" placeholder="Example: jackson11!" onChange={(e) => setName(e.target.value)}></input>
          </div>
          <p className='name-warning'>
            For privacy reasons, do not use your full name or email address
          </p>
          <div className='email-form'>
            *Your email
            <input type="text" className='email-input' placeholder="Why did you like the product or not?" onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <p className='email-warning'>
            For authentication reasons you will not be emailed
          </p>
        </div>
        <div className="review-modal-footer">
          {/* <form action="upload.php" method="post">
            <input type="file" name="file" id="file" />
          </form> */}
          <button className='submit-review' onClick={() => postReview()}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
