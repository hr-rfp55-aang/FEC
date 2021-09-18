import React, { useState } from 'react';
import { postServer, validateEmail } from '../../helpers';
import ReviewPicList from './ReviewPicList.jsx';

const PictureModal = ({ picture, pictures, picShow, onClose, setCurPicture }) => {


  var renderPics = (pics) => {
    if (pics.length === 0) {
      return null;
    }
    return (
      <div className='modalPictureBar'>
        <img className='modalPictures' onClick={()=>setCurPicture(pics[0].url)} src={pics[0].url}></img>
        {(pics[1]) ? <img className='modalPictures' onClick={()=>setCurPicture(pics[1].url)} src={pics[1].url}></img> : null}
        {(pics[2]) ? <img className='modalPictures' onClick={()=>setCurPicture(pics[2].url)} src={pics[2].url}></img> : null}
        {(pics[3]) ? <img className='modalPictures' onClick={()=>setCurPicture(pics[3].url)} src={pics[3].url}></img> : null}
        {(pics[4]) ? <img className='modalPictures' onClick={()=>setCurPicture(pics[4].url)} src={pics[4].url}></img> : null}
      </div>
    );
  };

  if (!picShow) {
    return null;
  }

  return (
    <div className="pictureModal" onClick={onClose}>
      <div className="picture-modal-content" onClick={e => e.stopPropagation()}>
        <div className="picture-modal-body">
          <img className='modalPicture' src={picture}></img>
        </div>
        <div className='picture-modal-footer'>
          {renderPics(pictures)}
        </div>
      </div>
    </div>
  );
};

export default PictureModal;