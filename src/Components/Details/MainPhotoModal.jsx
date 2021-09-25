import React, { useState, useEffect } from 'react';
import missingImg from '../../assets/pants.svg';

const MainPhotoModal = ({ mainPhoto, closeMainPhotoModal, enlargeMainPhoto, productPhotos, setMainPhoto, mainPhotoName, index, photos, getNextImage, getPreviousImage, isMainPhotoZoomedIn, setIsMainPhotoZoomedIn }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const showOrHide = enlargeMainPhoto ? 'modal display-block' : 'modal display-none';
  const modalThumbnails = productPhotos.map((photo, index) => {
    return <img className="modalThumbnail" onClick={() => { setMainPhoto(photo); }} key={index}
      className={mainPhoto.url === photo.url ? 'productMainPhotoThumbnail thumbnailListItem' : 'thumbnailListItem'} src={photo.thumbnail_url ||missingImg} alt={mainPhotoName + index} />;
  });

  return (
    <div>
      {enlargeMainPhoto ?

        <div className="mainPhotoModal" onClick={closeMainPhotoModal} >
          <div className="mainPhoto-modal-content" onClick={e => e.stopPropagation()}>
            <div className="mainPhoto-modal-body">
              <div>
                {
                  index > 0 ?
                    <button onClick={getPreviousImage} className="modalLeftArrow" aria-label="Modal Left Arrow">
                      &larr;
                    </button> : null
                }
              </div>
              {isMainPhotoZoomedIn ?
                <div className="zoomedInContainer">
                  <img className='modalZoomedInMainPhoto' src={mainPhoto.url || missingImg} onClick={() => { setIsMainPhotoZoomedIn(false); }} onMouseMove={(e) => { setMousePosition({ x: e.clientX, y: e.clientY }); }} ></img>
                </div>
                : <img className='modalMainPhoto' src={mainPhoto.url} onClick={() => { setIsMainPhotoZoomedIn(true); }}>
                </img>}
              <div>
                {
                  index < photos.length - 1 ?
                    <button onClick={getNextImage} className="modalRightArrow" aria-label="Modal Right Arrow">
                      &rarr;
                    </button> : null
                }
              </div>
            </div>
            <div className='mainPhoto-modal-footer'>
              {modalThumbnails}
            </div>
          </div>
        </div>

        : null}

    </div>
  );
};

export default MainPhotoModal;