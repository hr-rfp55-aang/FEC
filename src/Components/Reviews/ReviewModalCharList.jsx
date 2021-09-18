import React, { useContext } from 'react';
import { ContextObj } from '../../ContextObj.jsx';
import ReviewModalCharEntry from './ReviewModalCharEntry.jsx';

var ReviewModalCharList = ({ }) => {

  const { reviewMetaObj } = useContext(ContextObj);

  var characteristics = Object.keys(reviewMetaObj.characteristics);


  return (
    <div>
      {characteristics.map((characteristic, index) =>
        <ReviewModalCharEntry name={characteristic} CharObj={reviewMetaObj.characteristics[characteristic]} key={index}/>
      )}
    </div>
  );

};

export default ReviewModalCharList;