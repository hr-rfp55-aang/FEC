import React, {useState} from 'react';

const MainPhotoModal = ({ mainPhoto, closeMainPhotoModal, enlargeMainPhoto, productPhotos, setMainPhoto, mainPhotoName, index, photos, getNextImage, getPreviousImage }) => {
  const [isMainPhotoZoomedIn, setIsMainPhotoZoomedIn] = useState(false);
  const showOrHide = enlargeMainPhoto ? 'modal display-block' : 'modal display-none';
  const modalThumbnails = productPhotos.map((photo, index) => {
    return <img onClick={() => { setMainPhoto(photo); }} key={index}
      className={mainPhoto.url === photo.url ? 'productMainPhotoThumbnail thumbnailListItem' : 'thumbnailListItem'} src={photo.thumbnail_url} alt={mainPhotoName + index} />;
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
                    <button onClick={getPreviousImage} className="modalLeftArrow">
                      &larr;
                    </button> : null
                }
              </div>
              <img className='modalMainPhoto' src={mainPhoto.url} onClick={() => { setIsMainPhotoZoomedIn(true); }}>
              </img>
              {isMainPhotoZoomedIn ? <img className='modalZoomedInMainPhoto' src={mainPhoto.url} onClick={() => { setIsMainPhotoZoomedIn(false); }}></img> : null}
              <div>
                {
                  index < photos.length - 1 ?
                    <button onClick={getNextImage} className="modalRightArrow">
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