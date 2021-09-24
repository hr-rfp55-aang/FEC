import React, { useState, useEffect } from 'react';

const MainPhotoModal = ({ mainPhoto, closeMainPhotoModal, enlargeMainPhoto, productPhotos, setMainPhoto, mainPhotoName, index, photos, getNextImage, getPreviousImage, isMainPhotoZoomedIn, setIsMainPhotoZoomedIn }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const showOrHide = enlargeMainPhoto ? 'modal display-block' : 'modal display-none';
  const modalThumbnails = productPhotos.map((photo, index) => {
    return <img className="modalThumbnail" onClick={() => { setMainPhoto(photo); }} key={index}
      className={mainPhoto.url === photo.url ? 'productMainPhotoThumbnail thumbnailListItem' : 'thumbnailListItem'} src={photo.thumbnail_url} alt={mainPhotoName + index} />;
  });


  // if the mouse (y) goes up (+) down (-)
  // if the mouse (x) goes left(-) right(+)
  const x = 0;
  const y = 0;

  // useEffect(() => {
  //   x =
  //   y =
  // }, [mousePosition]);

  const zoomStyles = {
    // transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px`
  };
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
              {/* <img className='modalMainPhoto' src={mainPhoto.url} onClick={() => { setIsMainPhotoZoomedIn(true); }}>
              </img> */}
              {isMainPhotoZoomedIn ?
                <div className="zoomedInContainer">
                  <img className='modalZoomedInMainPhoto' style={zoomStyles} src={mainPhoto.url} onClick={() => { setIsMainPhotoZoomedIn(false); }} onMouseMove={(e) => { console.log(mousePosition); setMousePosition({ x: e.clientX, y: e.clientY }); }} ></img>
                </div>
                : <img className='modalMainPhoto' src={mainPhoto.url} onClick={() => { setIsMainPhotoZoomedIn(true); }}>
                </img>}
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