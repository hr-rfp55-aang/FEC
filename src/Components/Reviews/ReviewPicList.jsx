import React, { useState } from 'react';
import ReviewPicEntry from './ReviewPicEntry.jsx';
import PictureModal from './PictureModal.jsx';


var ReviewPicList = ({pictures}) => {
  const [picShow, setPicShow] = useState(false);
  const [curPicture, setCurPicture] = useState();

  return (
    <div className='picContainer'>
      {pictures.map((picture) =>
        <ReviewPicEntry key={picture.id} picture={picture.url} pictures={pictures} setCurPicture={setCurPicture} setPicShow={setPicShow}/>
      )}
      <PictureModal picture={curPicture} pictures={pictures} picShow={picShow} onClose={()=>setPicShow(false)} setCurPicture={setCurPicture}/>
    </div>
  );
};

export default ReviewPicList;