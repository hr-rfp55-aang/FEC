import React, { useState, useContext, useEffect } from 'react';
import { postServer, validateEmail, getServer } from '../../helpers';
import { ContextObj } from '../../ContextObj.jsx';
import ReviewModalCharList from './ReviewModalCharList.jsx';
import { FaStar } from 'react-icons/fa';
import Client from './filestack.config.js';

const ReviewModal = ({ submitReview, setSubmitReview, setReviews, uploadPics, setUploadPics }) => {
  const [starValue, setStarValue] = useState();
  const [hover, setHover] = useState(null);
  const [recommend, setRecommend] = useState();
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [charObj, setCharObj] = useState();
  const [bodyCharCount, setBodyCharCount] = useState(0);
  const [emailBool, setEmailBool] = useState(false);
  const [nameBool, setNameBool] = useState(false);
  const [bodyBool, setBodyBool] = useState(false);
  const [summaryBool, setSummaryBool] = useState(false);
  const [validation, setValidation] = useState(true);
  const [submit, setSubmit] = useState(false);


  const { reviewMetaObj, setReviewMeta, productId, productInfo } = useContext(ContextObj);
  var keys = Object.keys(reviewMetaObj.characteristics);

  useEffect(() => {
    var obj = {};

    for (var i = 0; i < keys.length; i++) {
      obj[reviewMetaObj.characteristics[keys[i]].id] = null;
    }
    setCharObj(obj);
  }, [reviewMetaObj]);

  // var setBools = () => {
  //   if (validateEmail(email)) { setEmailBool(true); setValidation(false); }

  //   if (body !== '' || body.length > 50 || body.length < 1000) { setBodyBool(true); setValidation(false); }

  //   if (summary !== '') { setSummaryBool(true); setValidation(false); }

  //   if (name !== '') { setNameBool(true); setValidation(false); }
  // };

  // var formValidation = () => {
  //   console.log(emailBool, nameBool, summaryBool, bodyBool);
  //   if ((!emailBool || !bodyBool) || (!summaryBool || !nameBool)) {
  //     setValidation(false);
  //     return false;
  //   } else {
  //     setSubmit(true);
  //     return true;
  //   }
  // };


  // var resetForm = () => {
  //   setValidation(false);
  //   setNameBool(false);
  //   setEmailBool(false);
  //   setSummaryBool(false);
  //   setBodyBool(false);
  //   setSummary('');
  //   setBody('');
  //   setName('');
  //   setEmail('');
  // };

  var postReview = () => {

    // if (formValidation()) {
    postServer('/reviews', {
      'product_id': productId,
      'rating': starValue,
      'summary': summary,
      'body': body,
      'recommend': recommend,
      'name': name,
      'email': email,
      'photos': uploadPics,
      'characteristics': charObj
    })
      .then(() => getServer(`/reviews/?product_id=${productId}&count=100`))
      .then((result) => setReviews(result.results))
      .then(() => setSubmitReview(false))
      .then(() => setUploadPics([]));
    // } else {
    //   return;
    // }
  };

  // useEffect(() => {
  //   postReview();
  // }, [submit]);

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

  var invalid = { color: 'red' };

  const uploadPhotos = () => {
    const photos = [...uploadPics];
    const options = {
      onUploadDone: (res) => { photos.push(res.filesUploaded[0].url); setUploadPics(photos); }
    };
    Client.picker(options).open();
  };

  var renderPics = (pics) => {
    if (pics.length === 0) {
      return null;
    }
    return (
      <div className='submitModalPictureBar'>
        <img className='submitModalPictures' src={pics[0]}></img>
        {(pics[1]) ? <img className='submitModalPictures' src={pics[1]}></img> : null}
        {(pics[2]) ? <img className='submitModalPictures' src={pics[2]}></img> : null}
        {(pics[3]) ? <img className='submitModalPictures' src={pics[3]}></img> : null}
        {(pics[4]) ? <img className='submitModalPictures' src={pics[4]}></img> : null}
      </div>
    );
  };

  return (
    <div className="review-modal" onClick={() => { setSubmitReview(false); setHover(null); setStarValue(null); setUploadPics([]); }}>
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
            {summaryBool ? <div style={invalid}>*Your Review Summary</div> : <div>*Your Review Summary</div>}
            <input type='text' className='summary-input' onChange={(e) => setSummary(e.target.value)} placeholder='Best purchase ever!'></input>
          </div>
          <div className='body-form'>
            {bodyBool ? <div style={invalid}>*Your Review Body</div> : <div>*Your Review Body</div>}
            <textarea className='body-input' onChange={(e) => { setBody(e.target.value), setBodyCharCount(e.target.value.length); }} placeholder='Why did you like the product or not?'></textarea>
          </div>
          {(body.length < 50) ? <div className='minimumChars'>{'Minimum required characters left: ' + (50 - body.length)}</div> : <div className='minimumChars'>{body.length < 1000 ? 'Minimum reached' : 'Maximum exeeded'}</div>}
          <div className='name-form'>
            {nameBool ? <div style={invalid}>*What is your nickname</div> : <div>*What is your nickname</div>}
            <input className='name-input' type="text" placeholder="Example: jackson11!" onChange={(e) => setName(e.target.value)}></input>
          </div>
          <p className='name-warning'>
            For privacy reasons, do not use your full name or email address
          </p>
          <div className='email-form'>
            {emailBool ? <div style={invalid}>*Your email</div> : <div>*Your email</div>}
            <input type="text" className='email-input' placeholder="Why did you like the product or not?" onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <p className='email-warning'>
            For authentication reasons you will not be emailed
          </p>
        </div>
        <div className="review-modal-footer">
          <div className='submitPhotosHeader'>
            <div className='submitPhotosTitle'>Submit photos</div>
            <button onClick={() => uploadPhotos()}>Upload Photo</button>
          </div>
          {(uploadPics.length > 0) ? renderPics(uploadPics) : <div className='emptySubmitPhotos'></div>}
          <button className='submit-review' onClick={() => { postReview(); }}>Submit</button>
          {validation ? null : <div className='formValidation'>Fill out required entries</div>}
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
