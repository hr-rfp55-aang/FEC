import React, { useState, useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import ReviewPicList from './ReviewPicList.jsx';
import { formatDate } from '../../helpers';
import StarRatings from './StarRatings.jsx';
import {FaCheck} from 'react-icons/fa';

var ReviewListEntry = ({ review, setReviews, setCurReview, setReport }) => {

  const [seeMore, setSeeMore] = useState(false);

  var recommedCheck = () => {
    return (
      <div className='checkMark'>
        <FaCheck size={14} color={'#525252'}/>
        <div className='iRecommend'>I recommend this product</div>
      </div>
    );
  };

  var limitCharacters = (reviewBody) => {
    if (reviewBody.length > 250) {
      return (
        <div className='body'>{review.body.substr(0, 250) + '...'}<br></br>
          <span className='seeMore' onClick={()=>setSeeMore(true)}>  See more...</span></div>
      );
    } else {
      return (
        <div className='body'>{review.body}</div>
      );
    }
  };

  return (
    (review.response) ?
      <div className='reviewEntry' >
        <div id='rating'><StarRatings rating={review.rating}/></div>
        <div className='date'>{review.reviewer_name}, {formatDate(review.date)}</div>
        <div className='summary'><b>{review.summary}</b></div>
        {!seeMore ? limitCharacters(review.body) : <div className='body'>{review.body}</div>}
        <div>{(review.recommend) ? (recommedCheck()) : ''}</div>
        <div className='response'>Response: <br></br> <br></br>{review.response}</div>
        <ReviewPicList pictures={review.photos}/>
        <div className='helpful'>Helpful? <u className='helpReport' onClick={()=>setCurReview(review.review_id)}>Yes({review.helpfulness})</u>
        | <u className='helpReport' onClick={()=>setReport(review.review_id)}>Report</u> </div>
      </div > :
      <div className='reviewEntry'>
        <div id='rating'><StarRatings rating={review.rating}/></div>
        <div className='date'>{review.reviewer_name}, {formatDate(review.date)}</div>
        <div className='summary'><b>{review.summary}</b></div>
        {!seeMore ? limitCharacters(review.body) : <div className='body'>{review.body}</div>}
        <div>{(review.recommend) ? (recommedCheck()) : ''}</div>
        <ReviewPicList pictures={review.photos}/>
        <div className='helpful'>Helpful? <u className='helpReport' onClick={()=>setCurReview(review.review_id)}>Yes({review.helpfulness})</u>
        | <u className='helpReport' onClick={()=>setReport(review.review_id)}>Report</u> </div>
      </div>
  );
};

export default ReviewListEntry;