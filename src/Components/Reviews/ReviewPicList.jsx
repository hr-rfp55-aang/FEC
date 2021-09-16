import React from 'react';
import ReviewPicEntry from './ReviewPicEntry.jsx';

var ReviewPicList = ({pictures}) => {

  return (
    <div>
      {pictures.map((picture) =>
        <ReviewPicEntry key={picture.id} picture={picture.url}/>
      )}
    </div>
  );
};

export default ReviewPicList;