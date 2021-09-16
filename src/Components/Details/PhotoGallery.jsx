import React, { useState, useEffect, useContext } from 'react';
import ThumbnailList from './ThumbnailList';

const PhotoGallery = ({ currentProductStyle }) => {

  const defaultImg = 'https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80';

  const [mainPhoto, setMainPhoto] = useState(currentProductStyle.photos[0] || {});

  const mainPhotoName = currentProductStyle.name || 'Product Image';

  useEffect(() => {
    setMainPhoto(currentProductStyle.photos[0] || {});
  }, [currentProductStyle]);
  // console.log('In Photo Gallery ', currentProductStyle);

  return (
    <div className="productPhotos">
      <ThumbnailList productPhotos={currentProductStyle.photos} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} mainPhotoName={mainPhotoName} />
      <div>
        <img className="displayedPhoto" src={mainPhoto.url} alt={mainPhotoName} />
      </div>
    </div>
  );
};
export default PhotoGallery;