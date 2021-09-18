import React from 'react';


var ReviewPicEntry = ({picture, setPicShow, setCurPicture}) => {

  return (
    <img className='reviewpics' src={picture} onClick={()=> { setCurPicture(picture), setPicShow(true); } }></img>
  );
};

export default ReviewPicEntry;