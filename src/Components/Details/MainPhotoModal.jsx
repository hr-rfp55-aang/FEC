import React from 'react';

const MainImageModal = ({ mainPhoto, closeMainPhotoModal, enlargeMainPhoto }) => {

  const showOrHide = enlargeMainPhoto ? 'modal display-block' : 'modal display-none';

  return (
    <div>
      {enlargeMainPhoto ?

        <div className="mainPhotoModal" onClick={closeMainPhotoModal} >
          <div className="mainPhoto-modal-content" onClick={e => e.stopPropagation()}>
            <div className="mainPhoto-modal-body">
              <img className='modalMainPhoto' src={mainPhoto.url}></img>
            </div>
          </div>
        </div>

        : null}

    </div>
  );
};

export default MainImageModal;