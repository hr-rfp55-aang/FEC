import React, { useState, useEffect, useContext } from 'react';
import ThumbnailList from './ThumbnailList';
import MainPhotoModal from './MainPhotoModal.jsx';
import { ContextObj } from '../../ContextObj.jsx';
import missingImg from '../../assets/pants.svg';

const PhotoGallery = ({ currentProductStyle }) => {
  const { productInfo } = useContext(ContextObj);
  const [mainPhoto, setMainPhoto] = useState(currentProductStyle.photos[0] || {});
  const mainPhotoName = currentProductStyle.name || 'Product Image';
  const photos = currentProductStyle.photos;
  const index = photos.findIndex(photo => photo.url === mainPhoto.url);
  const [enlargeMainPhoto, setEnlargeMainPhoto] = useState(false);
  const [isMainPhotoZoomedIn, setIsMainPhotoZoomedIn] = useState(false);

  useEffect(() => {
    setMainPhoto(currentProductStyle.photos[0] || {});
  }, [currentProductStyle]);

  const getNextImage = () => {
    setMainPhoto(photos[(index + 1) % photos.length]);
    document.querySelector(`img[src~="${mainPhoto.thumbnail_url}"]`).scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const getPreviousImage = () => {
    setMainPhoto(photos[(index || photos.length) - 1]);
    document.querySelector(`img[src~="${mainPhoto.thumbnail_url}"]`).scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div>
      <div className="productPhotos">
        <ThumbnailList productPhotos={currentProductStyle.photos} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} mainPhotoName={mainPhotoName} currentProductStyle={currentProductStyle} />
        <div>
          {
            index > 0 ?
              <button onClick={getPreviousImage} className="MIleftArrow" aria-label="Main Image Left Arrow">
                &larr;
              </button> : null
          }
        </div>
        {/* Main Displayed Photo */}
        <div className="mainPhotoContainer">
          <img className="displayedPhoto" src={mainPhoto.url || missingImg} alt={mainPhotoName} />
          <button className="buttonToEnlarge" aria-label="Enlarge main Image" onClick={() => setEnlargeMainPhoto(true)}>&#128269;</button>
        </div>
        <div>
          {
            index < photos.length - 1 ?
              <button onClick={getNextImage} className="MIrightArrow" aria-label="Main Image Right Arrow">
                &rarr;
              </button> : null
          }
        </div>

      </div>

      <MainPhotoModal mainPhoto={mainPhoto} enlargeMainPhoto={enlargeMainPhoto} closeMainPhotoModal={() => { setEnlargeMainPhoto(false); setIsMainPhotoZoomedIn(false); } } productPhotos={currentProductStyle.photos} setMainPhoto={setMainPhoto} mainPhotoName={mainPhotoName} index={index} photos={photos} getNextImage={getNextImage} getPreviousImage={getPreviousImage} isMainPhotoZoomedIn={isMainPhotoZoomedIn} setIsMainPhotoZoomedIn={setIsMainPhotoZoomedIn}/>

      {/* Product Description */}
      <div className="descriptionAndFeatures">
        <div>
          <div className="slogan">{productInfo.slogan}</div>
          <span className="detailedDescription"> {productInfo.description}</span>
        </div>

        <div>
          <ul>
            {productInfo.features.map((feature) => {
              return <li key={feature.feature}>{feature.feature}: {feature.value} </li>;
            })}
          </ul>
        </div>

      </div>
    </div>
  );
};
export default PhotoGallery;