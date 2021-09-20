import React, { useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import ReviewModalCharEntry from './ReviewModalCharEntry.jsx';

var ReviewModalCharList = ({ setCharValues, charValues, charObj, setCharObj}) => {

  const { reviewMetaObj } = useContext(ContextObj);
  var characteristics = Object.keys(reviewMetaObj.characteristics);



  return (
    <div>
      {/* <div>Rate for Following characteristics</div> */}
      {characteristics.map((characteristic, index) =>
        <ReviewModalCharEntry name={characteristic} setCharObj={setCharObj} charObject={reviewMetaObj.characteristics[characteristic]}
          key={index} setCharValues={setCharValues} charValues={charValues} charObj={charObj}/>
      )}
    </div>
  );

};

export default ReviewModalCharList;