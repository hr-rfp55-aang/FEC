import React, { useState, useContext, useEffect } from 'react';
import { postServer, validateEmail, getServer } from '../../helpers';
import { ContextObj } from '../../ContextObj.jsx';
import ReviewModalCharList from './ReviewModalCharList.jsx';

const ReviewModal = ({ submitReview, setSubmitReview }) => {
  const [starValue, setStarValue] = useState();
  const [recommend, setRecommend] = useState();
  const [summary, setSummary] = useState();
  const [body, setBody] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [charObj, setCharObj] = useState();

  const { reviewMetaObj, productId } = useContext(ContextObj);
  var keys = Object.keys(reviewMetaObj.characteristics);

  useEffect(() => {
    var obj = {};

    for (var i = 0; i < keys.length; i++) {
      obj[reviewMetaObj.characteristics[keys[i]].id] = null;
    }
    setCharObj(obj);
  }, [reviewMetaObj]);


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
      .then(() => setSubmitReview(false));
      // .then(()=>getServer(`/reviews/meta/?product_id=${productId}`));
  };

  if (!submitReview) {
    return null;
  }

  return (
    <div className="modal" onClick={() => setSubmitReview(false)}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Submit Your Review</h2>
          <h4 className="modal-subtitle">About the Product</h4>
        </div>
        <div className="modal-body">
          <div>
            <form onChange={(e) => setStarValue(Number(e.target.value))}>
              <input type="radio" id="1Star" name="rating" value={1} />
              <label htmfor="1Star">*</label>
              <input type="radio" id="2Star" name="rating" value={2} />
              <label htmfor="2Star">**</label>
              <input type="radio" id="3Star" name="rating" value={3} />
              <label htmfor="3Star">***</label>
              <input type="radio" id="4Star" name="rating" value={4} />
              <label htmfor="4Star">****</label>
              <input type="radio" id="5Star" name="rating" value={5} />
              <label htmfor="5Star">*****</label>
            </form>
          </div>
          <div>
            <form onChange={(e) => setRecommend(JSON.parse(e.target.value))}>
              <input type="radio" id="yes" name="recommend" value={false} />
              <label htmfor="yes">NO</label>
              <input type="radio" id="no" name="recommend" value={true} />
              <label htmfor="no">YES</label>
            </form>
          </div>
          <ReviewModalCharList charObj={charObj} setCharObj={setCharObj} />
          <div>
            <div>
              <label>
                *Your Review Summary
                <textarea onChange={(e) => setSummary(e.target.value)}></textarea>
              </label>
            </div>
            <div>
              <label>
                *Your Review Body
                <textarea onChange={(e) => setBody(e.target.value)}></textarea>
              </label>
            </div>
            <div>
              <label>
                *What is your nickname
                <input type="text" placeholder="Example: jackson11!" onChange={(e) => setName(e.target.value)}></input>
              </label>
              <div>
                For privacy reasons, do not use your full name or email address
              </div>
            </div>
            <div>
              <label>
                *Your email
                <input type="text" placeholder="Why did you like the product or not?" onChange={(e) => setEmail(e.target.value)}></input>
                <div>
                  For authentication reasons you will not be emailed
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          {/* <form action="upload.php" method="post">
            <input type="file" name="file" id="file" />
          </form> */}
          <button onClick={() => postReview()}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
