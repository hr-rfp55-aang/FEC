import React, { useState, useContext } from 'react';
import { postServer, validateEmail } from '../../helpers';
import { ContextObj } from '../../ContextObj.jsx';
import ReviewModalCharList from './ReviewModalCharList.jsx';

const ReviewModal = ({ submitReview, setSubmitReview }) => {
  const [starValue, setStarValue] = useState('');
  const [recommend, setRecommend] = useState('');

  const { reviewMetaObj } = useContext(ContextObj);
  var characteristics = Object.keys(reviewMetaObj.characteristics);

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
            <form onChange={(e) => setStarValue(e.target.value)}>
              <input type="radio" id="1Star" name="rating" value="1" />
              <label htmlFor="1Star">*</label>
              <input type="radio" id="2Star" name="rating" value="2" />
              <label htmlFor="2Star">**</label>
              <input type="radio" id="3Star" name="rating" value="3" />
              <label htmlFor="3Star">***</label>
              <input type="radio" id="4Star" name="rating" value="4" />
              <label htmlFor="4Star">****</label>
              <input type="radio" id="5Star" name="rating" value="5" />
              <label htmlFor="5Star">*****</label>
            </form>
          </div>
          <div>
            <form onChange={(e) => setRecommend(e.target.value)}>
              <input type="radio" id="yes" name="recommend" value="false" />
              <label htmlFor="yes">NO</label>
              <input type="radio" id="no" name="recommend" value="true" />
              <label htmlFor="no">YES</label>
            </form>
          </div>
          <ReviewModalCharList />
          <div>
            <div>
              <label>
                *Your Review Summary
                <textarea ></textarea>
              </label>
            </div>
            <div>
              <label>
                *Your Review Body
                <textarea ></textarea>
              </label>
            </div>
            <div>
              <label>
                *What is your nickname
                <input type="text" placeholder="Example: jackson11!"></input>
              </label>
              <div>
                For privacy reasons, do not use your full name or email address
              </div>
            </div>
            <div>
              <label>
                *Your email
                <input type="text" placeholder="Why did you like the product or not?"></input>
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
          <button >Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;


// var characteristicForm = (blah) => {
//   var filters = { display: 'block' };

//   return (
//     <div>
//       <div className='characteristic1' style={(blah[0]) ? filters : null}>
//         <form onChange={(e) => setStarValue(e.target.value)}>
//           <div>{blah[0]}</div>
//           <input type="radio" id="1Star" name="rating" value="1" />
//           <label htmlFor="1Star">*</label>
//           <input type="radio" id="2Star" name="rating" value="2" />
//           <label htmlFor="2Star">**</label>
//           <input type="radio" id="3Star" name="rating" value="3" />
//           <label htmlFor="3Star">***</label>
//           <input type="radio" id="4Star" name="rating" value="4" />
//           <label htmlFor="4Star">****</label>
//           <input type="radio" id="5Star" name="rating" value="5" />
//           <label htmlFor="5Star">*****</label>
//         </form>
//       </div>
//       <div className='characteristic2' style={(blah[1]) ? filters : null}>
//         <form onChange={(e) => setStarValue(e.target.value)}>
//           <div>{(blah[1]) ? blah[1] : ''}</div>
//           <input type="radio" id="1Star" name="rating" value="1" />
//           <label htmlFor="1Star">*</label>
//           <input type="radio" id="2Star" name="rating" value="2" />
//           <label htmlFor="2Star">**</label>
//           <input type="radio" id="3Star" name="rating" value="3" />
//           <label htmlFor="3Star">***</label>
//           <input type="radio" id="4Star" name="rating" value="4" />
//           <label htmlFor="4Star">****</label>
//           <input type="radio" id="5Star" name="rating" value="5" />
//           <label htmlFor="5Star">*****</label>
//         </form>
//       </div>
//       <div className='characteristic3' style={(blah[2]) ? filters : null}>
//         <form onChange={(e) => setStarValue(e.target.value)}>
//           <div>{(blah[2]) ? blah[2] : ''}</div>
//           <input type="radio" id="1Star" name="rating" value="1" />
//           <label htmlFor="1Star">*</label>
//           <input type="radio" id="2Star" name="rating" value="2" />
//           <label htmlFor="2Star">**</label>
//           <input type="radio" id="3Star" name="rating" value="3" />
//           <label htmlFor="3Star">***</label>
//           <input type="radio" id="4Star" name="rating" value="4" />
//           <label htmlFor="4Star">****</label>
//           <input type="radio" id="5Star" name="rating" value="5" />
//           <label htmlFor="5Star">*****</label>
//         </form>
//       </div>
//       <div className='characteristic4' style={(blah[3]) ? filters : null}>
//         <form onChange={(e) => setStarValue(e.target.value)}>
//           <div>{(blah[3]) ? blah[3] : ''}</div>
//           <input type="radio" id="1Star" name="rating" value="1" />
//           <label htmlFor="1Star"></label>
//           <input type="radio" id="2Star" name="rating" value="2" />
//           <label htmlFor="2Star">**</label>
//           <input type="radio" id="3Star" name="rating" value="3" />
//           <label htmlFor="3Star">***</label>
//           <input type="radio" id="4Star" name="rating" value="4" />
//           <label htmlFor="4Star">****</label>
//           <input type="radio" id="5Star" name="rating" value="5" />
//           <label htmlFor="5Star">*****</label>
//         </form>
//       </div>
//     </div>
//   );

// };